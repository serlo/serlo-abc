import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import FindLetter from './FindLetter';

storiesOf('exercises/FindLetter', module)
  .add('Ananas', () => (
    <FindLetter
      image={require('../../assets/images/ananas.jpg')}
      sounds={[
        require('../../assets/sounds/ananas_short.mp3'),
        require('../../assets/sounds/ananas_long.mp3')
      ]}
      text="Ananas"
    />
  ))
  .add('Apfel', () => (
    <FindLetter
      image={require('../../assets/images/apfel.jpg')}
      sounds={[
        require('../../assets/sounds/apfel_short.mp3'),
        require('../../assets/sounds/apfel_long.mp3')
      ]}
      text="Apfel"
    />
  ));
