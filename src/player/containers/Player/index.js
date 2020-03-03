import React, {Component, useState} from 'react';
import Video from 'react-native-video';
import {StyleSheet, Text, ActivityIndicator} from 'react-native';
import {Layout} from '../../componets/Layout';
import {ControlLayout} from '../../componets/ControlLayout';
import {PlayPause} from '../../componets/PlayPause';
import {ProgressBar} from '../../componets/ProgressBar';
import {Time} from '../../componets/TimePlayer';
import {FullScreen} from '../../componets/FullScreen';
import {Muted} from '../../componets/Muted';
export default class Player extends Component {
  constructor(props) {
    super();
    this.onBuffer = this.onBuffer.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onFullScreen = this.onFullScreen.bind(this);
    this.fullScreen = this.fullScreen.bind(this);
  }
  state = {
    loading: true,
    paused: false,
    progress: 0.0,
    duration: '0.0',
    currentTime: ' 0.0',
    muted: false,
  };
  onBuffer({isBuffering}) {
    this.setState({
      loading: isBuffering,
    });
  }
  onLoad = () => {
    this.setState({
      loading: false,
    });
  };
  playPause = () => {
    this.setState({
      paused: !this.state.paused,
    });
  };
  onProgress = playload => {
    let currentTime = playload.currentTime / 60; //tiempo transcurrido en minutos
    let minutes = Math.floor(currentTime); //tiempo transcurrido sin decimales
    let seconds = currentTime % 1;
    seconds = (seconds * 60) / 1000;
    let time = (minutes + seconds * 10).toFixed(2); //toFixed(2) 2 decimales
    let duration = (playload.seekableDuration / 60).toFixed(2); //seekableDuration: duracion de todo el video

    this.setState({
      currentTime: time,
      progress: playload.currentTime / playload.seekableDuration,
      duration: duration,
    });
  };
  onFullScreen = () => {
    this.fullScreen();
    this.state.fullScreen
      ? this.video.dismissFullscreenPlayer()
      : this.video.presentFullscreenPlayer(); //esto no funciona del todo bien
  };
  onMuted = () => {
    this.setState({
      muted: !this.state.muted,
    });
  };
  fullScreen = () => {
    this.setState(function(prevState) {
      return {fullScreen: !prevState.fullScreen};
    });
  };
  videoRef = element => {
    this.video = element;
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
            paused={this.state.paused}
            muted={this.state.muted}
            onProgress={this.onProgress}
            ref={this.videoRef}
          />
        }
        loading={this.state.loading}
        loader={<ActivityIndicator color="white" />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
            <ProgressBar progress={this.state.progress} />
            <Time
              duration={this.state.duration}
              time={this.state.currentTime}
            />
            <Muted muted={this.state.muted} onPress={this.onMuted} />
            <FullScreen
              fullScreen={this.state.fullScreen}
              onPress={this.onFullScreen}
            />
          </ControlLayout>
        }
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

// http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4
