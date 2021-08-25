import React from 'react'
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native'

interface ICardSection {
    sectionTitle: any;
    debtItens: any;
    navigation: any;
}

import CardGasto from '@components/ListOfDebts/CardDebt'
import { ms } from 'react-native-size-matters';
import { colors, fonts } from '../../commounStyles';
import _ from 'lodash';

import { toCurrency } from '@utils/auxFunctions';

const { width: SCREEN_WIDTH, height } = Dimensions.get('window');


const CardSection = ({ sectionTitle, debtItens, navigation }: ICardSection) => {
    const sumOfItens = _.sumBy(debtItens, 'valorParcela');
    return (
        <View style={styles.sectionContainer}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>
                    {
                        sectionTitle.length > 22
                            ? ((sectionTitle.substring(0, 22 - 3)) + '...')
                            : sectionTitle
                    }
                </Text>
                <Text style={styles.totalValue}>{toCurrency(sumOfItens)}</Text>
            </View>
            <FlatList
                data={debtItens}
                renderItem={({ item }) => <CardGasto item={item} navigation={navigation} />}
                keyExtractor={(_, idx) => String(idx)}
            />
        </View>
    )
}

export default CardSection

const styles = StyleSheet.create({
    //Card Container
    sectionContainer: {
        width: SCREEN_WIDTH,
        paddingHorizontal: ms(30),
        marginBottom: ms(20),
    },
    sectionTitle: {
        fontSize: ms(20),
        color: colors.mutted,
        textTransform: 'capitalize'
        // marginBottom: ms(10)
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    totalValue: {
        fontFamily: fonts.regular,
        color: colors.mutted,
        fontSize: ms(14)
    }
})
