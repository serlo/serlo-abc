import { addIndex, map, toUpper } from 'ramda';
import React from 'react';
import { View, Text } from 'react-native';

import repeatIcon from '../../../assets/images/repeat.png';
import { getWord } from '../../../helpers/words';
import { WHITE_TRANSPARENT } from '../../../styles/colors';
import { DEFAULT } from '../../../styles/text';
import IconWithBackground from '../../common/IconWithBackground';
import WordImageWithSounds from '../../common/WordImageWithSounds';

const mapIndexed = addIndex(map);

const highlightStyle = {
  backgroundColor: WHITE_TRANSPARENT,
  borderRadius: 20
};

const ShowWord = ({ word, letter, sound, setState, isRepeat }) => {
  const letters = mapIndexed(
    (char, key) => (
      <View
        key={key}
        style={[
          { padding: 5 },
          toUpper(char) === toUpper(letter) ? highlightStyle : null
        ]}
      >
        <Text style={DEFAULT}>{char}</Text>
      </View>
    ),
    getWord(word)
  );

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <WordImageWithSounds
        longSound
        isRepeat={isRepeat}
        word={word}
        onPlayStart={() => {
          if (isRepeat) {
            this.icon.unfocus();
            setState(false);
          }
        }}
        onPlayEnd={() => {
          if (isRepeat) {
            this.icon.focus();
            setState(true);
          }
        }}
      />
      <View style={{ flexDirection: 'row' }}>{letters}</View>
      <View height={80}>
        {isRepeat && (
          <IconWithBackground
            ref={view => {
              this.icon = view;
            }}
            icon={repeatIcon}
            size={40}
          />
        )}
      </View>
    </View>
  );
};

export default ShowWord;
