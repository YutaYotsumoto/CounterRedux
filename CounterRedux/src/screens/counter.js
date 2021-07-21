import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, reset} from '../stores/Slices/counterSlice';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';

export function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.Screen}>
      <View style={styles.ViewStyle}>
        <Text style={styles.font}>{count}</Text>
      </View>

      <View style={styles.Button}>
        <Button title="Minus" onPress={() => dispatch(decrement())} />
        <Button title="Reset" onPress={() => dispatch(reset())} />
        <Button title="Plus" onPress={() => dispatch(increment())} />
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
  font: {
    fontSize: 100,
    fontWeight: 'bold',
  },
  ViewStyle: {
    paddingTop: 150,
  },
});
