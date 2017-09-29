import { addIndex, map, toUpper } from 'ramda';
import React from 'react';
import { View, Text } from 'react-native';

import { getWord } from '../../helpers/words';
import { WHITE_TRANSPARENT, PRIMARY } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import WordImageWithSounds from '../common/WordImageWithSounds';

const mapIndexed = addIndex(map);

const highlightStyle = {
  backgroundColor: WHITE_TRANSPARENT,
  borderRadius: 20
};

const ShowWord = ({ word, letter }) => {
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
        backgroundColor: PRIMARY,
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <WordImageWithSounds longSound word={word} />
      <View style={{ flexDirection: 'row' }}>{letters}</View>
    </View>
  );
};

export default ShowWord;
