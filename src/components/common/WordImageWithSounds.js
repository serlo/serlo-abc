import { filter, identity } from 'ramda';
import React from 'react';

import speakerImage from '../../assets/images/speaker.png';
import { playAll } from '../../helpers/audio';
import { getImage, getSound, getLongSound } from '../../helpers/words';
import { LoadSounds } from '../helpers/Audio';
import RoundImageWithButton from './RoundImageWithButton';

const WordImageWithSounds = ({ word, longSound = false }) => {
  const sounds = filter(identity, [
    getSound(word),
    longSound && getLongSound(word)
  ]);

  return (
    <LoadSounds
      sounds={sounds}
      render={sounds => (
        <RoundImageWithButton
          image={getImage(word)}
          imageSize={200}
          icon={speakerImage}
          buttonSize={40}
          onPress={() => playAll(sounds)}
        />
      )}
    />
  );
};

export default WordImageWithSounds;
