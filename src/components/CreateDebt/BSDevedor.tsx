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
import { ms } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { interpolateNode } from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { colors, fonts } from '../../commounStyles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SHEET_HEIGHT = ms(200);

interface IDevedor {
  item: string;
  selectedItem(item: any): void;
}

interface IEmptyContent {
  onPress?(): void;
}

const BSDevedor = forwardRef((props: any, ref) => {
  let fall = new Animated.Value(1);
  const animatedShadowOpacity = interpolateNode(fall, {
    inputRange: [0, 1],
    outputRange: [0.5, 0],
  });

  return (
    <>
      <BottomSheet
        ref={ref}
        callbackNode={fall}
        initialSnap={0}
        snapPoints={[0, SHEET_HEIGHT]}
        borderRadius={10}
        renderContent={() => (
          <RenderContent refSheet={ref} selectedItem={props.selectedItem} />
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

const RenderContent = (props: any) => {
  return (
    <View style={styles.sheetContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.refSheet.current?.snapTo(0)}>
          <Icon name="close" size={ms(30)} color={colors.mutted} />
        </TouchableOpacity>
        <Text style={styles.title}>Meus devedores</Text>
        <TouchableOpacity
          // onPress={props.navigateToCreateDevedor}
          style={styles.addNew}>
          <Icon
            name="account-multiple-plus"
            size={ms(30)}
            color={colors.mutted}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        ListEmptyComponent={<EmptyListContent />}
        contentContainerStyle={styles.flatlist}
        data={['Mateus', 'Marcos', 'Marley']}
        renderItem={({ item }) => (
          <CardDevedor item={item} selectedItem={props.selectedItem} />
        )}
        keyExtractor={(_, idx) => String(idx)}
      />
    </View>
  );
};

const CardDevedor = (props: IDevedor) => {
  const { item, selectedItem } = props;
  return (
    <Pressable
      onPress={() => selectedItem(item)}
      style={styles.cardDevedorContainer}>
      <View style={styles.imageDevedorContainer}>
        <Text style={styles.devedorSigla}>
          {item[0] + item[item.length - 1]}
        </Text>
      </View>
      <Text style={styles.cardTitle}>
        {item ? item : 'Erro ao encontrar nome'}
      </Text>
    </Pressable>
  );
};

const EmptyListContent = (props: IEmptyContent) => {
  const { onPress } = props;
  return (
    <Pressable onPress={onPress} style={styles.emptyContainer}>
      <Icon
        name="account-multiple-plus"
        size={ms(50)}
        color={colors.background}
      />
      <Text style={styles.emptyMessage}>
        Adicione alguém que te deve, pode ser até você mesmo!
      </Text>
    </Pressable>
  );
};

export default BSDevedor;

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheetContainer: {
    height: SHEET_HEIGHT,
    borderTopRightRadius: ms(20),
    borderTopLeftRadius: ms(20),
    backgroundColor: colors.background,
    // paddingTop: ms(16),
    alignItems: 'center',
  },
  header: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    paddingHorizontal: ms(16),
    paddingTop: ms(12),
    // borderBottomWidth: 1.5,
    borderColor: colors.mutted,
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
    // width: SCREEN_WIDTH * 0.85,
    marginRight: ms(10),
    // backgroundColor: colors.card,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageDevedorContainer: {
    backgroundColor: colors.card,
    height: ms(80),
    width: ms(80),
    borderRadius: ms(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontFamily: fonts.regular,
    fontSize: ms(12),
    marginTop: ms(8),
    color: '#303030',
  },
  devedorSigla: {
    fontSize: ms(20),
    textTransform: 'uppercase',
    color: colors.mutted,
  },
  emptyContainer: {
    height: ms(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    fontFamily: fonts.bold,
    fontSize: ms(20),
    color: colors.background,
    textAlign: 'center',
    paddingHorizontal: ms(30),
  },
  flatlist: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: ms(20),
    paddingHorizontal: ms(20),
    // backgroundColor: 'red',
  },
});
