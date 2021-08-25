import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { ms } from 'react-native-size-matters';

import { colors, fonts } from '../../commounStyles'

const InputDescricao = () => {
    const [descricao, setDescricao] = useState<string>('');

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                value={descricao}
                onChangeText={setDescricao}
                placeholder={'Descrição'}
                multiline
                returnKeyType='done'
                blurOnSubmit={true}
            />
        </View>
    )
}

export default InputDescricao

const styles = StyleSheet.create({
    container: {
        width: '90%',
        maxHeight: ms(150),
        minHeight: ms(150),
        marginBottom: ms(20),
    },
    input: {
        fontFamily: fonts.bold,
        fontWeight: 'bold',
        color: colors.primary,
        fontSize: ms(25),
        margin: 0,
        paddingHorizontal: ms(10),
    }
})
