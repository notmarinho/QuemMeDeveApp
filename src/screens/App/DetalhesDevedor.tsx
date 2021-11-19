import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import CardDevedor from '@components/DetalhesDevedor/CardDevedor';
import DetailsSection from '@components/DetalhesDevedor/DetailsSection';
import CardGasto from '@components/DetalhesDevedor/CardGasto';

import { ms } from 'react-native-size-matters';
import { Layout } from '../../commounStyles';
import { FlatList } from 'react-native-gesture-handler';

const Dashboard = () => {
  return (
    <>
      <StatusBar backgroundColor="#0B0C0D" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <CardDevedor />
        </View>
        <View style={styles.middleContainer}>
          <DetailsSection />
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            data={['', '', '', '', '', '', '', '']}
            contentContainerStyle={{ paddingVertical: Layout.PADDING }}
            renderItem={() => <CardGasto />}
            keyExtractor={(_, idx) => String(idx)}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
};

export default Dashboard;

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
