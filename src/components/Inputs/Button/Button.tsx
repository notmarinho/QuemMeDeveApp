import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { ms } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Loading from '@components/Layouts/Loading/Loading';

import { colors } from '@theme';
import styles from './styles.Button';

export type iButton = {
  label?: string;
  icon?: string;
  loading?: boolean;
} & TouchableOpacityProps;

const Button: React.FC<iButton> = ({ label, icon, loading, ...rest }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            rest.disabled && !loading ? colors.muted : colors.primary,
        },
      ]}
      {...rest}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {icon && (
            <Icon
              name={icon}
              size={ms(25)}
              color={colors.primary}
              style={styles.icon}
            />
          )}
          <Text style={styles.label}>{label}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
