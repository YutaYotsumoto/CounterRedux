import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

import Counter from '../commponent/counter/counter';
import PlusButton from '../commponent/Bottons/PlusBotton';
import MinusButton from '../commponent/Bottons/MinusBotton';
import ResetButton from '../commponent/Bottons/resetBotton';

export function Screen() {
  return (
    <SafeAreaView style={styles.Screen}>
      <Counter />

      <View style={styles.Button}>
        <MinusButton />
        <ResetButton />
        <PlusButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
