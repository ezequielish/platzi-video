import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {Home} from './src/screens/Home';
import {Header} from './src/sections/components/Header';
import {SuggestionList} from './src/video/containers/SuggestionList';
import {CategoryList} from './src/video/containers/CategoriesList';

import {getSuggestion, getMovies} from './utils/api';
type Props = {};

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getSuggestion(10);
      setMovies(data);
    }

    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const data = await getMovies();
      setCategories(data);
    }

    fetchData();
  }, []);
  return (
    <Home>
      <Header />
      <CategoryList list={categories} />
      <SuggestionList list={movies} />
    </Home>
  );
};
