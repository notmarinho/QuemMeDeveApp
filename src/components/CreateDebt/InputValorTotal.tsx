import React, { useState, useEffect, createRef, forwardRef, useImperativeHandle } from 'react'
import { Pressable, StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'

// LB
import CurrencyInput from 'react-native-currency-input';
import { ms } from 'react-native-size-matters';

// CP
import { colors, fonts } from '../../commounStyles';
import { IDetalheGasto } from '@interfaces'

// CONST
const { width: SCREEN_WIDTH } = Dimensions.get('window');

export interface IInputTotal {
    returnedValue(values: IDetalheGasto): void;
    clearState: () => void,
}

const InputValorTotal = forwardRef(({ returnedValue }: IInputTotal, ref) => {
    const [value, setValue] = useState<number | null>(0);
    const [parcela, setParcela] = useState<string | undefined>('1');
    const [descricao, setDescricao] = useState<string>('');

    const descricaoRef = createRef<TextInput>();
    const parcelaRef = createRef<TextInput>();

    useEffect(() => {
        handleData()
    }, [value, parcela, descricao])

    useImperativeHandle(ref, () => ({
        // each key is connected to `ref` as a method name
        // they can execute code directly, or call a local method
        clearState: () => clearState(),

    }))

    const handleData = () => {
        if (parcela && parcela != '0' && value != null) {
            let totalParcela = parseInt(parcela);
            let valorParcela = (value / totalParcela).toFixed(2);
            let valorTotal = value;
            let meusValores: IDetalheGasto = {
                totalParcela,
                valorParcela,
                valorTotal,
                descricao
            };
            returnedValue(meusValores);
        } else {
            console.log('Not permitted');
        }
    }

    const clearState = () => {
        setValue(0);
        setParcela('1');
        setDescricao('');
    }

    const focusOnParcela = () => parcelaRef.current?.focus();

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.leftContainer}>
                    <Text style={styles.title}>Valor Total</Text>
                    <View style={styles.inputContainer}>
                        <CurrencyInput
                            maxLength={15}
                            value={value}
                            onChangeValue={setValue}
                            prefix="R$ "
                            delimiter="."
                            separator=","
                            precision={2}
                            onSubmitEditing={() => descricaoRef.current?.focus()}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            onChangeText={(formattedValue) => {
                                // console.log(formattedValue); // $2,310.46
                                
                            }}
                            style={styles.input}
                        />
                    </View>
                </View>
                <Pressable
                    onPress={focusOnParcela}
                    style={styles.rightContainer}>
                    <Text style={styles.title}>
                        Parcelas
                    </Text>
                    <TextInput
                        ref={parcelaRef}
                        value={parcela}
                        keyboardType={'numeric'}
                        onChangeText={setParcela}
                        maxLength={2}
                        style={{ ...styles.input, textAlign: 'right' }}
                    />
                </Pressable>
            </View>
            <View style={styles.dividerView} />
            <View style={styles.bottomContainer}>
                <Text style={styles.titleDescricao}>Descrição</Text>
                <TextInput
                    ref={descricaoRef}
                    textAlignVertical='top'
                    style={styles.inputDescricao}
                    value={descricao}
                    onChangeText={setDescricao}
                    placeholder={'Descrição'}
                    multiline
                    returnKeyType='done'
                    blurOnSubmit={true}
                />
            </View>
        </View>
    )
})

export default InputValorTotal

export type TypeInput = ReturnType<typeof InputValorTotal>;

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH * 0.9,
        height: ms(250),
        borderRadius: ms(10),
        backgroundColor: colors.background,
        padding: ms(20),
        marginBottom: ms(20)
    },
    topContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    dividerView: {
        flex: 0.2,
    },
    bottomContainer: {
        flex: 1,
    },
    title: {
        fontFamily: fonts.bold,
        flex: 1,
        fontSize: ms(16),
        color: colors.text,
    },
    leftContainer: {
        flex: 3,
        borderRadius: ms(10),
    },
    inputContainer: {
        borderWidth: StyleSheet.hairlineWidth,
        flex: 2,
        borderRadius: ms(10),
        maxHeight: ms(60),
        minHeight: ms(40),
    },
    input: {
        flex: 1,
        fontSize: ms(25),
        paddingLeft: ms(10),
    },
    titleDescricao: {
        fontFamily: fonts.bold,
        fontSize: ms(16),
        color: colors.text,
    },
    inputDescricao: {
        fontWeight: 'bold',
        color: colors.primary,
        height: '100%',
        fontSize: ms(22),
        paddingTop: 0,
        paddingBottom: 0,
        margin: 0,

    },
    rightContainer: {
        flex: 1,
    },
    parcelaContainer: {
        flex: 1,
    }
})
