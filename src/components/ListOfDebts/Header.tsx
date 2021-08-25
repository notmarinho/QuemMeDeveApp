import React from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { colors, fonts } from '../../commounStyles';

//LB
import { ms } from 'react-native-size-matters'

//Redux
import { useAppDispatch, useAppSelector } from '@hooks';
import { selectDebts, editDebt } from '../../feature/debts/debetSlice';

const Header = ({ onFilterPress, currentFilter }: { onFilterPress(field: string): void, currentFilter: string }) => {
    

    return (
        <>
            <StatusBar backgroundColor={colors.primary} />
            <View style={styles.topContainer}>
                <View style={styles.bottomContainer}>
                    <Text style={styles.title}>
                        Transações
                    </Text>
                    <TouchableOpacity
                        onPress={() => onFilterPress('devedor')}
                        style={styles.buttonSort}>
                        <Text style={styles.txtSortBy}>
                            Ordernar por <Text style={styles.txtSelectSort}>{currentFilter}</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </>
    )
}

export default Header

const styles = StyleSheet.create({
    //Header
    topContainer: {
        height: ms(150),
        width: '100%',
        backgroundColor: colors.primary,
        justifyContent: 'flex-end',
    },
    bottomContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        height: ms(70),
        borderTopLeftRadius: ms(40),
        borderTopRightRadius: ms(40),
        width: '100%',
        backgroundColor: colors.background,
    },
    title: {
        fontFamily: fonts.bold,
        color: colors.text,
        fontSize: ms(22),
        paddingHorizontal: ms(30),
        paddingTop: ms(20)
    },
    txtSortBy: {
        fontSize: ms(16),
        color: colors.mutted
    },
    txtSelectSort: {
        fontFamily: fonts.bold,
        color: colors.text,
        textTransform: 'capitalize'

    },
    buttonSort: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: ms(30),
    },

})
