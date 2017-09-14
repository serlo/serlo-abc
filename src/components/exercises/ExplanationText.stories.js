import React from 'react';
import { storiesOf } from '@storybook/react-native';

import ExplanationText from './ExplanationText';

storiesOf('exercises/ExplanationText', module).add('Repeat letter', () =>
  <ExplanationText
    text="Wiederholen Sie den Buchstaben."
    sound={require('../../assets/sounds/exercises/wiederholen_sie_den_buchstaben_a.mp3')}
  />
);
