import React from 'react';
import { addIndex, map } from 'ramda';
import { View } from 'react-native';

import { PRIMARY } from '../../styles/colors';
import { loadSound } from '../helpers/audio';
import { RoundTextButton, RoundText } from '../Components';

const mapIndexed = addIndex(map);

const SyllableTable = (
  { letters, vowels, sound, indices: { letterIndex, vowelIndex } }
) => {
  let key = 0;

  const play = () => {
    sound.playAsync();
    sound.setPlaybackFinishedCallback(() => {
      sound.setPositionAsync(0);
    });
  };

  const createSyllables = (letter, letterKey) => {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row'
        }}
        key={letterKey}
      >
        {mapIndexed(
          (vowel, vowelKey) => {
            if (letterKey === letterIndex && vowelKey === vowelIndex) {
              return (
                <RoundTextButton
                  style={{ margin: 5 }}
                  text={letter + vowel}
                  size={60}
                  onPress={play}
                  key={vowelKey}
                />
              );
            } else {
              return (
                <RoundText
                  style={{ margin: 5 }}
                  text={letter + vowel}
                  size={60}
                  key={vowelKey}
                />
              );
            }
          },
          vowels
        )}
      </View>
    );
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
          flexDirection: 'column',
          marginTop: 50
        }}
      >
        {mapIndexed(
          (letter, letterKey) => createSyllables(letter, letterKey),
          letters
        )}
      </View>
    </View>
  );
};

export default loadSound(SyllableTable);
