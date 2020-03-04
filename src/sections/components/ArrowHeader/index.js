import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

export const Arrow = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Image source={require('../../../../assets/icons/arrow_left.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    // backgroundColor: '#14b739',
    borderRadius: 12,
    width: 25,
    height: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
