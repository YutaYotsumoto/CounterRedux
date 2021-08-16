import React from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {reset} from '../../stores/Slices/counterSlice';

const ResetButton = () => {
  const dispatch = useDispatch();
  return <Button title="Reset" onPress={() => dispatch(reset())} />;
};

export default ResetButton;
