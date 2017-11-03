import React from 'react';
import { storiesOf } from '@storybook/react-native';

import loadSound from '../../assets/sounds';
import SyllableTable from './SyllableTable';

storiesOf('exercises/SyllableTable', module)
  .add('ne (3x3)', () => (
    <SyllableTable
      sound={loadSound.ne()}
      letters={['n', 's', 't']}
      vowels={['a', 'e', 'o']}
      letterIndex={0}
      vowelIndex={1}
    />
  ))
  .add('ha (5x4)', () => (
    <SyllableTable
      sound={loadSound.ha()}
      letters={['h', 'n', 'r', 's', 't']}
      vowels={['a', 'e', 'i', 'o']}
      letterIndex={0}
      vowelIndex={0}
    />
  ));
