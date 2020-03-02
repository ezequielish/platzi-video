const BASE_API = 'https://yts.am/api/v2/';

export async function getSuggestion(id) {
  try {
    const query = await fetch(
      `${BASE_API}movie_suggestions.json?movie_id=${id}`,
    );
    const {data} = await query.json();
    return data.movies;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovies() {
  try {
    const query = await fetch(`${BASE_API}list_movies.json?`);
    const {data} = await query.json();
    return data.movies;
  } catch (error) {
    console.log(error);
  }
}
