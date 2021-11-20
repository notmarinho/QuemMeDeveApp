import React, { useState, createRef, forwardRef } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from 'react-native';

//LB
import BottomSheet from 'reanimated-bottom-sheet';
import { ms } from 'react-native-size-matters';

//CP
import CardSection from './CardSection';
import Header from './Header';
import { colors, fonts } from '../../commounStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Redux
import { useAppSelector } from '@hooks';
import { selectDebts } from '../../feature/debts/debetSlice';

const ListOfDebts = forwardRef((props: any, ref) => {
  const { data, filterBy } = props;
  const { filteringBy } = useAppSelector(selectDebts);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelectedFilter = (field: string) => {
    // setLoading(true);
    filterBy(field);
    ref.current?.snapTo(0); // Hiding Bottom Sheet
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const showBottomSheet = () => ref.current?.snapTo(1);

  return (
    <>
      <FlatList
        ListEmptyComponent={<EmptyComponent />}
        ListHeaderComponent={
          <Header
            yearFilter={year => filterBy(filteringBy, year)}
            currentFilter={filteringBy}
            onFilterPress={showBottomSheet}
          />
        }
        data={data}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: colors.background,
        }}
        keyExtractor={(_, idx) => String(idx)}
        renderItem={({ item }) => (
          <CardSection
            navigation={props.navigation}
            sectionTitle={item[0]}
            debtItens={item[1]}
          />
        )}
      />
      <BottomSheet
        ref={ref}
        initialSnap={0}
        snapPoints={[0, ms(340)]}
        borderRadius={10}
        renderContent={() => (
          <RenderContent onFilterPress={handleSelectedFilter} />
        )}
      />
    </>
  );
});

const EmptyComponent = () => {
  return (
    <View style={styles.emptyContainer}>
      <Icon name="party-popper" size={ms(50)} color={colors.muted} />
      <Text style={styles.emptyTitle}>Nenhum Gasto Nesse Ano</Text>
    </View>
  );
};

//Bottom Sheet
const RenderContent = ({
  onFilterPress,
}: {
  onFilterPress(item: string): void;
}) => (
  <View style={styles.sheetContainer}>
    <View style={styles.topDot} />
    <Text style={styles.titleSheet}>Filtrar Por</Text>
    {/* <View style={styles.dividerLine} /> */}
    <FlatList
      keyExtractor={(_, idx) => String(idx)}
      data={['devedor', 'mes', 'compra', 'cartao']}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => onFilterPress(item)}
            style={styles.cardFilter}>
            <Text style={styles.cardLabel}>{item}</Text>
            <Icon
              name="comment-account-outline"
              color={colors.primary}
              size={ms(25)}
            />
          </TouchableOpacity>
        );
      }}
    />
  </View>
);

export default ListOfDebts;

const styles = StyleSheet.create({
  sheetContainer: {
    height: ms(340),
    borderTopRightRadius: ms(20),
    borderTopLeftRadius: ms(20),
    backgroundColor: colors.card,
    paddingVertical: 16,
    alignItems: 'center',
  },
  topDot: {
    width: ms(66),
    height: ms(6),
    borderRadius: ms(10),
    backgroundColor: colors.primary,
  },
  titleSheet: {
    fontFamily: fonts.bold,
    fontSize: ms(18),
    color: colors.text,
    marginTop: ms(10),
    marginBottom: ms(5),
  },
  dividerLine: {
    width: '100%',
    height: ms(3),
    backgroundColor: colors.muted,
    opacity: 0.3,
  },
  cardFilter: {
    width: '100%',
    height: ms(66),
    paddingHorizontal: ms(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.muted,
  },
  cardLabel: {
    fontFamily: fonts.bold,
    textTransform: 'capitalize',
    fontSize: ms(16),
    color: colors.primary,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontFamily: fonts.bold,
    color: colors.muted,
    fontSize: ms(16),
    marginTop: ms(20),
  },
});
