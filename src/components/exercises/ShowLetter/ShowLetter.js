import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';

import repeatIcon from '../../../assets/images/repeat.png';
import { playAll } from '../../../helpers/audio';
import { DEFAULT } from '../../../styles/text';
import IconWithBackground from '../../common/IconWithBackground';
import RoundButton from '../../common/RoundButton';
import { LoadSounds } from '../../helpers/Audio';

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

const UnwrappedShowLetter = ({ letter, sounds, isRepeat }) => {
  const play = () => {
    if (isRepeat) this.icon.unfocus();
    playAll(sounds).then(() => {
      if (isRepeat) this.icon.focus();
    });
  };

  const toggleRepeatButton = () => {
    if (isRepeat) {
      return (
        <IconWithBackground
          ref={view => {
            this.icon = view;
          }}
          icon={repeatIcon}
          size={40}
        />
      );
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.bigLetter}>{letter}</Text>
        <RoundButton
          IconComponent={Ionicons}
          name="md-volume-up"
          size={40}
          onPress={play}
        />
      </View>
      <View height={80}>{toggleRepeatButton()}</View>
    </View>
  );
};

const ShowLetter = ({ sound, ...props }) => {
  const sounds = props.isRepeat
    ? [sound, require('../../../assets/sounds/repeat.mp3')]
    : [sound];

  return (
    <LoadSounds
      sounds={sounds}
      render={sounds => {
        return <UnwrappedShowLetter {...props} sounds={sounds} />;
      }}
    />
  );
};

export default ShowLetter;
