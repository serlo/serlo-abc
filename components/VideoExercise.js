import React, { Component } from 'react'
import { Image, Text, View, TouchableWithoutFeedback, TouchableOpacity, Button } from 'react-native'
import Video from 'react-native-video'

import replayIcon from '../assets/replay.png'

class VideoExercise extends Component {

  constructor() {
    super()
    this.state = {
      paused: false,
      finished: false
    }
  }

  playPause = () => {
    console.log("Pressed play/pause");
    const paused = !this.state.paused;

    this.setState({
      paused: paused
    })
  }

  replay = () => {
    this.player.seek(0)
    this.setState({
      paused: false,
      finished: false
    })
  }

  // TODO: Wait for the API to get its shit together
  onEnd = () => {
    this.setState({
      finished: true
    })
  }

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <TouchableWithoutFeedback
          onPress={this.playPause}
          style={{
            flex: 1
          }}>
          <Video source={{uri: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'}} //'../assets/a_video.mp4'}}
            ref={(ref) => {
              this.player = ref
            }}
            paused={this.state.paused}
            resizeMode='cover'
            onError={() => console.log("Error")}
            onEnd={() => this.onEnd}
            repeat={false}
            style={styles.backgroundVideo}
          />
        </TouchableWithoutFeedback>
      </View>
    )
  }

  /*
  <View
    style={styles.videoContainer}>
    {this.getReplayButton()}
  </View>
  */

  getReplayButton = () => {
    /*
    if (!this.state.finished) {
      return null
    }
    */

    return (
      <TouchableOpacity
        style={styles.replayButton}
        onPress={this.replay}>
        <Image
          source={replayIcon}
          style={{
            width: 50,
            height: 50
          }}
        />
      </TouchableOpacity>
    )
  }

}

var styles = {
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black'
  },
  videoContainer: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 9999
  },
  replayButton: {
    padding: 15,
    width: 80,
    height: 80,
    borderRadius: 9999,

    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
};

export default VideoExercise
