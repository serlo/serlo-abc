import React, { Component } from 'react';
import { View } from 'react-native';
import Video from '../common/Video';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  }
};

const TutorialVideo = ({ video }) => {
  return (
    <View style={styles.container}>
      <Video video={video} />
    </View>
  );
};

export default TutorialVideo;
