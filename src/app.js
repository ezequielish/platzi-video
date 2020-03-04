import React from 'react';
import {Home} from './screens/containers/Home';
import {Header} from './sections/components/Header';
import SuggestionList from './video/containers/SuggestionList';
import CategoryList from './video/containers/CategoriesList';
import Movie from './screens/containers/Movie';
import {connect} from 'react-redux';
const AppLayout = ({get_movie_selected}) => {
  if (get_movie_selected) {
    return <Movie />;
  }
  return (
    <Home>
      <Header />
      <CategoryList />
      <SuggestionList />
    </Home>
  );
};

const mapStateToProps = ({moviesReducer}) => moviesReducer;

export default connect(mapStateToProps)(AppLayout);
