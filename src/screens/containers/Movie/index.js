import React from 'react';
import MovieLayout from '../../components/MovieLayout';
import Player from '../../../player/containers/Player';
import {Header} from '../../../sections/components/Header';
import {Arrow} from '../../../sections/components/ArrowHeader';
import {Details} from '../../../video/components/Details';
import {connect} from 'react-redux';
import * as moviesActions from '../../../../actions/moviesActions';

export const Movie = props => {
  const arrowBack = () => {
    props.cleanMovieSelected();
  };

  return (
    <MovieLayout>
      <Header>
        {console.log(props)}
        <Arrow onPress={arrowBack} />
      </Header>
      <Player />
      <Details {...props.get_movie_selected} />
    </MovieLayout>
  );
};

const mapStateToProps = ({moviesReducer}) => moviesReducer;
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, moviesActions)(Movie);
