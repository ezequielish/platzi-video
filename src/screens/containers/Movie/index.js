import React, {useState, useEffect} from 'react';
import MovieLayout from '../../components/MovieLayout';
import Player from '../../../player/containers/Player';
import {Header} from '../../../sections/components/Header';
import {Arrow} from '../../../sections/components/ArrowHeader';
import {Details} from '../../../video/components/Details';
import {Animated} from 'react-native';
import {connect} from 'react-redux';
import * as moviesActions from '../../../../actions/moviesActions';

export const Movie = props => {
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const arrowBack = () => {
    props.cleanMovieSelected();
  };
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
    }).start();

    // return {};
  }, []);
  return (
    <Animated.View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        opacity: opacity,
      }}>
      <MovieLayout>
        <Header>
          <Arrow onPress={arrowBack} />
        </Header>
        <Player />
        <Details {...props.get_movie_selected} />
      </MovieLayout>
    </Animated.View>
  );
};

const mapStateToProps = ({moviesReducer}) => moviesReducer;
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, moviesActions)(Movie);
