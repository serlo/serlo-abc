import { filter, identity } from 'ramda';
import React from 'react';

import loadImage from '../../assets/images';
import { PlaySounds } from '../helpers/PlaySounds';
import RoundImageWithButton from './RoundImageWithButton';

const speakerImage = loadImage['speaker']();

const doNothing = () => {
  // do nothing
};
const WordImageWithSounds = ({
  onPlayEnd = doNothing,
  word,
  longSound = false,
  render = identity,
  ...props
}) => {
  const sounds = filter(identity, [
    word.getSound(),
    longSound && word.getLongSound()
  ]);

  return (
    <PlaySounds
      {...props}
      sounds={sounds}
      onPlayEnd={onPlayEnd}
      render={(buttonProps, isRecording) => {
        const button = (
          <RoundImageWithButton
            image={word.getImage()}
            imageSize={200}
            icon={speakerImage}
            buttonSize={40}
            {...buttonProps}
          />
        );

        return render(button, isRecording);
      }}
    />
  );
};

export default WordImageWithSounds;
