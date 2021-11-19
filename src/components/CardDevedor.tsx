import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

//LB
import { useTheme } from '@react-navigation/native';
import { ms } from 'react-native-size-matters';

interface IDevedor {
  id?: number;
  nome?: string;
  avatar?: string;
}

interface IDevedorTDA {
  devedor: IDevedor;
  onPress: () => void;
}

const CardDevedor = ({ devedor, onPress }: IDevedorTDA) => {
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={{ ...styles.container, backgroundColor: colors.card }}>
      <View style={styles.userAvatar}>
        <Image
          source={{
            uri: devedor.avatar
              ? devedor.avatar
              : 'https://cdn.icon-icons.com/icons2/1161/PNG/512/1487716857-user_81635.png',
          }}
          style={{ flex: 1 }}
        />
      </View>
      <Text style={{ ...styles.userName, color: colors.text }}>
        {devedor.nome}
      </Text>
    </Pressable>
  );
};

export default CardDevedor;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: ms(55),
    borderRadius: ms(10),
    flexDirection: 'row',
    paddingHorizontal: ms(10),
    alignItems: 'center',
  },
  userAvatar: {
    height: ms(45),
    width: ms(45),
    borderRadius: ms(25),
  },
  userName: {
    fontSize: ms(18),
    marginLeft: ms(5),
  },
});
