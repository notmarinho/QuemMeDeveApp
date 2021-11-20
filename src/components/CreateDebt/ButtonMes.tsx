import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';
import { colors, fonts } from '../../commounStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IButtonProps {
  onPress(): void;
  mes: string | undefined;
  ano: number | undefined;
}

const ButtonMes = (props: IButtonProps) => {
  return (
    <Pressable onPress={() => props.onPress()} style={styles.container}>
      <Icon name="calendar" size={ms(30)} color={colors.primaryDark} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.mes}</Text>
      </View>
    </Pressable>
  );
};

export default ButtonMes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: ms(10),
    padding: ms(10),
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: ms(18),
    color: colors.muted,
    textTransform: 'capitalize',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
