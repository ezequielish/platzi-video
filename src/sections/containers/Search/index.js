import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import * as moviesActions from '../../../../actions/moviesActions';

export const Search = props => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    props.serachMovie(text);
  };
  const handleChangeText = value => {
    setText(value);
  };
  return (
    <TextInput
      placeholder="Busca una película"
      autoCorrent={false}
      autoCapitalize="none"
      underlineColorAndroid="transparent"
      onSubmitEditing={handleSubmit}
      onChangeText={handleChangeText}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});

export default connect(
  null,
  moviesActions,
)(Search);
