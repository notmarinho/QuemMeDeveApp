/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import { colors, fonts } from '../../commounStyles';
import Animated from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ITEM_WIDTH = 150;
const ITEM_HEIGHT = 50;
const data = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const CreateCartao = () => {
  const CardMonth = ({ item }) => {
    // const inputRange = [-1, 0, ITEM_HEIGHT * key, ITEM_HEIGHT * (key + 2)];

    // const scale = scrollX.interpolate({
    //   inputRange,
    //   outputRange: [0.8, 0.8, 1.8, 1],
    //   extrapolate: 'clamp',
    // });

    // const opacity = scrollX.interpolate({
    //   inputRange,
    //   outputRange: [0.2, 0.2, 1, 0.2],
    //   extrapolate: 'clamp',
    // });

    return (
      <Animated.View style={[styles.titleContainer]}>
        <Animated.Text style={[styles.title]}>{item}</Animated.Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        contentContainerStyle={styles.flatlist}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        horizontal>
        {data.map((item, index) => (
          <CardMonth item={item} key={index} />
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default CreateCartao;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    // alignItems: 'center',
  },
  title: {
    color: colors.primary,
    fontFamily: fonts.bold,
    fontSize: 20,
    marginRight: 20,
  },
  flatlist: {
    // paddingHorizontal: 30,
    // paddingVertical: 40,
    paddingRight: ITEM_WIDTH * 1.5,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
