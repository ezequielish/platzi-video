const BASE_API = 'https://yts.am/api/v2/';
import {
  GET_MOVIES,
  LOADING,
  ERROR,
  GET_ITEM_SELECTED,
} from '../types/moviesType';

export const getMovies = () => async dispatch => {
  dispatch({
    type: LOADING,
  });

  try {
    const query = await fetch(`${BASE_API}list_movies.json?`);
    const {data} = await query.json();
    dispatch({
      type: GET_MOVIES,
      payload: data.movies,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: error,
    });
  }
};

export const getMovieSelected = item => dispatch => {
  dispatch({
    type: GET_ITEM_SELECTED,
    payload: item,
  });
};

export const cleanMovieSelected = () => dispatch => {
  dispatch({
    type: GET_ITEM_SELECTED,
    payload: '',
  });
};
