import React from 'react';
import { storiesOf } from '@storybook/react-native';

import HearWord from './HearWord';

storiesOf('exercises/HearWord', module).add('three words', () =>
  <HearWord
    sound={require('../../assets/sounds/nase_short.mp3')}
    words={['Apfel', 'Nase', 'Anna']}
  />
);
