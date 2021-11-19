import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//LB
import { useTheme } from '@react-navigation/native';
import { ms } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  title?: string;
  icon: string;
}

const SectionGasto: React.FC<Props> = ({ title, icon, children }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{ ...styles.iconContainer, backgroundColor: colors.primary }}>
          <Icon name={icon} color={colors.card} size={ms(25)} />
        </View>
        <Text style={{ ...styles.title, color: colors.text }}>{title}</Text>
      </View>
      <View style={{ paddingHorizontal: ms(5) }}>{children}</View>
    </View>
  );
};

export default SectionGasto;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: ms(100),
    marginBottom: ms(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: ms(15),
  },
  iconContainer: {
    width: ms(50),
    height: ms(50),
    borderRadius: ms(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: ms(20),
    marginLeft: ms(8),
  },
});
