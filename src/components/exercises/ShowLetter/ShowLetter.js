import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';

import loadImage from '../../../assets/images';
import loadSound from '../../../assets/sounds';
import { playAll } from '../../../helpers/audio';
import { DEFAULT } from '../../../styles/text';
import IconWithBackground from '../../common/IconWithBackground';
import RoundButton from '../../common/RoundButton';
import { LoadSounds } from '../../helpers/Audio';

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

const UnwrappedShowLetter = ({ letter, sounds, isRepeat, setState }) => {
  const play = () => {
    if (isRepeat) {
      this.icon.unfocus();
      setState(false);
    }
    playAll(sounds).then(() => {
      if (isRepeat) {
        this.icon.focus();
        setState(true);
      }
    });
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

const ShowLetter = ({ sound, ...props }) => {
  const sounds = props.isRepeat ? [sound, loadSound.repeat()] : [sound];

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
