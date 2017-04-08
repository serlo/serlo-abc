import React from 'react';
import { View, Text } from 'react-native';

import speakerImage from '../../assets/images/speaker.png';
import { WHITE, GREEN } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import { loadSound } from '../helpers/audio';
import { RoundButton } from '../Components';

const styles = {
  container: {
    flex: 1,
    backgroundColor: GREEN,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: DEFAULT
};

const ExplanationText = ({ text, sound }) => {
  const play = () => {
    sound.playAsync();
    sound.setPlaybackFinishedCallback(() => {
      sound.setPositionAsync(0);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {text}
      </Text>
      <RoundButton icon={speakerImage} size={40} onPress={play} />
    </View>
  );
};

export default loadSound(ExplanationText);
