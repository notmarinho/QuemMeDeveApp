import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import { ms } from 'react-native-size-matters';
import { colors, fonts } from '../../commounStyles';
import Toast from 'react-native-toast-message';
import BSPhoto from '@components/BSPhoto';
import { IGasto } from '@interfaces/IMainInterfaces';
import { toCurrency } from '../../utils/auxFunctions';
import { IReduxState } from '@interfaces/IMainInterfaces';
import { useAppDispatch, useAppSelector } from '@hooks';
import {
  selectDebts,
  editDebt,
  filterBy,
} from '../../feature/debts/debetSlice';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { getYear } from 'date-fns';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const DebtDetais = ({ route }: { route: any }) => {
  const debt: IGasto = route.params.item;

  const bsPhotoRef = createRef();
  const [loading, setLoading] = useState<boolean>(false);
  const [editedDebt, setEditedDebt] = useState<IGasto>(route.params.item);

  //Redux
  const dispatch = useAppDispatch();
  const { debtsList, filteringBy } = useAppSelector(selectDebts);
  const { getItem, setItem } = useAsyncStorage('myData');

  const save = () => {
    dispatch(editDebt({ originalDebt: debt, editedDebt: editedDebt })); // Updating Redux
    dispatch(filterBy({ filter: filteringBy, year: getYear(new Date()) }));
    updateStorage();
  };

  const updateStorage = async () => {
    const stringStorage = await getItem();
    if (stringStorage) {
      let myStorage: IReduxState = JSON.parse(stringStorage);
      myStorage = { ...myStorage, debtsList };
      let myStorageString = JSON.stringify(myStorage);
      await setItem(myStorageString);
      Toast.show({
        type: 'success',
        text1: 'Gasto Editado',
        text2: 'Seu gasto acabou de ser editado!',
      });
    } else {
      console.error('No storage found');
    }
  };

  const handlePhotoPicker = (action: 'camera' | 'galeria') => {
    action === 'camera'
      ? ImagePicker.openCamera({
          width: 400,
          height: 400,
          cropping: true,
          cropperToolbarTitle: 'Ajustar Foto',
          cropperToolbarWidgetColor: colors.primary,
          compressImageQuality: 0.8,
        }).then(image => {
          setEditedDebt({ ...editedDebt, picture: image.path });
        })
      : ImagePicker.openPicker({}).then(image => {
          setEditedDebt({ ...editedDebt, picture: image.path });
        });
    bsPhotoRef.current.snapTo(0);
  };

  const openBS = () => bsPhotoRef.current.snapTo(1);

  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <View style={styles.container}>
        <Pressable onPress={openBS} style={styles.imageContainer}>
          {editedDebt.picture ? (
            <Image style={styles.image} source={{ uri: editedDebt.picture }} />
          ) : (
            <Icon name="camera" size={ms(30)} color={colors.mutted} />
          )}
        </Pressable>
        <View style={styles.detailContainer}>
          <View style={styles.topContainer}>
            <Text style={styles.txtName}>{editedDebt.compra}</Text>
            <Text style={styles.txtValue}>
              {' '}
              {toCurrency(editedDebt.valorParcela)}
            </Text>
          </View>
          <TouchableOpacity onPress={save} style={styles.button}>
            {loading ? (
              <ActivityIndicator animating color="#fff" />
            ) : (
              <Text style={styles.buttonLabel}>Salvar</Text>
            )}
          </TouchableOpacity>
        </View>
        <BSPhoto ref={bsPhotoRef} selectedItem={handlePhotoPicker} />
      </View>
    </>
  );
};

export default DebtDetais;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
  },
  detailContainer: {
    flex: 1,
    padding: ms(20),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtName: {
    fontFamily: fonts.bold,
    color: colors.primary,
    fontSize: ms(25),
  },
  txtValue: {
    fontFamily: fonts.bold,
    color: colors.mutted,
    fontSize: ms(20),
  },
  button: {
    width: '100%',
    borderRadius: ms(20),
    height: ms(55),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  buttonLabel: {
    fontSize: ms(16),
    fontFamily: fonts.bold,
    color: colors.background,
  },
});
