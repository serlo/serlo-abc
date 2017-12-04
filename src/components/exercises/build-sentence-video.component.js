import React from 'react';
import { View, Dimensions } from 'react-native';

import { PRIMARY } from '../../styles/colors';
import Video from '../common/Video';
import { PortraitScreenOrientation } from '../helpers/screen-orientation';
import { BuildSentence } from './build-sentence.component';

export const BuildSentenceVideo = props => {
  const { height } = Dimensions.get('window');

  return (
    <PortraitScreenOrientation>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: PRIMARY
        }}
      >
        <View
          style={{
            height: height / 3,
            width: '100%'
          }}
        >
          <Video video={props.video} />
        </View>
        <View
          style={{
            position: 'absolute',
            top: height / 3,
            height: height * 2 / 3,
            width: '100%'
          }}
        >
          <BuildSentence
            sentence={props.sentence}
            changeAnswer={state => {
              console.warn(state);
            }}
          />
        </View>
      </View>
    </PortraitScreenOrientation>
  );
};
