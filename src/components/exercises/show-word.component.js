import * as R from 'ramda';
import React from 'react';
import { View, Text } from 'react-native';

import loadImage from '../../assets/images';
import { WHITE_TRANSPARENT } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import IconWithBackground from '../common/IconWithBackground';
import WordImageWithSounds from '../common/WordImageWithSounds';
import { PortraitScreenOrientation } from '../helpers/screen-orientation';

const repeatIcon = loadImage.repeat();
const mapIndexed = R.addIndex(R.map);

const highlightStyle = {
  backgroundColor: WHITE_TRANSPARENT,
  borderRadius: 20
};

const findAllIndices = (substr, str, start = 0) => {
  const index = str.indexOf(substr, start);

  if (index < 0) {
    return [];
  }

  return [index, ...findAllIndices(substr, str, index + substr.length)];
};

export const ShowWord = ({ word, letter, sound, setState, repeat }) => {
  const wordString = word.toString().toLowerCase();

  const startIndices = findAllIndices(letter, wordString);

  const indices = R.flatten(
    R.map(
      index => R.times(offset => index + offset, letter.length),
      startIndices
    )
  );

  const highlighted = R.reduce(
    (acc, index) => R.update(index, true, acc),
    R.times(R.always(false), wordString.length),
    indices
  );

  const letters = mapIndexed(
    (char, index) => (
      <View
        key={index}
        style={[{ padding: 5 }, highlighted[index] ? highlightStyle : null]}
      >
        <Text style={DEFAULT}>{char}</Text>
      </View>
    ),
    word.toString()
  );

  const render = (button, isRecording) => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      {button}
      <View style={{ flexDirection: 'row' }}>{letters}</View>
      <View height={80}>
        {repeat && (
          <IconWithBackground
            focused={isRecording}
            icon={repeatIcon}
            size={40}
          />
        )}
      </View>
    </View>
  );

  return (
    <PortraitScreenOrientation>
      <WordImageWithSounds
        playInitially
        longSound={!repeat}
        record={repeat}
        word={word}
        onPlayEnd={() => setState(true)}
        render={render}
      />
    </PortraitScreenOrientation>
  );
};
