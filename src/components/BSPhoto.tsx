import React, { forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//LB
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from 'reanimated-bottom-sheet';
import { ms } from 'react-native-size-matters';

//CP
import { colors, fonts } from '../commonStyles';

const BSMesAno = forwardRef((props: any, ref) => {
  return (
    <BottomSheet
      ref={ref}
      initialSnap={0}
      snapPoints={[0, ms(175)]}
      borderRadius={10}
      renderContent={() => (
        <RenderContent refSheet={ref} selectedItem={props.selectedItem} />
      )}
      {...props}
    />
  );
});

const RenderContent = (props: any) => {
  return (
    <View style={styles.sheetContainer}>
      <TouchableOpacity
        onPress={() => props.selectedItem('camera')}
        style={styles.button}>
        <Icon name="camera" size={ms(20)} color="#fff" />
        <Text style={styles.buttonLabel}>Tirar Foto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.selectedItem('galeria')}
        style={styles.button}>
        <Icon name="image-multiple" size={ms(20)} color="#fff" />
        <Text style={styles.buttonLabel}>Galeria</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BSMesAno;

const styles = StyleSheet.create({
  sheetContainer: {
    height: ms(175),
    borderTopRightRadius: ms(20),
    borderTopLeftRadius: ms(20),
    backgroundColor: colors.primaryDark,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    width: '90%',
    height: ms(60),
    borderRadius: ms(10),
    alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: colors.primary,
    marginVertical: ms(5),
    paddingHorizontal: ms(20),
  },
  buttonLabel: {
    marginLeft: ms(15),
    fontFamily: fonts.bold,
    color: colors.background,
  },
});
