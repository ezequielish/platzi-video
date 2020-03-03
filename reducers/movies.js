import {GET_MOVIES, LOADING, ERROR} from '../types/moviesType';

const INITIAL_STATE = {
  movies: [],
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

    default:
      return state;
  }
};
