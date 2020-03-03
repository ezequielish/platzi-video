const BASE_API = 'https://yts.am/api/v2/';

import {GET_CATEGORIES, LOADING, ERROR} from '../types/categoriesType';
export const getSuggestion = id => async dispatch => {
  dispatch({
    type: LOADING,
  });

  try {
    const query = await fetch(
      `${BASE_API}movie_suggestions.json?movie_id=${id}`,
    );
    const {data} = await query.json();
    dispatch({
      type: GET_CATEGORIES,
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
