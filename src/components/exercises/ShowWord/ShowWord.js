import { addIndex, map, toUpper } from 'ramda';
import React from 'react';
import { View, Text } from 'react-native';

import loadImage from '../../../assets/images';
import { WHITE_TRANSPARENT } from '../../../styles/colors';
import { DEFAULT } from '../../../styles/text';
import IconWithBackground from '../../common/IconWithBackground';
import WordImageWithSounds from '../../common/WordImageWithSounds';
import { PortraitScreenOrientation } from '../../helpers/screen-orientation';

const repeatIcon = loadImage.repeat();
const mapIndexed = addIndex(map);

const highlightStyle = {
  backgroundColor: WHITE_TRANSPARENT,
  borderRadius: 20
};

const ShowWord = ({ word, letter, sound, setState, repeat }) => {
  const letters = mapIndexed(
    (char, key) => (
      <View
        key={key}
        style={[
          { padding: 5 },
          letter && toUpper(char) === toUpper(letter) ? highlightStyle : null
        ]}
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
        longSound
        record={repeat}
        word={word}
        onPlayEnd={() => setState(true)}
        render={render}
      />
    </PortraitScreenOrientation>
  );
};

export default ShowWord;
