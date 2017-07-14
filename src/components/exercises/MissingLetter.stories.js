import React from 'react';
import { storiesOf } from '@storybook/react-native';

import MissingLetter from './MissingLetter';
storiesOf('exercises/MissingLetter', module).add('Apfel', () =>
  <MissingLetter
    image={require('../../assets/images/apfel.jpg')}
    sounds={[
      require('../../assets/sounds/apfel_short.mp3'),
      require('../../assets/sounds/apfel_long.mp3')
    ]}
    text="Apfel"
    missing={3}
    options={['a', 'n', 'e']}
  />
);
