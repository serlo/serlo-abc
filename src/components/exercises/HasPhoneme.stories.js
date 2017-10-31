import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Word from '../../word';
import HasPhoneme from './HasPhoneme';

storiesOf('exercises/HasPhoneme', module).add('one letter', () => (
  <HasPhoneme word={new Word('gabel')} phoneme={'b'} />
));
