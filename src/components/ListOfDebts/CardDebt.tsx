import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

//Interface
import { IGasto } from '@interfaces/IMainInterfaces';

//CP
import { colors, fonts } from '../../commounStyles';
import { toCurrency } from '@utils/auxFunctions';

//LB
import { ms } from 'react-native-size-matters';



const CardDebt = ({ item }: { item: IGasto }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.infoContainer}>
                <Text
                    numberOfLines={1}
                    style={styles.txtDescription}>
                    {item.compra}
                </Text>
                <View style={styles.cardAndMonthContainer}>
                    <Text style={styles.txtCardName}>
                        {item.cartao}
                    </Text>

                </View>
            </View>
            <View style={styles.valueContainer}>
                <Text
                    style={styles.txtValue}>
                    {toCurrency(item.valorParcela)}
                </Text>
                <Text style={styles.txtCardName}>
                    {`${item.totalParcelas > 1 ? item.parcela + '/' + item.totalParcelas : ''}`}
                </Text>
            </View>
        </View>
    )
}

export default CardDebt

const styles = StyleSheet.create({
    //Card
    cardContainer: {
        width: '100%',
        height: ms(66),
        backgroundColor: colors.card,
        borderRadius: ms(30),
        paddingHorizontal: ms(25),
        flexDirection: "row",
        marginTop: ms(10)
    },
    txtDescription: {
        fontFamily: fonts.bold,
        color: colors.text,
        fontSize: ms(14)
    },
    txtCardName: {
        color: colors.mutted,
        fontSize: ms(14),
    },
    txtValue: {
        fontFamily: fonts.bold,
        color: colors.primary,
        fontSize: ms(16)
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    valueContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    cardAndMonthContainer: {
        flexDirection: 'row'
    }
})
