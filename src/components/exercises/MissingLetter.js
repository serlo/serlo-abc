import { addIndex, map } from 'ramda';
import React from 'react';
import { View, Text } from 'react-native';

import speakerImage from '../../assets/images/speaker.png';

import { WHITE, PRIMARY } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import { loadSounds, playAll } from '../helpers/audio';
import { RoundImageWithButton, TextPicker } from '../Components';
const mapIndexed = addIndex(map);

const MissingLetter = ({ image, sounds, text, missing, options }) => {
  const letters = mapIndexed((char, key) => {
    return key === missing
      ? <View key={key}>
          <TextPicker options={options} />
        </View>
      : <View key={key} style={{ padding: 5 }}>
          <Text style={DEFAULT}>
            {char}
          </Text>
        </View>;
  }, text);

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
      <View style={{ flexDirection: 'row' }}>
        {letters}
      </View>
    </View>
  );
};

export default loadSounds(MissingLetter);
