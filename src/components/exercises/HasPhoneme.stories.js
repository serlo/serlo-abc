import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import HasPhoneme from './HasPhoneme';

storiesOf('exercises/HasPhoneme', module).add('one letter', () => (
  <HasPhoneme
    image={require('../../assets/images/gabel.jpg')}
    sounds={[require('../../assets/sounds/gabel_short.mp3')]}
    word="gabel"
    syllable={'b'}
  />
));
