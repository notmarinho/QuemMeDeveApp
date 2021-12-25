import React from 'react';
import { StyleSheet, View, ViewProps, FlexStyle } from 'react-native';
import { ms } from 'react-native-size-matters';

export type iContentDir = FlexStyle['flexDirection'];
export type iContentAlign = FlexStyle['alignItems'];
export type iContentJustify = FlexStyle['justifyContent'];

export type iContent = {
  dir?: iContentDir;
  align?: iContentAlign;
  justify?: iContentJustify;
} & ViewProps;

const Content: React.FC<iContent> = ({
  children,
  dir,
  align,
  justify,
  ...rest
}) => {
  return (
    <View
      {...rest}
      style={[
        styles.container,
        {
          flexDirection: dir ?? 'column',
          alignItems: align ?? 'flex-start',
          justifyContent: justify ?? 'flex-start',
        },
      ]}>
      {children}
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: ms(20),
    paddingVertical: ms(20),
  },
});
