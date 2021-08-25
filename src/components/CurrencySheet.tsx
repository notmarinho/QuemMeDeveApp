import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Pressable, useWindowDimensions } from 'react-native'

//LB
import BottomSheet from 'reanimated-bottom-sheet';
import { useTheme } from '@react-navigation/native';
import { ms } from 'react-native-size-matters';

//CP
import VirtualKeyboard from './VirtualKeyboard';


const CurrencySheet = ({ sendValue }: { sendValue(value: number): void }) => {
    //State
    const [value, setValue] = useState(0);

    //Hooks
    const { colors } = useTheme();
    const { height, width } = useWindowDimensions();
    const sheetRef = useRef(null);

    const renderContent = () => (
        <View
            style={{ ...styles.contentSheet, backgroundColor: colors.card, height }}
        >
            <Pressable
                hitSlop={50}
                onPress={() => sheetRef.current.snapTo(1)}>
                <View style={{ width: 100, height: 8, borderRadius: 100, backgroundColor: colors.primary }} />
            </Pressable>
            <VirtualKeyboard returnValue={(value: number) => {
                setValue(value)
                sendValue(value)
            }} />
            <Pressable
                onPress={() => sheetRef.current.snapTo(0)}
                style={[styles.button, { backgroundColor: colors.primary }]}>
                <Text style={[styles.buttonLabel, { color: colors.background }]}>Próximo</Text>
            </Pressable>
        </View>
    );

    return (
        <BottomSheet
            ref={sheetRef}
            snapPoints={[50, height]}
            borderRadius={10}
            initialSnap={1}
            renderContent={renderContent}
        />
    )
}

export default CurrencySheet

const styles = StyleSheet.create({
    button: {
        width: ms(250),
        height: 66,
        borderRadius: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonLabel: {
        fontSize: ms(18)
    },
    contentSheet: {
        backgroundColor: 'red',
        padding: 16,
        height: 500,
        borderRadius: ms(20),
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
})
