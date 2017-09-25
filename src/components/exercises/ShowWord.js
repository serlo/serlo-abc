import { addIndex, map, toUpper } from 'ramda';
import React from 'react';
import { View, Text } from 'react-native';

import speakerImage from '../../assets/images/speaker.png';
import { playAll } from '../../helpers/audio';
import { getImage, getSound, getLongSound, getWord } from '../../helpers/words';
import { WHITE_TRANSPARENT, PRIMARY } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import { loadSounds } from '../helpers/audio';
import { RoundImageWithButton } from '../Components';

const mapIndexed = addIndex(map);

const highlightStyle = {
  backgroundColor: WHITE_TRANSPARENT,
  borderRadius: 20
};

const ShowWord = ({ image, sounds, text, letter }) => {
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
    text
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
      <RoundImageWithButton
        image={image}
        imageSize={200}
        icon={speakerImage}
        buttonSize={40}
        onPress={() => playAll(sounds)}
      />
      <View style={{ flexDirection: 'row' }}>{letters}</View>
    </View>
  );
};

const LegacyShowWords = loadSounds(ShowWord);

const NewShowWords = props => {
  const { word } = props;

  return (
    <LegacyShowWords
      image={getImage(word)}
      sounds={[getLongSound(word), getSound(word)]}
      text={getWord(word)}
      {...props}
    />
  );
};

export default NewShowWords;
