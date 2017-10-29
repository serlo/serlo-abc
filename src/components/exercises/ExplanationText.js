import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';

import { play } from '../../helpers/audio';
import { GREEN } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import { LoadSound } from '../helpers/Audio';
import RoundButton from '../common/RoundButton';

const styles = {
  container: {
    flex: 1,
    backgroundColor: GREEN,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: DEFAULT
};

const ExplanationText = ({ text, sound }) => (
  <LoadSound
    sound={sound}
    render={sound => (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <RoundButton
          IconComponent={Ionicons}
          name="md-volume-up"
          size={40}
          onPress={() => play(sound)}
        />
      </View>
    )}
  />
);

export default ExplanationText;
