import React from 'react';
import { addIndex, map } from 'ramda';
import { View } from 'react-native';

import { play } from '../../helpers/audio';
import { PRIMARY } from '../../styles/colors';
import RoundText from '../common/RoundText';
import RoundTextButton from '../common/RoundTextButton';
import { LoadSound } from '../helpers/Audio';
import { PortraitScreenOrientation } from '../helpers/screen-orientation';

const mapIndexed = addIndex(map);

const SyllableRow = ({
  letter,
  letterKey,
  sound,
  vowels,
  letterIndex,
  vowelIndex
}) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    }}
  >
    {mapIndexed((vowel, vowelKey) => {
      const syllable = letter + vowel;
      if (letterKey === letterIndex && vowelKey === vowelIndex) {
        return (
          <RoundTextButton
            key={vowelKey}
            style={{ margin: 5 }}
            text={syllable}
            size={60}
            onPress={() => play(sound)}
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
    }, vowels)}
  </View>
);

export const SyllableTable = ({ letters, sound, ...props }) => (
  <PortraitScreenOrientation>
    <LoadSound
      sound={sound}
      render={sound => (
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
                  sound={sound}
                  {...props}
                />
              ),
              letters
            )}
          </View>
        </View>
      )}
    />
  </PortraitScreenOrientation>
);
