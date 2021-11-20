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

//LB
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from 'reanimated-bottom-sheet';
import { ms } from 'react-native-size-matters';
import Animated, { interpolateNode } from 'react-native-reanimated';

//CP
import { allMonths } from '../../utils/auxFunctions';
import { colors, fonts } from '../../commounStyles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SHEET_HEIGHT = ms(320);

const BSMesAno = forwardRef((props: any, ref) => {
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
          <Icon name="close" size={ms(30)} color={colors.muted} />
        </TouchableOpacity>
        <Text style={styles.title}>Mês</Text>
        <View />
      </View>
      <FlatList
        numColumns={3}
        contentContainerStyle={{ flexGrow: 1 }}
        data={allMonths}
        renderItem={({ item }) => (
          <CardDevedor item={item} selectedItem={props.selectedItem} />
        )}
        keyExtractor={(_, idx) => String(idx)}
      />
    </View>
  );
};

const CardDevedor = (props: {
  item: string;
  selectedItem(item: string): void;
}) => {
  const { item, selectedItem } = props;
  return (
    <Pressable
      onPress={() => selectedItem(item)}
      style={styles.cardDevedorContainer}>
      <Text style={styles.cardTitle}>{item}</Text>
      {/* <Icon name='credit-card' size={ms(25)} color={item.cor} /> */}
    </Pressable>
  );
};

export default BSMesAno;

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
    fontSize: ms(12),
  },
  cardDevedorContainer: {
    width: SCREEN_WIDTH * 0.22,
    height: ms(55),
    borderRadius: ms(5),
    margin: ms(5),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardTitle: {
    fontFamily: fonts.bold,
    fontSize: ms(10),
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
    color: colors.background,
    textAlign: 'center',
    paddingHorizontal: ms(30),
  },
});
