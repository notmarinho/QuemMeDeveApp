import { colors } from '@theme';
import React from 'react';
import { Text, View, TextInputProps, TextInput } from 'react-native';
import { ms } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles.Input';

interface iInputProps extends TextInputProps {
  label?: string;
  icon?: string;
}

const Input: React.FC<iInputProps> = ({ label, icon, ...rest }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon
          name={icon}
          size={ms(20)}
          color={colors.muted}
          style={styles.icon}
        />
      )}
      <View style={styles.inputContainer}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput style={styles.input} {...rest} />
      </View>
    </View>
  );
};

export default Input;
