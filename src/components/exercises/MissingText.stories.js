import React from 'react';
import { storiesOf } from '@storybook/react-native';
import MissingText from './MissingText';

storiesOf('exercises/MissingLetter', module)
  .add('Apfel', () =>
    <MissingText
      image={require('../../assets/images/apfel.jpg')}
      sounds={[
        require('../../assets/sounds/apfel_short.mp3'),
        require('../../assets/sounds/apfel_long.mp3')
      ]}
      text={['A', 'p', 'f', 'e', 'l']}
      missing={3}
      options={['a', 'n', 'e']}
    />
  )
  .add('Missing word with picture', () =>
    <MissingText
      image={require('../../assets/images/kiwi.jpg')}
      sounds={[require('../../assets/sounds/kiwi_short.mp3')]}
      text={['Das', 'ist', 'keine', 'Ananas']}
      missing={2}
      options={['keine', 'eine']}
    />
  )
  .add('Missing word with video', () =>
    <MissingText
      video={require('../../assets/videos/placeholder.mp4')}
      text={['Ich', 'bin', 'Anna']}
      missing={2}
      options={['Nena', 'Anna']}
    />
  );
