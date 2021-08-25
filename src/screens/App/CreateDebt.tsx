import React, { createRef, useState, useRef } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native'

import { colors, fonts } from '../../commounStyles'

//CP
import InputValorTotal, { IInputTotal } from '@components/CreateDebt/InputValorTotal';
import InputDescricao from '@components/CreateDebt/InputDescricao';
import ButtonDevedor from '@components/CreateDebt/ButtonDevedor';
import ButtonCartao from '@components/CreateDebt/ButtonCartao';
import ButtonMes from '@components/CreateDebt/ButtonMes';
import BSDevedor from '@components/CreateDebt/BSDevedor';
import BSCartao from '@components/CreateDebt/BSCartao';
import { allMonths } from '@utils/auxFunctions'

//LB
import BottomSheet from 'reanimated-bottom-sheet';
import Toast from 'react-native-toast-message';
import { ms } from 'react-native-size-matters';
import { getTime } from 'date-fns';
import _ from 'lodash';


//Redux
import { useAppDispatch, useAppSelector } from '@hooks';
import { selectDebts, setDebtFilter, addDebt } from '../../feature/debts/debetSlice'

import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { ICartao, IGasto, IDetalheGasto } from '@interfaces';

const defaultDetalhes: IDetalheGasto = {
    descricao: '',
    totalParcela: 1,
    valorParcela: '',
    valorTotal: 0
}

const defaultCartao: ICartao = {
    cor: '',
    nome: ''
}

const CreateDebt = (props: any) => {
    //Redux
    const dispatch = useAppDispatch();
    const { debtsList, debtsFilter } = useAppSelector(selectDebts);
    const { getItem, setItem } = useAsyncStorage('myData');

    //State
    const [devedor, setDevedor] = useState('');
    const [loading, setLoading] = useState(false);
    const [cartao, setCartao] = useState<ICartao>(defaultCartao);
    const [detalhes, setDetalhes] = useState<IDetalheGasto>(defaultDetalhes);

    //Refs
    const InputComponentRef = useRef<IInputTotal>();
    const BSDevedorRef = createRef<BottomSheet>();
    const BSCartaoRef = createRef<BottomSheet>();
    const BSMesRef = createRef<BottomSheet>();

    //Functions
    const toggleBS = (wichBS: 'mes' | 'devedor' | 'cartao', action: 'open' | 'close') => {
        Keyboard.dismiss();
        switch (wichBS) {
            case 'devedor':
                BSCartaoRef.current?.snapTo(0);
                BSMesRef.current?.snapTo(0);
                action === 'open' ? BSDevedorRef.current?.snapTo(1) : BSDevedorRef.current?.snapTo(0);
                break;
            case 'mes':
                BSCartaoRef.current?.snapTo(0);
                BSDevedorRef.current?.snapTo(0);
                action === 'open' ? BSMesRef.current?.snapTo(1) : BSMesRef.current?.snapTo(0);
                break;
            case 'cartao':
                BSDevedorRef.current?.snapTo(0);
                BSMesRef.current?.snapTo(0);
                action === 'open' ? BSCartaoRef.current?.snapTo(1) : BSCartaoRef.current?.snapTo(0);
                break;
            default:
                break;
        }
    }

    const closeAllBS = () => {
        BSDevedorRef.current?.snapTo(0);
        BSCartaoRef.current?.snapTo(0);
        BSMesRef.current?.snapTo(0);
    }

    const handleDevedor = (devedor: string) => {
        setDevedor(devedor);
        toggleBS('devedor', 'close');
    }

    const handleCartao = (cartao: ICartao) => {
        toggleBS('cartao', 'close');
        setCartao(cartao);
    }

    const handleCriarGasto = () => {
        if (taTudoOk()) {
            criarGasto();
        } else {
            console.log('Falta completar algumas coisas');
        }
    }

    const criarGasto = async () => {
        setLoading(true);
        let novosGastos: IGasto[] = [];
        let gastoCriado: IGasto = {
            compra: detalhes?.descricao,
            valorParcela: parseFloat(detalhes?.valorParcela),
            totalParcelas: detalhes?.totalParcela,
            valorTotal: detalhes?.valorTotal,
            cartao: cartao?.nome,
            ano: 2021,
            devedor: devedor,
            createdAt: getTime(new Date()),
            mes: 'SETEMBRO',
            parcela: 1,
            userId: 1,
        };

        novosGastos.push(gastoCriado);
        if (detalhes?.totalParcela > 1) {
            let numMes = allMonths.indexOf(gastoCriado.mes);
            for (let numParcela = 2; numParcela != detalhes?.totalParcela + 1; numParcela++) {
                // Ajustar o Mes
                numMes += 1;
                if (numMes > 11) {
                    console.log('Entrou com no if');
                    numMes -= 12;
                }

                let novaParcela: IGasto = {
                    ...gastoCriado,
                    parcela: numParcela,
                    mes: allMonths[numMes]
                };
                novosGastos.push(novaParcela);
            }
        }
        //Inserting on Storage
        await getItem()
            .then(async (res) => {
                let { debtsList, debtsFilter } = res != null ? JSON.parse(res) : null;
                let myData = {
                    debtsList: [...debtsList, ...novosGastos],
                    debtsFilter
                }
                await setItem(JSON.stringify(myData))
                    .then(() => {
                        //Adding to redux
                        dispatch(addDebt(novosGastos));

                        Toast.show({
                            type: 'success',
                            text1: 'Gasto Adicionado',
                            text2: 'Seu gasto acabou de ser registrado com sucesso!'
                        })
                        clearState();
                        // props.navigation.goBack();
                    })
                    .catch(e => { throw new Error(e) })






            })
            .catch(e => console.error(e))
            .finally(() => setLoading(false));

    }

    const clearState = () => {
        InputComponentRef.current?.clearState();
        setDevedor('');
        setCartao(defaultCartao);
        setDetalhes(defaultDetalhes);
    }

    const taTudoOk = () => {
        return true;
    }

    return (
        <>
            <StatusBar backgroundColor={colors.card} barStyle='dark-content' />
            <View style={styles.container}>
                <View>
                    <InputValorTotal    
                        ref={InputComponentRef}
                        returnedValue={setDetalhes} />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonLeftContainer}>
                            <ButtonDevedor
                                onPress={() => toggleBS('devedor', 'open')}
                                title={devedor}
                            />
                        </View>
                        <View style={styles.buttonRightContainer}>
                            <ButtonMes />
                            <View style={styles.separatorView} />
                            <ButtonCartao
                                onPress={() => toggleBS('cartao', 'open')}
                                title={cartao?.nome}
                                iconColor={cartao?.cor}
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={handleCriarGasto}
                    style={styles.buttonRegistrar}>
                    {loading
                        ? <ActivityIndicator animating color='#fff' />
                        : <Text style={styles.buttonRegistrarLabel}>Registrar</Text>
                    }
                </TouchableOpacity>
            </View>
            <BSDevedor
                selectedItem={handleDevedor}
                ref={BSDevedorRef} />
            <BSCartao
                selectedItem={handleCartao}
                ref={BSCartaoRef}
            />
        </>
    )
}

export default CreateDebt

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.card,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: ms(20)
    },
    buttonRegistrar: {
        width: '90%',
        height: ms(55),
        borderRadius: ms(8),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    buttonRegistrarLabel: {
        fontFamily: fonts.bold,
        // fontFamily: 'MontserratAlternates-Bold',
        color: colors.background,
        fontSize: ms(16),
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '90%',
        height: ms(200),
    },
    buttonLeftContainer: {
        flex: 1,
        paddingHorizontal: ms(10)
    },
    buttonRightContainer: {
        flex: 1,
        paddingHorizontal: ms(10)
    },
    separatorView: {
        flex: 0.2
    }
})