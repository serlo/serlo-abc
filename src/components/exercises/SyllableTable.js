import React from 'react';
import { addIndex, map } from 'ramda';
import { View } from 'react-native';

import { PRIMARY } from '../../styles/colors';
import { loadSound } from '../helpers/audio';
import { RoundTextButton, RoundText } from '../Components';

const mapIndexed = addIndex(map);

const SyllableTable = ({ syllables, sound, index }) => {
  const play = () => {
    sound.playAsync();
    sound.setPlaybackFinishedCallback(() => {
      sound.setPositionAsync(0);
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: PRIMARY,
        alignItems: 'center'
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: 300,
          marginTop: 50
        }}
      >
        {mapIndexed(
          (syllable, key) => {
            if (key === index) {
              return (
                <RoundTextButton
                  style={{ margin: 5 }}
                  text={syllable}
                  size={60}
                  onPress={play}
                  key={key}
                />
              );
            } else {
              return (
                <RoundText
                  style={{ margin: 5 }}
                  text={syllable}
                  size={60}
                  key={key}
                />
              );
            }
          },
          syllables
        )}
      </View>
    </View>
  );
};

export default loadSound(SyllableTable);
