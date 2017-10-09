import React, { Component } from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  View,
  Dimensions
} from 'react-native';
import { Video } from 'expo';

import playIcon from '../../assets/images/play.png';

const replayIcon = playIcon;
const styles = {
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    position: 'absolute',
    padding: 15,
    width: 80,
    height: 80,
    borderRadius: 9999,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 9999
  },
  icon: {
    width: 50,
    height: 50
  },
  hidden: {
    width: 0,
    height: 0,
    padding: 0,
    overflow: 'hidden'
  }
};

export default class VideoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldPlay: true,
      isFinished: false,
      ...this.getSize(Dimensions.get('window'))
    };
  }

  getSize = ({ width, height }) => ({
    width,
    height: this.props.aspectRatio ? this.props.aspectRatio * width : height
  });

  onPlaybackStatusUpdate = playbackStatus => {
    if (playbackStatus.didJustFinish) {
      this.setState({
        isFinished: true
      });
    }
  };

  /**
   * Returns the video control elements based on the video state, e.g.
   * if the video has finished, the replay button will be shown;
   * if the video was paused, the play button will be shown
   * @return {Component} TouchableOpacity component containing the icon
   */
  getVideoControls() {
    if (this.state.shouldPlay && !this.state.isFinished) {
      return null;
    }

    const icon = this.state.isFinished ? replayIcon : playIcon;
    const handler = this.state.isFinished ? this.replay : this.playPause;

    return (
      <TouchableOpacity
        style={[
          styles.button,
          this.state.shouldPlay && !this.state.isFinished ? styles.hidden : null
        ]}
        onPress={handler}
      >
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>
    );
  }

  playPause = () => {
    this.setState({
      shouldPlay: !this.state.shouldPlay
    });
  };

  replay = () => {
    this.player.setPositionAsync(0);
    this.setState({
      shouldPlay: true,
      isFinished: false
    });
  };

  resize = ({ window }) => {
    this.setState(this.getSize(window));
  };

  componentDidMount() {
    Dimensions.addEventListener('change', this.resize);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.resize);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.playPause}>
          <Video
            ref={ref => {
              this.player = ref;
            }}
            resizeMode={Video.RESIZE_MODE_CONTAIN}
            source={this.props.video}
            style={{
              backgroundColor: 'transparent',
              width: this.state.width,
              height: this.state.height
            }}
            shouldPlay={this.state.shouldPlay}
            onPlaybackStatusUpdate={this.onPlaybackStatusUpdate}
          />
        </TouchableWithoutFeedback>
        {this.getVideoControls()}
      </View>
    );
  }
}
