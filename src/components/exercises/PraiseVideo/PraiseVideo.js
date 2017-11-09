import React from 'react';
import { Text, View } from 'react-native';

import { DEFAULT } from '../../../styles/text';
import Video from '../../common/Video';
import { PortraitScreenOrientation } from '../../helpers/screen-orientation';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

const TutorialVideo = ({ text, state, setState, video }) => {
  return (
    <PortraitScreenOrientation>
      <View style={styles.container}>
        {state && <Text style={DEFAULT}>{text}</Text>}
        {!state && <Video video={video} onPlayEnd={() => setState(true)} />}
      </View>
    </PortraitScreenOrientation>
  );
};

export default TutorialVideo;
