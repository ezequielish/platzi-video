import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {EmptyResponse} from '../../components/EmptyResponse';
import {HorizontalSeparator} from '../../../sections/components/HorizontalSeparator';
import {Category} from '../../components/Category';
import {Layout} from '../../components/CategoryListLayout';
import {connect} from 'react-redux';
import * as categoriesActions from '../../../../actions/categoriesActions';

const CategoryList = props => {
  const emptyComponent = () => <EmptyResponse text="Sin resultados" />;
  const VSeparator = () => <HorizontalSeparator />;

  useEffect(() => {
    async function fetchData() {
      if (!props.categories.length) {
        await props.getSuggestion(10);
      }
    }

    fetchData();
  }, [props]);
  return (
    <Layout title="Categorias">
      <FlatList
        horizontal
        keyExtractor={item => item.id.toString()}
        data={props.categories}
        ItemSeparatorComponent={() => VSeparator()}
        ListEmptyComponent={() => emptyComponent()}
        renderItem={({item}) => <Category {...item} />}
      />
    </Layout>
  );
};

const mapStateToProps = ({categoriesReducer}) => categoriesReducer;

export default connect(
  mapStateToProps,
  categoriesActions,
)(CategoryList);
