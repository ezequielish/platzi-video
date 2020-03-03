import React from 'react';
import {Text} from 'react-native';
import {Home} from './src/screens/Home';
import {Header} from './src/sections/components/Header';
import SuggestionList from './src/video/containers/SuggestionList';
import CategoryList from './src/video/containers/CategoriesList';
import Player from './src/player/containers/Player';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
type Props = {};

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>cargando...</Text>} persistor={persistor}>
        <Home>
          <Header />
          <Player />
          <CategoryList />
          <SuggestionList />
        </Home>
      </PersistGate>
    </Provider>
  );
};
