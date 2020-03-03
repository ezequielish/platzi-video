import React from 'react';
import {Home} from './src/screens/Home';
import {Header} from './src/sections/components/Header';
import SuggestionList from './src/video/containers/SuggestionList';
import CategoryList from './src/video/containers/CategoriesList';
import Player from './src/player/containers/Player';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
type Props = {};

const store = createStore(reducers, applyMiddleware(reduxThunk));
export const App = () => {
  return (
    <Provider store={store}>
      <Home>
        <Header />
        <Player />
        <CategoryList />
        <SuggestionList />
      </Home>
    </Provider>
  );
};
