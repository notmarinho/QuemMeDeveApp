import { colors } from '@theme';
import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loading: React.FC = ({ ...rest }) => {
  return <ActivityIndicator {...rest} color={colors.background} />;
};

export default Loading;
