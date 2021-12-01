import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import CardDevedor from '@components/DetalhesDevedor/CardDevedor';
import DetailsSection from '@components/DetalhesDevedor/DetailsSection';
import CardGasto from '@components/DetalhesDevedor/CardGasto';

import { allMonths } from '@utils/auxFunctions';
import { getComprasDevedor, getComprasDevedorMes } from '@utils/filterManager';

import { useAppSelector } from '@hooks';

import { ms } from 'react-native-size-matters';
import { Layout } from '../../commonStyles';
import { FlatList } from 'react-native-gesture-handler';
import { DevedorModel } from '@models/DevedorModel';
import { getMonth, getYear } from 'date-fns';
import { GastoModel } from '@models/GastoModel';

type DetalhesModel = {
  valorTotalMes: number;
  mes: string;
  ano: number;
};

const DetalhesDevedor = ({ route }) => {
  const devedor: DevedorModel = route.params.devedor;
  const todosGastos = useAppSelector(state => state.debts.debtsList);
  const [mesGastos, setMesGastos] = useState<GastoModel[]>([]);
  const [detalhesGastos, setDetalhesGastos] = useState<DetalhesModel>({
    valorTotalMes: 0,
    mes: 'Janeiro',
    ano: 2021,
  });

  const getDebitosDoDevedor = useCallback(() => {
    const mesAtual = getMonth(new Date());
    const anoAtual = getYear(new Date());
    const mesLabel = allMonths[mesAtual];
    const comprasDevedor = getComprasDevedor(todosGastos, devedor.id);
    const comprasDoMesDevedor = getComprasDevedorMes(
      comprasDevedor,
      mesLabel,
      anoAtual,
    );
    setMesGastos(comprasDoMesDevedor.comprasMes);
    setDetalhesGastos({
      valorTotalMes: comprasDoMesDevedor.valorTotalMes,
      ano: anoAtual,
      mes: mesLabel,
    });
  }, [devedor.id, todosGastos]);

  useEffect(() => {
    getDebitosDoDevedor();
  }, [getDebitosDoDevedor]);

  return (
    <>
      <StatusBar backgroundColor="#0B0C0D" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <CardDevedor devedor={devedor} totalCompras={mesGastos.length} />
        </View>
        <View style={styles.middleContainer}>
          <DetailsSection
            valorTotal={detalhesGastos?.valorTotalMes}
            mes={detalhesGastos?.mes}
            ano={detalhesGastos?.ano}
          />
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            data={mesGastos}
            contentContainerStyle={{ paddingVertical: Layout.PADDING }}
            renderItem={({ item }) => <CardGasto item={item} />}
            keyExtractor={(_, idx) => String(idx)}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};

export default DetalhesDevedor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B0C0D',
  },
  topContainer: {
    flex: 1.5,
    backgroundColor: '#0B0C0D',
    paddingHorizontal: ms(30),
    justifyContent: 'center',
    // paddingTop: ms(20),
  },
  middleContainer: {
    backgroundColor: '#43269D',
    flex: 1,
    borderTopLeftRadius: ms(30),
    borderTopRightRadius: ms(30),
    transform: [{ translateY: ms(20) }],
    paddingBottom: ms(20),
  },
  bottomContainer: {
    backgroundColor: '#ffffff',
    flex: 3,
    borderTopLeftRadius: ms(30),
    borderTopRightRadius: ms(30),
    paddingHorizontal: Layout.PADDING,
  },
});
