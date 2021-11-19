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
import { getYear } from 'date-fns';

const ListDebts = (props: any) => {
    const sheetRef = createRef<BottomSheet>();
    useEffect(() => { filterOnRedux("mes") }, [])

    // Redux
    const dispatch = useAppDispatch();
    const { debtsFilter } = useAppSelector(selectDebts);

    const filterOnRedux = (filter: 'mes' | 'devedor' | 'cartao' | 'compra', year?: number) => {

        dispatch(filterBy({ filter: filter, year: year ? year : getYear(new Date()) }))
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
