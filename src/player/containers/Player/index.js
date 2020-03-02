import React, {Component, useState} from 'react';
import Video from 'react-native-video';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Layout} from '../../componets/Layout';

export default class Player extends Component {
  constructor(props) {
    super();
    this.onBuffer = this.onBuffer.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }
  state = {
    loading: true,
  };
  onBuffer(e) {
    console.log('isBuffering', e);

    // this.setState({
    //   loading: isBuffering,
    // });
  }
  onLoad = () => {
    this.setState({
      loading: false,
    });
  };
  render() {
    return (
      <Layout
        video={
          <Video
            source={{
              uri:
                'https://raw.githubusercontent.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4',
            }}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused
          />
        }
        loading={this.state.loading}
        loader={<ActivityIndicator color="white" />}
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

// https://raw.githubusercontent.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4
