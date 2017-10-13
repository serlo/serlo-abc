import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { getWordObject } from '../../helpers/words';
import HasPhoneme from './HasPhoneme';

storiesOf('exercises/HasPhoneme', module).add('one letter', () => (
  <HasPhoneme word={getWordObject('gabel')} phoneme={'b'} />
));
