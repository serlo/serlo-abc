import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';

import loadImage from '../../assets/images';
import { DEFAULT } from '../../styles/text';
import IconWithBackground from '../common/IconWithBackground';
import { RoundIconButton } from '../common/buttons';
import { PlaySounds } from '../helpers/PlaySounds';
import { PortraitScreenOrientation } from '../helpers/screen-orientation';

const repeatIcon = loadImage.repeat();

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  bigLetter: {
    ...DEFAULT,
    paddingLeft: 50,
    fontSize: 180
  }
};

export const ShowLetter = ({ letter, sound, repeat, setState }) => (
  <PortraitScreenOrientation>
    <PlaySounds
      playInitially
      record={repeat}
      sounds={[sound]}
      onPlayEnd={() => {
        setState(true);
      }}
      render={(buttonProps, isRecording) => (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.bigLetter}>{letter}</Text>
            <RoundIconButton
              IconComponent={Ionicons}
              name="md-volume-up"
              size={40}
              {...buttonProps}
            />
          </View>
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
      )}
    />
  </PortraitScreenOrientation>
);
