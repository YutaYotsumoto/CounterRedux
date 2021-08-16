import React from 'react';
import {Provider} from 'react-redux';
import {Screen} from './screens/screen';
import store from './stores/store';

const App = () => {
  return (
    //storeを持つProviderでアプリ全体の親要素にすることでstoreをアプリ内で共有できるようにする
    <Provider store={store}>
      <Screen />
    </Provider>
  );
};

export default App;
