import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { getWordObject } from '../../helpers/words';
import MatchImage from './MatchImage';

storiesOf('exercises/MatchImage', module).add('Apfel', () => (
  <MatchImage
    words={[
      getWordObject('affe'),
      getWordObject('esel'),
      getWordObject('apfel'),
      getWordObject('nase')
    ]}
    correctIndex={2}
  />
));
