import React, { createRef, forwardRef } from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View, FlatList, Dimensions } from 'react-native'
import { color } from 'react-native-reanimated';
import { ms } from 'react-native-size-matters';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from 'reanimated-bottom-sheet';
import { string } from 'yargs';
import { colors, fonts } from '../../commounStyles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// interface IBSDevedor {
//     ref: BottomSheet;
//     selectedItem(item: any): void;
//     navigateToCreateDevedor?(): void;
// }

// interface IContent {
//     refSheet: any;
//     selectedItem(devedor: string): void;
//     navigateToCreateDevedor?(): void;
// }

interface IDevedor {
    item: string;
    selectedItem(item: any): void;
}

interface IEmptyContent {
    onPress?(): void;
}

const BSDevedor = forwardRef((props: any, ref) => {
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
                <Text style={styles.title}>Pessoas</Text>
                <TouchableOpacity
                    // onPress={props.navigateToCreateDevedor} 
                    style={styles.addNew}>
                    <Icon name='account-multiple-plus' size={ms(30)} color={colors.background} />
                </TouchableOpacity>
            </View>
            <FlatList
                ListEmptyComponent={<EmptyListContent
                // onPress={props.navigateToCreateDevedor} 
                />}
                contentContainerStyle={{ flexGrow: 1, }}
                data={['Mateus', 'Marcos', 'Marley', 'Albenize', 'Thiago']}
                renderItem={({ item }) => <CardDevedor item={item} selectedItem={props.selectedItem} />}
                keyExtractor={(_, idx) => String(idx)}
            />
        </View>
    )
}


const CardDevedor = (props: IDevedor) => {
    const { item, selectedItem } = props;
    return (
        <Pressable
            onPress={() => selectedItem(item)}
            style={styles.cardDevedorContainer}>
            <Text style={styles.cardTitle}>{item ? item : 'Erro ao encontrar nome'}</Text>

        </Pressable>
    )
}


const EmptyListContent = (props: IEmptyContent) => {
    const { onPress } = props;
    return (
        <Pressable
            onPress={onPress}
            style={styles.emptyContainer}>
            <Icon name='account-multiple-plus' size={ms(50)} color={colors.background} />
            <Text style={styles.emptyMessage}>Adicione alguém que te deve, pode ser até você mesmo!</Text>
        </Pressable>
    )
}

export default BSDevedor;


const styles = StyleSheet.create({
    sheetContainer: {
        height: ms(340),
        borderTopRightRadius: ms(20),
        borderTopLeftRadius: ms(20),
        backgroundColor: colors.seconday,
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
        width: SCREEN_WIDTH * 0.9,
        height: ms(55),
        borderRadius: ms(10),
        marginBottom: ms(10),
        padding: ms(15),
        backgroundColor: colors.card,
        justifyContent: 'center',
    },
    cardTitle: {
        fontFamily: fonts.bold,
        fontSize: ms(16),
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
