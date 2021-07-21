import {createSlice} from '@reduxjs/toolkit';

// slice(Counterのstore)
export const counterSlice = createSlice({
  name: 'counter',
  // stateの初期値の設定
  initialState: {
    value: 0,
  },
  // Reducer
  reducers: {
    // actionCreator(actionを作成するための関数)
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    reset: state => {
      state.value = 0;
    },
  },
});

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;
