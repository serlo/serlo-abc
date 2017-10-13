import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { getWordObject } from '../../helpers/words';
import HearWord from './HearWord';

storiesOf('exercises/HearWord', module).add('three words', () => (
  <HearWord
    words={[
      getWordObject('apfel'),
      getWordObject('nase'),
      getWordObject('anna')
    ]}
    correctIndex={1}
  />
));
