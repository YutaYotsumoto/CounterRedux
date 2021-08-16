import React from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {decrement} from '../../stores/Slices/counterSlice';

const MinusButton = () => {
  const dispatch = useDispatch();
  return <Button title="Minus" onPress={() => dispatch(decrement())} />;
};

export default MinusButton;
