import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';

import { DEFAULT } from '../../styles/text';
import { PlaySounds } from '../helpers/PlaySounds';
import { RoundIconButton } from '../common/buttons';
import { PortraitScreenOrientation } from '../helpers/screen-orientation';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: DEFAULT
};

export const ExplanationText = ({ text, sound, sounds, setState }) => (
  <PortraitScreenOrientation>
    <PlaySounds
      delay={0}
      playInitially
      onPlayEnd={() => setState(true)}
      sounds={sounds || [sound]}
      render={buttonProps => (
        <View style={styles.container}>
          <Text style={styles.text}>{text}</Text>
          <RoundIconButton
            IconComponent={Ionicons}
            name="md-volume-high"
            size={40}
            {...buttonProps}
          />
        </View>
      )}
    />
  </PortraitScreenOrientation>
);
