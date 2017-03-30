import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import ShowLetter from './ShowLetter';

storiesOf('components/ShowLetter', module)
  .add('A (without repeat)', () => (
    <ShowLetter letter="A" sound={require('../assets/sounds/a.mp3')} />
  ))
  .add('B (with repeat)', () => (
    <ShowLetter letter="B" sound={require('../assets/sounds/b.mp3')} isRepeat />
  ));
