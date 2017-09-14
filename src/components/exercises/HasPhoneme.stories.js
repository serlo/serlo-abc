import React from 'react';
import { storiesOf } from '@storybook/react-native';

import HasPhoneme from './HasPhoneme';

storiesOf('exercises/HasPhoneme', module).add('one letter', () =>
  <HasPhoneme
    image={require('../../assets/images/gabel.jpg')}
    sound={require('../../assets/sounds/gabel_short.mp3')}
    word="gabel"
    phoneme={'b'}
  />
);
