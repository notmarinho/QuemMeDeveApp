import React from 'react'
import { Pressable, StyleSheet, Text, View, } from 'react-native'
import { ms } from 'react-native-size-matters'
import { colors } from '../../commounStyles'

const ButtonMes = () => {
    return (
        <Pressable
            onPress={() => console.log('Mes Pressed')}
            style={styles.container}>
            <Text>

            </Text>
        </Pressable>
    )
}

export default ButtonMes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: ms(10)
    }
})
