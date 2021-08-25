import React, { useState, createRef } from 'react';
import { Pressable, StyleSheet, Text, View, } from 'react-native'
import { ms } from 'react-native-size-matters'
import { colors, fonts } from '../../commounStyles'

//LB
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IButtonProps {
    onPress(): void,
    title: string
}

const ButtonDevedor = (props: IButtonProps) => {
    const { onPress, title } = props;
    return (
        <>
            <Pressable
                onPress={onPress}
                style={styles.container}>

                <Icon
                    size={ms(60)}
                    color={colors.seconday}
                    name='account-circle'
                />
                <Text style={styles.title}>
                    {title ? title : 'Devedor'}
                </Text>
            </Pressable>
        </>
    )
}



export default ButtonDevedor

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
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: fonts.bold,
        color: colors.mutted,
        fontSize: ms(22)
    },
    sheetContainer: {
        height: ms(340),
        borderTopRightRadius: ms(20),
        borderTopLeftRadius: ms(20),
        backgroundColor: colors.card,
        paddingVertical: 16,
        alignItems: 'center',
    },
})
