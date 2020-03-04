import React from 'react';
import {Loading} from './src/sections/components/Loading';
import AppLayout from './src/app';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
type Props = {};

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <AppLayout />
      </PersistGate>
    </Provider>
  );
};
