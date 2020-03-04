import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {Layout} from '../../components/SuggestionListLayout';
import {EmptyResponse} from '../../components/EmptyResponse';
import {VerticalSeparator} from '../../components/VerticalSeparator';
import {Suggestion} from '../../components/Suggestion';
import {connect} from 'react-redux';
import * as moviesActions from '../../../../actions/moviesActions';

const SuggestionList = props => {
  const emptyComponent = () => <EmptyResponse text="Sin resultados" />;
  const VSeparator = () => <VerticalSeparator />;

  useEffect(() => {
    async function fetchData() {
      if (!props.movies.length) {
        await props.getMovies();
      }
    }

    fetchData();
  }, [props]);

  const viewMovie = item => {
    props.getMovieSelected(item);
  };
  return (
    <Layout title="Recomendado para ti">
      <FlatList
        data={props.movies}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => VSeparator()}
        ListEmptyComponent={() => emptyComponent()}
        renderItem={({item}) => (
          <Suggestion
            {...item}
            onPress={() => {
              viewMovie(item);
            }}
          />
        )}
      />
    </Layout>
  );
};
const mapStateToProps = ({moviesReducer}) => moviesReducer;

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, moviesActions)(SuggestionList);
