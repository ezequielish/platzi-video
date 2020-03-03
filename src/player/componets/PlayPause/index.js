import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from 'react-native';

export const PlayPause = props => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      //   style={styles.container}
      underlayColor="transparent"
      hitSlop={{
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}>
      {props.paused ? (
        <Image
          source={require('../../../../assets/icons/play_arrow-24px.png')}
        />
      ) : (
        <Image source={require('../../../../assets/icons/pause-24px.png')} />
      )}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  },
});
