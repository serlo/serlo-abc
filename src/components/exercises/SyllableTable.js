import React from 'react';
import { addIndex, map } from 'ramda';
import { View } from 'react-native';

import { PRIMARY } from '../../styles/colors';
import { loadSound } from '../helpers/audio';
import { RoundTextButton, RoundText } from '../Components';

const mapIndexed = addIndex(map);

const SyllableRow = (
  { letter, letterKey, sound, vowels, letterIndex, vowelIndex }
) => {
  const play = () => {
    sound.playAsync();
    sound.setPlaybackFinishedCallback(() => {
      sound.setPositionAsync(0);
    });
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      }}
    >
      {mapIndexed(
        (vowel, vowelKey) => {
          const syllable = letter + vowel;
          if (letterKey === letterIndex && vowelKey === vowelIndex) {
            return (
              <RoundTextButton
                key={vowelKey}
                style={{ margin: 5 }}
                text={syllable}
                size={60}
                onPress={play}
              />
            );
          }

          return (
            <RoundText
              key={vowelKey}
              style={{ margin: 5, opacity: 0.4 }}
              text={syllable}
              size={60}
            />
          );
        },
        vowels
      )}
    </View>
  );
};

const SyllableTable = ({ letters, ...props }) => {
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
          (letter, letterKey) => (
            <SyllableRow
              key={letterKey}
              letter={letter}
              letterKey={letterKey}
              {...props}
            />
          ),
          letters
        )}
      </View>
    </View>
  );
};

export default loadSound(SyllableTable);
