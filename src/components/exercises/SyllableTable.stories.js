import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import SyllableTable from './SyllableTable';

storiesOf('exercises/SyllableTable', module).add('ne', () => (
  <SyllableTable
    sound={require('../../assets/sounds/ne.mp3')}
    letters={['n', 's', 't']}
    vowels={['a', 'e', 'o']}
    indices={{ letterIndex: 0, vowelIndex: 1 }}
  />
));
