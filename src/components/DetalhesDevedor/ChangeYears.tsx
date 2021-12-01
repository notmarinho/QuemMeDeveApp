import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//LB
import { getYear } from 'date-fns';
import { ms } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//CP
import { colors, fonts } from '../../commonStyles';

const hintButton = { bottom: 50, left: 50, right: 50, top: 50 }

interface IChangeYear {
    currentYear(year: number): void,
    arrowColor?: string;
}

const ChangeYears = ({ currentYear, arrowColor }: IChangeYear) => {
    const [year, setYear] = useState(getYear(new Date()));

    const addYear = () => setYear(previousCount => previousCount + 1);

    const lessYear = () => setYear(previousCount => previousCount - 1);

    useEffect(() => { currentYear(year) }, [year]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={lessYear}
                hitSlop={hintButton}
                style={styles.button}>
                <Icon name='chevron-left' size={ms(30)} color={arrowColor ? arrowColor : colors.primary} />
            </TouchableOpacity>
            <Text style={styles.title}>
                {year}
            </Text>
            <TouchableOpacity
                onPress={addYear}
                hitSlop={hintButton}
                style={styles.button}>
                <Icon name='chevron-right' size={ms(30)} color={arrowColor ? arrowColor : colors.primary} />
            </TouchableOpacity>
        </View>
    )
}

export default ChangeYears

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: ms(80),
        paddingHorizontal: ms(10),
    },
    title: {
        fontSize: ms(30),
        fontFamily: fonts.bold,
        color: colors.background
    },
    button: {
        marginHorizontal: ms(20)
    }
})
