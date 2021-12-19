import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import { Layout, FontSize, fonts } from '../../commonStyles';

interface DetailsSectionProps extends TouchableOpacityProps {
  ano: number;
  mes: string;
  valorTotal: number;
}

import { currencyFormat } from '@utils/auxFunctions';

const DetailsSection: React.FC<DetailsSectionProps> = props => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <View>
        <Text style={styles.ano}>{props.ano}</Text>
        <Text style={styles.mes}>{props.mes}</Text>
      </View>
      <Text style={styles.valorTotal}>{currencyFormat(props.valorTotal)}</Text>
    </TouchableOpacity>
  );
};

export default DetailsSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Layout.PADDING,
  },
  valorTotal: {
    fontSize: FontSize.LARGE,
    fontFamily: fonts.bold,
    color: '#ffffff',
  },
  ano: {
    fontSize: FontSize.SMALL,
    color: '#ffffff',
  },
  mes: {
    fontSize: FontSize.MEDIUM,
    color: '#ffffff',
  },
});
