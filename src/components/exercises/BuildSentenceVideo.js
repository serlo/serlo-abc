import React from 'react';
import { View, Dimensions } from 'react-native';

import { PRIMARY } from '../../styles/colors';
import Video from '../common/Video';
import BuildSentence from './BuildSentence';

const BuildSentenceVideo = props => {
  const { height } = Dimensions.get('window');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: PRIMARY
      }}
    >
      <Video video={props.video} aspectRatio={3 / 4} />
      <BuildSentence
        sentence={props.sentence}
        paddingTop={height / 3}
        changeAnswer={() => {}}
      />
    </View>
  );
};

export default BuildSentenceVideo;
