import React from 'react';

import {TouchableHighlight, Image, StyleSheet, View} from 'react-native';

export const Muted = ({muted, onPress}) => {
  return (
    <View>
      <TouchableHighlight
        onPress={onPress}
        style={styles.container}
        // underlayColor="#25E030"
        underlayColor="transparent">
        {!muted ? (
          <Image
            source={require('../../../../assets/icons/volume_up-24px.png')}
          />
        ) : (
          <Image
            source={require('../../../../assets/icons/volume_off-24px.png')}
          />
        )}
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
});
