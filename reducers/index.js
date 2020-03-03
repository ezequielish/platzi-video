import {combineReducers} from 'redux';
import categoriesReducer from './categories';
import moviesReducer from './movies';
export default combineReducers({
  categoriesReducer,
  moviesReducer,
});
