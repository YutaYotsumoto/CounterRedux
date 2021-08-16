import React from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {increment} from '../../stores/Slices/counterSlice';

const PlusButton = () => {
  const dispatch = useDispatch();
  return <Button title="Plus" onPress={() => dispatch(increment())} />;
};

export default PlusButton;
