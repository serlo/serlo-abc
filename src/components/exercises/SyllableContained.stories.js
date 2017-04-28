import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import SyllableContained from './SyllableContained';

storiesOf('exercises/SyllableContained', module).add('one letter', () => (
  <SyllableContained
    image={require('../../assets/images/gabel.jpg')}
    sounds={[require('../../assets/sounds/gabel_short.mp3')]}
    word="gabel"
    syllable={'b'}
  />
));
