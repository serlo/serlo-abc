import { addIndex, map } from 'ramda';
import React from 'react';
import { View, Text } from 'react-native';

import speakerImage from '../../assets/images/speaker.png';

import { WHITE, PRIMARY } from '../../styles/colors';
import { loadSounds } from '../helpers/audio';
import { RoundImageWithButton, TextPicker } from '../Components';
const mapIndexed = addIndex(map);

const MissingLetter = ({ image, sounds, text, missing, options }) => {
  const play = () => {
    const playAll = ([sound, ...rest]) => {
      sound.playAsync();
      sound.setPlaybackFinishedCallback(() => {
        sound.setPositionAsync(0);
        if (rest.length > 0) {
          setTimeout(() => playAll(rest), 1000);
        }
      });
    };
    playAll(sounds);
  };

  const letters = mapIndexed(
    (char, key) => {
      return key === missing
        ? <View key={key}>
            <TextPicker options={options} />
          </View>
        : <View key={key} style={{ padding: 5 }}>
            <Text style={{ color: WHITE, fontSize: 40, fontWeight: 'bold' }}>
              {char}
            </Text>
          </View>;
    },
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
        onPress={play}
      />
      <View style={{ flexDirection: 'row' }}>
        {letters}
      </View>
    </View>
  );
};

export default loadSounds(MissingLetter);
