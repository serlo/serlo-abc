import { Audio } from 'expo';
import React from 'react';
import { View, Text } from 'react-native';

import speakerImage from '../assets/images/speaker.png';
import repeatIcon from '../assets/images/repeat.png';
import repeatSource from '../assets/sounds/repeat.mp3';

Audio.setIsEnabledAsync(true);

import { RoundButton, IconWithBackground } from '../components/Components';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#00B4D5',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  bigLetter: {
    paddingLeft: 50,
    height: 200,
    width: 200,
    color: '#FFF',
    fontSize: 180,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};

const ShowLetter = ({ letter, sound, isRepeat }) => {
  const letterSound = new Audio.Sound({ source: sound });
  const repeatSound = new Audio.Sound({ source: repeatSource });
  letterSound.loadAsync();
  repeatSound.loadAsync();

  const play = () => {
    if (isRepeat) this.icon.unfocus();
    letterSound.playAsync();
    letterSound.setPlaybackFinishedCallback(() => {
      letterSound.setPositionAsync(0);
      if (isRepeat) this.icon.focus();
      repeatSound.playAsync();
      repeatSound.setPlaybackFinishedCallback(() => {
        repeatSound.setPositionAsync(0);
      });
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
        <Text style={styles.bigLetter}>
          {letter}
        </Text>
        <RoundButton icon={speakerImage} size={40} onPress={play} />
      </View>
      <View height={80}>
        {toggleRepeatButton()}
      </View>
    </View>
  );
};

export default ShowLetter;
