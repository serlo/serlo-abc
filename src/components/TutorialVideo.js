import { Components } from 'expo';
import React, { Component } from 'react';
import {
  Image,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';

const { Video } = Components;

import playIcon from '../assets/images/play.png';

// TODO: missing
const replayIcon = null;

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  button: {
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
  }
};

class TutorialVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: false,
      isFinished: false
    };
  }

  onEnd = () => {
    this.setState({
      isFinished: true
    });
  };

  /**
   * Returns the video control elements based on the video state, e.g.
   * if the video has finished, the replay button will be shown;
   * if the video was paused, the play button will be shown
   * @return {Component} TouchableOpacity component containing the icon
   */
  getVideoControls() {
    if (!this.state.isPaused && !this.state.isFinished) {
      return null;
    }

    const icon = this.state.isFinished ? replayIcon : playIcon;
    const handler = this.state.isFinished ? this.replay : this.playPause;

    return (
      <TouchableOpacity style={styles.button} onPress={handler}>
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>
    );
  }

  playPause = () => {
    this.setState({
      isPaused: !this.state.isPaused
    });
  };

  replay = () => {
    this.player.seek(0);
    this.setState({
      isPaused: false,
      isFinished: false
    });
  };

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
            style={styles.video}
            paused={this.state.isPaused}
            onEnd={this.onEnd}
          />
        </TouchableWithoutFeedback>
        {this.getVideoControls()}
      </View>
    );
  }
}

export default TutorialVideo;
