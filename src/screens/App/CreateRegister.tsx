import * as React from 'react';
import { Text, useWindowDimensions, View, Button, StyleSheet, Pressable } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { ms } from 'react-native-size-matters';
import { useTheme } from '@react-navigation/native';

//CP
import VirtualKeyboard from '@components/VirtualKeyboard';
import CurrencySheet from '@components/CurrencySheet';

// Features
import Debt from '../../feature/debts';


export default function App() {
    const [value, setValue] = React.useState(0); // can also be null
    const { height, width } = useWindowDimensions();
    const sheetRef = React.useRef(null);
    const { colors } = useTheme();

    const renderContent = () => (
        <View
            style={{
                backgroundColor: colors.background,
                padding: 16,
                height,
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}
        >
            <VirtualKeyboard returnValue={(value: number) => setValue(value)} />
            <Pressable
                onPress={() => sheetRef.current.snapTo(0)}
                style={[styles.button, { backgroundColor: colors.primary }]}>
                <Text style={[styles.buttonLabel, { color: colors.background }]}>Próximo</Text>
            </Pressable>
        </View>
    );



    return (
        <>
            <Debt />
        </>
    );
}


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
    }
})