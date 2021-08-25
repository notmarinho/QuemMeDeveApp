import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Pressable, Dimensions } from 'react-native'
import { ms } from 'react-native-size-matters';
import { useTheme } from '@react-navigation/native';

const { width: screenWidth } = Dimensions.get('window');

const months = [
    { label: 'JANEIRO', value: "1" },
    { label: 'FEVEREIRO', value: "2" },
    { label: 'MARÇO', value: "3" },
    { label: 'ABRIL', value: "4" },
    { label: 'MAIO', value: "5" },
    { label: 'JUNHO', value: "6" },
    { label: 'JULHO', value: "7" },
    { label: 'AGOSTO', value: "8" },
    { label: 'SETEMBRO', value: "9" },
    { label: 'OUTUBRO', value: "10" },
    { label: 'NOVEMBRO', value: "11" },
    { label: 'DEZEMBRO', value: "12" },
]

interface IMonth {
    label: string;
    value: string;
}

interface ICardMonthTDO {
    item: IMonth,
    selected: IMonth;
    backgroundColor?: string;
    textColor?: string;
    onPress(item: IMonth): IMonth;
}

interface IMonthTDA {
    returnMonth: (item: IMonth) => void;
    selectedMonth?: IMonth;
}

const CardMonth = ({ selected, backgroundColor, item, textColor, onPress }: ICardMonthTDO) => {
    const { colors } = useTheme();
    return (
        <Pressable
            onPress={() => onPress(item)}
            style={{ ...styles.cardMonth, backgroundColor: selected == item ? colors.primary : colors.card }}>
            <Text style={{ ...styles.cardMonthText, color: selected == item ? colors.border : colors.text }}>
                {item.label}
            </Text>
        </Pressable>
    )
}

const Months: React.FC<IMonthTDA> = ({ returnMonth, selectedMonth }) => {
    const { colors } = useTheme();
    return (
        <FlatList
            numColumns={4}
            data={months}
            keyExtractor={(_, idx) => String(idx)}
            renderItem={({ item, index }) =>
                <CardMonth
                    key={index}
                    item={item}
                    onPress={returnMonth}
                    backgroundColor={colors.card}
                    selected={selectedMonth} />}
        />
    )
}

export default Months

const styles = StyleSheet.create({
    cardMonth: {
        flexGrow: 1,
        width: screenWidth / 8,
        height: screenWidth / 8,
        borderRadius: ms(5),
        alignItems: 'center',
        justifyContent: 'center',
        margin: ms(2.5),
        backgroundColor: "red"
    },
    cardMonthText: {
        fontSize: ms(10)
    }
})
