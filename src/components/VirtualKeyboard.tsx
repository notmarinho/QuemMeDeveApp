import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import { ms } from 'react-native-size-matters';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CurrencyInput, { FakeCurrencyInput } from 'react-native-currency-input';
import { useTheme } from '@react-navigation/native';


//Interfaces
interface INumber {
    number: number | string;
    returnNumber(number: number | string): void
}

interface IFooter {
    returnNumber(number: number): void,
    handleDelete(): void
}

interface IVirtualKeyboard {
    returnValue(number: number): void;
}


const NumericButton = ({ number, returnNumber }: INumber) => {
    return (
        <Ripple
            onPress={() => returnNumber(number)}
            style={styles.numericButton}>
            <Text style={styles.number}>{number}</Text>
        </Ripple>
    )
}


const VirtualKeyboard = ({ returnValue }: IVirtualKeyboard) => {
    const [value, setValue] = useState(0);

    const { colors } = useTheme();

    const handleAddNumber = (number: number) => {
        let newValue: number = parseInt(value + '' + number);
        setValue(newValue);
        returnValue(newValue);
    }

    const handleDelete = () => {
        if (value == 0) {
            console.log('Do nothing');
        } else {
            let newValue = Math.floor(value / 10);
            setValue(newValue);
            returnValue(newValue);
        }
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.card }]}>
            <View style={styles.valueContainer}>
                <Text style={styles.number}>
                    R$
                </Text>
                <FakeCurrencyInput
                    style={styles.number}
                    value={value}
                    onChangeValue={handleAddNumber}
                />
            </View>
            <View style={styles.flatlistContainer}>
                <FlatList
                    contentContainerStyle={styles.flatlist}
                    numColumns={3}
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    keyExtractor={(item) => String(item)}
                    ListFooterComponent={<FooterComponent returnNumber={handleAddNumber} handleDelete={handleDelete} />}
                    renderItem={({ item }) => <NumericButton number={item} returnNumber={handleAddNumber} />}
                />
            </View>

        </View>
    )
}

const FooterComponent = ({ returnNumber, handleDelete }: IFooter) => {
    return (
        <View style={styles.footer}>
            <NumericButton number={'.'} returnNumber={returnNumber} />
            <NumericButton number={0} returnNumber={returnNumber} />
            <Ripple
                onPress={handleDelete}
                style={styles.numericButton}>
                <Icon name='backspace' size={ms(25)} />
            </Ripple>
        </View>
    )
}



export default VirtualKeyboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'space-between'
    },
    numericButton: {
        width: ms(100),
        height: ms(100),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: ms(50),
    },
    valueContainer: {
        flex: 1,
        paddingHorizontal: ms(30),
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    number: {
        fontSize: ms(25)
    },
    flatlistContainer: {
        flex: 3,
    },
    flatlist: {

    },
    footer: {
        flexDirection: 'row'
    }
})
