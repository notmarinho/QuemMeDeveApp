import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useColorScheme,
} from 'react-native';

//LB
import { ms } from 'react-native-size-matters';
import { useTheme } from '@react-navigation/native';

//CP
import { IGasto } from '@interfaces/IMainInterfaces';
import { toCurrency } from '@utils/auxFunctions';

//Interface
interface Props {
  item: IGasto;
}

const { width: windowWidth } = Dimensions.get('window');

const CardGasto: React.FC<Props> = ({ item }) => {
  const { colors } = useTheme();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.card }}>
      <Text style={{ color: colors.text }}>
        {`${item.compra} ${item.parcela + '/' + item.totalParcelas}`}
      </Text>
      <Text style={{ color: colors.primary }}>
        {toCurrency(item.valorParcela)}
      </Text>
    </View>
  );
};

export default CardGasto;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: ms(20),
    width: windowWidth * 0.9,
    height: ms(50),
    borderRadius: ms(8),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    marginVertical: ms(2.5),
  },
});
