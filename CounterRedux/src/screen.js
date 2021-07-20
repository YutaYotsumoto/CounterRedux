import React from 'react';
import {SafeAreaView, Text, StyleSheet, View, Button} from 'react-native';

const Screen = () => {
  return (
    <SafeAreaView style={styles.Screen}>
      <View style={styles.ViewStyle}>
        <Text style={styles.font}>数値</Text>
      </View>

      <View style={styles.Button}>
        <Button title="Minus" />
        <Button title="Plus" />
      </View>
    </SafeAreaView>
  );
};

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
    fontSize: 50,
    fontWeight: 'bold',
  },
  ViewStyle: {
    paddingTop: 150,
  },
});

export default Screen;
