import React, { Component } from 'react'
import { Image, Text, View, TouchableWithoutFeedback,
  TouchableOpacity, Button, LayoutAnimation } from 'react-native'
import Video from 'react-native-video'

import playIcon from '../assets/play.png'

class TutorialVideo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPaused: false,
      isFinished: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.playPause}>
          <Video
            source={{uri: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'}} //require(videoURI)}}
            ref={(ref) => { this.player = ref; }}
            style={styles.video}
            paused={this.state.isPaused}
            onEnd={this.onEnd}
            repeat={false}
            resizeMode='cover'
          />
        </TouchableWithoutFeedback>
        {this.getVideoControls()}
      </View>
    )
  }

  // TODO: This function is not being called by the Video component yet.
  onEnd = () => {
    this.setState({
      isFinished: true
    });
  }

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
    return this.getVideoControlComponent(icon, handler);
  }

  /**
   * Returns the video control elements based on the parameters
   * @param {Image} icon The icon to be displayed in the component
   * @param {Function} handler The function to be called on press
   * @return {Number} TouchableOpacity component containing the icon
   */
  getVideoControlComponent(icon, handler) {
    return (
      <TouchableOpacity style={styles.button} onPress={handler}>
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>
    )
  }

  playPause = () => {
    this.setState({
      isPaused: !this.state.isPaused
    });
  }

  replay = () => {
    this.player.seek(0);
    this.setState({
      isPaused: false,
      isFinished: false
    });
  }

}

var styles = {
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
    right: 0,
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

export default TutorialVideo
