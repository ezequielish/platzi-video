import {
  GET_MOVIES,
  GET_ITEM_SELECTED,
  LOADING,
  ERROR,
} from '../types/moviesType';

const INITIAL_STATE = {
  movies: [],
  get_movie_selected: '',
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {...state, movies: action.payload, loading: false};

    case LOADING:
      return {...state, error: '', loading: true};

    case ERROR:
      return {...state, loading: false, error: action.payload};

    case GET_ITEM_SELECTED:
      return {...state, get_movie_selected: action.payload};

    default:
      return state;
  }
};
