import React from 'react';
import { View } from 'react-native';
import Video from '../../common/Video';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const TutorialVideo = ({ setState, video }) => {
  return (
    <View style={styles.container}>
      <Video video={video} onPlayEnd={() => setState(true)} />
    </View>
  );
};

export default TutorialVideo;
