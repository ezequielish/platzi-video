import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers); //persistimos el reducer

const store = createStore(persistedReducer, applyMiddleware(reduxThunk));
const persistor = persistStore(store);

export {store, persistor};
