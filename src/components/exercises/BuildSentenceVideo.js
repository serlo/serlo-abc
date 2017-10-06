import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

import PRIMARY from '../../styles/colors';
import Video from '../common/Video';
import BuildSentence from './BuildSentence';

const { height, width } = Dimensions.get('window');

BuildSentenceVideo = props => (
  <View
    style={{
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: PRIMARY
    }}
  >
    <Video video={props.video} />
    <BuildSentence sentence={props.sentence} paddingTop={height * 0.3} />
  </View>
);

export default BuildSentenceVideo;
