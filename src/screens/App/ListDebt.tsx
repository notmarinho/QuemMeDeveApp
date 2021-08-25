import React, { useEffect, useState, createRef } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, FlatList, Dimensions, } from 'react-native';

//Redux
import { useAppDispatch, useAppSelector } from '@hooks';
import { selectDebts, setDebtFilter } from '../../feature/debts/debetSlice'

//CP
import { colors } from '../../commounStyles';
import { filterDebts } from '@utils/filterManager';
import ListOfDebts from '@components/ListOfDebts/ListOfDebts';

//LB
import BottomSheet from 'reanimated-bottom-sheet';

const ListDebts = () => {
    const sheetRef = createRef<BottomSheet>();

    // Redux
    const dispatch = useAppDispatch();
    const { debtsList, debtsFilter } = useAppSelector(selectDebts);
    useEffect(() => { filterBy("mes") }, [])

    const filterBy = (field: string) => {
        const data = filterDebts(debtsList, field);
        dispatch(setDebtFilter({ data }));
    }

    return (
        <ListOfDebts
            data={debtsFilter}
            filterBy={filterBy}
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
