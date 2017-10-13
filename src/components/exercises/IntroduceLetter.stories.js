import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { getWordObject } from '../../helpers/words';
import IntroduceLetter from './IntroduceLetter';

storiesOf('exercises/IntroduceLetter', module).add('A', () => (
  <IntroduceLetter
    words={[
      getWordObject('ananas'),
      getWordObject('apfel'),
      getWordObject('affe')
    ]}
    letter="Aa"
  />
));
