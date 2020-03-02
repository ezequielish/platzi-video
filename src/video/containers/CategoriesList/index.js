import React from 'react';
import {View, FlatList} from 'react-native';
import {EmptyResponse} from '../../components/EmptyResponse';
import {HorizontalSeparator} from '../../../sections/components/HorizontalSeparator';
import {Category} from '../../components/Category';
import {Layout} from '../../components/CategoryListLayout';

export const CategoryList = ({list}) => {
  const emptyComponent = () => <EmptyResponse text="Sin resultados" />;
  const VSeparator = () => <HorizontalSeparator />;
  return (
    <Layout title="Categorias">
      <FlatList
        horizontal
        keyExtractor={item => item.id.toString()}
        data={list}
        ItemSeparatorComponent={() => VSeparator()}
        ListEmptyComponent={() => emptyComponent()}
        renderItem={({item}) => <Category {...item} />}
      />
    </Layout>
  );
};
