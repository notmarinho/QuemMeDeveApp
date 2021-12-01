import { colors, fonts } from '@theme';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';
import { ms } from 'react-native-size-matters';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

const Button: React.FC<IButtonProps> = props => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      {props.loading ? (
        <ActivityIndicator animating />
      ) : (
        <Text style={styles.label}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: ms(55),
    borderRadius: ms(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  label: {
    fontFamily: fonts.bold,
    color: colors.background,
    fontSize: ms(16),
  },
});
