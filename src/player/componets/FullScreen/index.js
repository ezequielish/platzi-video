import React from 'react';

import {TouchableHighlight, Image, StyleSheet, View} from 'react-native';

export const FullScreen = props => {
  return (
    <View>
      <TouchableHighlight
        onPress={props.onPress}
        style={styles.container}
        underlayColor="transparent"
        // underlayColor="#25E030"
      >
        {!props.fullScreen ? (
          <Image
            source={require('../../../../assets/icons/fullscreen-24px.png')}
          />
        ) : (
          <Image
            source={require('../../../../assets/icons/fullscreen_exit-24px.png')}
          />
        )}
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    // justifyContent: 'center',
    // paddingHorizontal: 10,
    // height: 25,
    // marginRight: 10,
    // marginVertical: 5,
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: 'white',
    // backgroundColor: 'green',
  },
});
