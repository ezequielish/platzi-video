import React from 'react';
import {FlatList, Text} from 'react-native';
import {Layout} from '../../components/SuggestionListLayout';
import {EmptyResponse} from '../../components/EmptyResponse';
import {VerticalSeparator} from '../../components/VerticalSeparator';
import {Suggestion} from '../../components/Suggestion';
export const SuggestionList = ({list}) => {
  const emptyComponent = () => <EmptyResponse text="Sin resultados" />;
  const VSeparator = () => <VerticalSeparator />;
  // const renderItem = item => <Seggestion {...item} />;
  return (
    <Layout title="Recomendado para ti">
      <FlatList
        data={list}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => VSeparator()}
        ListEmptyComponent={() => emptyComponent()}
        renderItem={({item}) => <Suggestion {...item} />}
      />
    </Layout>
  );
};
