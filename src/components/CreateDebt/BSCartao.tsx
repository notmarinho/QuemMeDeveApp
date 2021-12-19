import React, { forwardRef } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { interpolateNode } from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { ms } from 'react-native-size-matters';

//CP
import { colors, fonts } from '../../commonStyles';
import { CartaoModel } from '@models/CartaoModel';
import { useAppSelector } from '@hooks';
import { useNavigation } from '@react-navigation/core';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SHEET_HEIGHT = ms(340);

type CardDevedorProps = {
  item: CartaoModel;
  selectedItem(item: CartaoModel): void;
};

type IEmptyContent = {
  onPress?(): void;
};

const BSDevedor = forwardRef((props: any, ref) => {
  let fall = new Animated.Value(1);
  const animatedShadowOpacity = interpolateNode(fall, {
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  const cartoes = useAppSelector(state => state.debts.cartoesList);

  return (
    <>
      <BottomSheet
        ref={ref}
        callbackNode={fall}
        initialSnap={0}
        snapPoints={[0, SHEET_HEIGHT]}
        borderRadius={10}
        renderContent={() => (
          <RenderContent
            refSheet={ref}
            selectedItem={props.selectedItem}
            cartoes={cartoes}
          />
        )}
        {...props}
      />
      <Animated.View
        pointerEvents="none"
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: '#000',
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    </>
  );
});

type ContentCartoesProps = {
  refSheet: any;
  cartoes: CartaoModel[];
  selectedItem(item: CartaoModel): void;
};

const RenderContent = (props: ContentCartoesProps) => {
  const navigation = useNavigation();

  const navigateToCreateCartao = () => navigation.navigate('CriarCartao');

  return (
    <View style={styles.sheetContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.refSheet.current?.snapTo(0)}>
          <Icon name="close" size={ms(30)} color={colors.muted} />
        </TouchableOpacity>
        <Text style={styles.title}>Cartões</Text>
        <TouchableOpacity
          onPress={navigateToCreateCartao}
          style={styles.addNew}>
          <Icon name="credit-card-plus" size={ms(30)} color={colors.muted} />
        </TouchableOpacity>
      </View>
      <FlatList
        ListEmptyComponent={
          <EmptyListContent onPress={navigateToCreateCartao} />
        }
        contentContainerStyle={{ flexGrow: 1 }}
        data={props.cartoes}
        renderItem={({ item }) => (
          <CardDevedor item={item} selectedItem={props.selectedItem} />
        )}
        keyExtractor={(_, idx) => String(idx)}
      />
    </View>
  );
};

const CardDevedor = (props: CardDevedorProps) => {
  const { item, selectedItem } = props;
  return (
    <Pressable
      onPress={() => selectedItem(item)}
      style={styles.cardDevedorContainer}>
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Icon name="credit-card" size={ms(25)} color={item.cor} />
    </Pressable>
  );
};

const EmptyListContent = (props: IEmptyContent) => {
  const { onPress } = props;
  return (
    <Pressable onPress={onPress} style={styles.emptyContainer}>
      <Icon name="credit-card-plus" size={ms(50)} color={colors.muted} />
      <Text style={styles.emptyMessage}>
        Adicione um cartão para registrar os gastos feitos nele!
      </Text>
    </Pressable>
  );
};

export default BSDevedor;

const styles = StyleSheet.create({
  sheetContainer: {
    height: SHEET_HEIGHT,
    borderTopRightRadius: ms(20),
    borderTopLeftRadius: ms(20),
    backgroundColor: colors.background,
    paddingVertical: 16,
    alignItems: 'center',
  },
  header: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: ms(20),
  },
  addNew: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.bold,
    color: colors.text,
    fontSize: ms(14),
  },
  cardDevedorContainer: {
    width: SCREEN_WIDTH * 0.9,
    height: ms(55),
    borderRadius: ms(10),
    marginBottom: ms(10),
    padding: ms(15),
    backgroundColor: colors.card,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardTitle: {
    fontFamily: fonts.bold,
    fontSize: ms(12),
    color: '#303030',
  },
  emptyContainer: {
    height: ms(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    fontFamily: fonts.bold,
    fontSize: ms(20),
    color: colors.muted,
    textAlign: 'center',
    paddingHorizontal: ms(30),
  },
});
