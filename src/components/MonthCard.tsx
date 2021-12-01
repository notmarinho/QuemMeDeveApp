import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { colors, fonts } from '../commonStyles';
import Animated, { interpolateNode } from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const MonthCard = ({ item, index }) => {
  return (
    <Animated.View
      style={[styles.titleContainer, { transform: [{ scale: 1 }] }]}>
      <Text style={styles.title}>{item}</Text>
    </Animated.View>
  );
};

export default MonthCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    width: 120,
    borderWidth: 1,
  },
  title: {
    color: colors.primary,
    fontFamily: fonts.bold,
    fontSize: 20,
    marginRight: 20,
  },
  flatlist: {
    paddingHorizontal: 30,
    paddingRight: SCREEN_WIDTH * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
