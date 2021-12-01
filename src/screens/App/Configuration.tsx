import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors, fonts, Layout } from '@theme';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { ms } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Configuration = () => {
  const deleteDatabase = () => {
    AsyncStorage.clear();
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={deleteDatabase} style={styles.buttonOptions}>
          <Text style={styles.buttonLabel}>Apagar Dados</Text>
          <Icon name="trash-can-outline" size={ms(20)} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Configuration;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  buttonOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Layout.PADDING,
    width: '100%',
    height: ms(55),
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.muted,
  },
  buttonLabel: {
    fontFamily: fonts.regular,
  },
});
