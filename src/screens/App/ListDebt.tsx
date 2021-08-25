import React, { useEffect, useState, createRef } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, Dimensions, } from 'react-native';

//Redux
import { useAppDispatch, useAppSelector } from '@hooks';
import { selectDebts, filterBy } from '../../feature/debts/debetSlice'

//CP
import { colors } from '../../commounStyles';
import { filterDebts } from '@utils/filterManager';
import ListOfDebts from '@components/ListOfDebts/ListOfDebts';

//LB
import BottomSheet from 'reanimated-bottom-sheet';

const ListDebts = (props: any) => {
    const sheetRef = createRef<BottomSheet>();
    useEffect(() => { filterOnRedux("mes") }, [])

    // Redux
    const dispatch = useAppDispatch();
    const { debtsFilter } = useAppSelector(selectDebts);

    const filterOnRedux = (filter: 'mes' | 'devedor' | 'cartao' | 'compra') => {
        dispatch(filterBy({ filter: filter }))
    }

    return (
        <ListOfDebts
            navigation={props.navigation}
            data={debtsFilter}
            filterBy={filterOnRedux}
            ref={sheetRef} />
    )
}

export default ListDebts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
    },

});
