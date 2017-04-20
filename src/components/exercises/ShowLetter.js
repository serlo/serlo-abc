import React from 'react';
import { View, Text } from 'react-native';

import repeatIcon from '../../assets/images/repeat.png';
import speakerImage from '../../assets/images/speaker.png';
import { WHITE, PRIMARY } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import { loadSounds, playAll } from '../helpers/audio';
import { RoundButton, IconWithBackground } from '../Components';

const styles = {
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
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
        <Text style={styles.bigLetter}>
          {letter}
        </Text>
        <RoundButton
          icon={speakerImage}
          size={40}
          onPress={() => playAll(sounds, 0)}
        />
      </View>
      <View height={80}>
        {toggleRepeatButton()}
      </View>
    </View>
  );
};

const WrappedShowLetter = loadSounds(UnwrappedShowLetter);

const ShowLetter = ({ sound, ...props }) => {
  const sounds = props.isRepeat
    ? [sound, require('../../assets/sounds/repeat.mp3')]
    : [sound];
  return <WrappedShowLetter sounds={sounds} {...props} />;
};

export default ShowLetter;
