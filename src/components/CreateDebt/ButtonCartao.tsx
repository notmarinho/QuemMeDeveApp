import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors, fonts } from '../../commonStyles';

interface IButtonProps {
  onPress(): void;
  title: string | undefined;
  iconColor: string | undefined;
}

const ButtonCartao = (props: IButtonProps) => {
  const { onPress, title, iconColor } = props;
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Icon
        name="credit-card"
        size={ms(30)}
        color={iconColor ? iconColor : colors.primary}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title ? title : 'Cartão'}</Text>
      </View>
    </Pressable>
  );
};

export default ButtonCartao;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
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
  titleContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: ms(18),
    color: colors.muted,
  },
});
