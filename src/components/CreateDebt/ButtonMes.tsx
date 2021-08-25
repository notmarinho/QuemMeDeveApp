import React from 'react'
import { Pressable, StyleSheet, Text, View, } from 'react-native'
import { ms } from 'react-native-size-matters'
import { colors } from '../../commounStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


interface IButtonProps {
    onPress(): void,
    mes: string | undefined,
    ano: number | undefined;
}

const ButtonMes = (props: IButtonProps) => {
    return (
        <Pressable
            onPress={() => props.onPress()}
            style={styles.container}>
            <Icon name='calendar' size={ms(20)} color={colors.primaryDark} />
            <Text>
                {props.mes}
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
        borderRadius: ms(10),
        padding: ms(10)
    }
})
