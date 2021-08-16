import {createSlice} from '@reduxjs/toolkit';

// counterSlice作成

export const counterSlice = createSlice({
  // Sliceの名前を設定
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

//counterReducerをexport
export default counterSlice.reducer;
//Actioncreatorをexport
export const {increment, decrement, reset} = counterSlice.actions;
