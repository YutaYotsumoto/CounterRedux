import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  return (
    <View style={styles.ViewStyle}>
      <Text style={styles.font}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    paddingTop: 150,
  },
  font: {
    fontSize: 100,
    fontWeight: 'bold',
  },
});

export default Counter;
