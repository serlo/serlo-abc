import { propOr } from 'ramda';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Constants, Video } from 'expo';

const styles = {
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default class VideoComponent extends Component {
  onPlaybackStatusUpdate = playbackStatus => {
    if (playbackStatus.didJustFinish) {
      if (this.props.onPlayEnd) {
        this.props.onPlayEnd();
      }
    }
  };

  render() {
    const platform = propOr('unknown', Constants, 'platform');

    return (
      <View style={styles.container}>
        <Video
          resizeMode={Video.RESIZE_MODE_COVER}
          source={this.props.video}
          style={[
            {
              width: '100%',
              height: '100%'
            },
            platform === 'ios' && { backgroundColor: 'transparent' }
          ]}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={this.onPlaybackStatusUpdate}
        />
      </View>
    );
  }
}
