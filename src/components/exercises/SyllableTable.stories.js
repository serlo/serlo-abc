import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import SyllableTable from './SyllableTable';

storiesOf('exercises/SyllableTable', module)
  .add('ne (3x3)', () => (
    <SyllableTable
      sound={require('../../assets/sounds/ne.mp3')}
      letters={['n', 's', 't']}
      vowels={['a', 'e', 'o']}
      letterIndex={0}
      vowelIndex={1}
    />
  ))
  .add('ha (5x4)', () => (
    <SyllableTable
      sound={require('../../assets/sounds/ha.mp3')}
      letters={['h', 'n', 'r', 's', 't']}
      vowels={['a', 'e', 'i', 'o']}
      letterIndex={0}
      vowelIndex={0}
    />
  ));
