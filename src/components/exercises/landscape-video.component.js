import React from 'react';
import { View } from 'react-native';
import Video from '../common/Video';
import { LandscapeScreenOrientation } from '../helpers/screen-orientation';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export const LandscapeVideo = ({ setState, video }) => {
  return (
    <LandscapeScreenOrientation>
      <View style={styles.container}>
        <Video video={video} onPlayEnd={() => setState(true)} />
      </View>
    </LandscapeScreenOrientation>
  );
};
