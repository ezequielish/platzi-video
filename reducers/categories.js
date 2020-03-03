import {GET_CATEGORIES, LOADING, ERROR} from '../types/categoriesType';

const INITIAL_STATE = {
  categories: [],
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {...state, categories: action.payload, loading: false};

    case LOADING:
      return {...state, error: '', loading: true};

    case ERROR:
      return {...state, loading: false, error: action.payload};

    default:
      return state;
  }
};
