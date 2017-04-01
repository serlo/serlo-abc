import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import SyllableTable from './SyllableTable';

storiesOf('exercises/SyllableTable', module).add('ne', () => (
  <SyllableTable
    sound={require('../../assets/sounds/ne.mp3')}
    syllables={['na', 'ne', 'no', 'sa', 'se', 'so', 'ta', 'te', 'to']}
    index={1}
  />
));
