import React, { forwardRef, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BottomSheet from 'reanimated-bottom-sheet';
import { ms } from 'react-native-size-matters';
import Animated, { interpolateNode } from 'react-native-reanimated';
import { colors, fonts, FontSize } from '@theme';

const BSMesAno = forwardRef((props: any, ref) => {
  let fall = new Animated.Value(1);

  const renderContent = () => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.column}>
          <Text style={styles.title}>Mês</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.title}>Ano</Text>
        </View>
      </View>
    );
  };

  const renderShadow = () => {
    const animatedShadowOpacity = interpolateNode(fall, {
      inputRange: [0, 1],
      outputRange: [0.5, 0],
    });
    return (
      <Animated.View
        pointerEvents="none"
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: '#000',
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    );
  };

  const snapPoints = useMemo(() => [0, ms(200)], []);

  return (
    <>
      <BottomSheet
        ref={ref}
        callbackNode={fall}
        initialSnap={0}
        snapPoints={snapPoints}
        borderRadius={10}
        renderContent={renderContent}
        {...props}
      />
      {renderShadow()}
    </>
  );
});

export default BSMesAno;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 16,
    height: ms(260),
  },
  column: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.bold,
    color: colors.primary,
    fontSize: FontSize.MEDIUM,
  },
});
