import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layout, FontSize, fonts } from '../../commounStyles';

interface DetailsSectionProps {
  ano?: number;
  mes?: string;
  valorTotal?: string;
}

const DetailsSection: React.FC<DetailsSectionProps> = props => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.ano}>2021</Text>
        <Text style={styles.mes}>Setembro</Text>
      </View>
      <Text style={styles.valorTotal}>4.503,30</Text>
    </View>
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
