import React, { createRef, forwardRef } from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View, FlatList, Dimensions } from 'react-native'

//LB
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from 'reanimated-bottom-sheet';
import { ms } from 'react-native-size-matters';

//CP
import { allMonths } from '../../utils/auxFunctions';
import { colors, fonts } from '../../commounStyles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const cartoes = [
    { nome: 'Nubank', cor: 'purple' },
    { nome: 'Satander', cor: 'red' },
    { nome: 'Next', cor: '#00e63d' },
    { nome: 'Azul', cor: '#001e4f' },
]

interface ICartao {
    nome: string;
    cor: string;
}

interface IEmptyContent {
    onPress?(): void;
}

const BSMesAno = forwardRef((props: any, ref) => {
    return (
        <BottomSheet
            ref={ref}
            initialSnap={0}
            snapPoints={[0, ms(340)]}
            borderRadius={10}
            renderContent={() =>
                <RenderContent
                    // navigateToCreateDevedor={props.navigateToCreateDevedor}
                    refSheet={ref}
                    selectedItem={props.selectedItem} />}
            {...props}
        />
    )
})

const RenderContent = (props: any) => {
    return (
        <View style={styles.sheetContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => props.refSheet.current?.snapTo(0)}>
                    <Icon name='close' size={ms(30)} color={colors.background} />
                </TouchableOpacity>
                <Text style={styles.title}>Mês</Text>
                <View />
            </View>
            <FlatList
                numColumns={4}
                contentContainerStyle={{ flexGrow: 1 }}
                data={allMonths}
                renderItem={({ item }) => <CardDevedor item={item} selectedItem={props.selectedItem} />}
                keyExtractor={(_, idx) => String(idx)}
            />
        </View>
    )
}


const CardDevedor = (props: { item: string, selectedItem(item: string): void }) => {
    const { item, selectedItem } = props;
    return (
        <Pressable
            onPress={() => selectedItem(item)}
            style={styles.cardDevedorContainer}>
            <Text style={styles.cardTitle}>{item}</Text>
            {/* <Icon name='credit-card' size={ms(25)} color={item.cor} /> */}
        </Pressable>
    )
}

export default BSMesAno;


const styles = StyleSheet.create({
    sheetContainer: {
        height: ms(340),
        borderTopRightRadius: ms(20),
        borderTopLeftRadius: ms(20),
        backgroundColor: colors.mutted,
        paddingVertical: 16,
        alignItems: 'center'
    },
    header: {
        width: '90%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: ms(20)
    },
    addNew: {
        flexDirection: 'row',
        alignItems: "center",
    },
    title: {
        fontFamily: fonts.bold,
        color: colors.background,
        fontSize: ms(18)

    },
    cardDevedorContainer: {
        width: SCREEN_WIDTH * 0.22,
        height: ms(55),
        borderRadius: ms(5),
        margin: ms(5),
        // padding: ms(15),
        backgroundColor: colors.card,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    cardTitle: {
        fontFamily: fonts.bold,
        fontSize: ms(10),
        color: '#303030',
    },
    emptyContainer: {
        height: ms(200),
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyMessage: {
        fontFamily: fonts.bold,
        fontSize: ms(20),
        color: colors.background,
        textAlign: 'center',
        paddingHorizontal: ms(30),

    }
})
