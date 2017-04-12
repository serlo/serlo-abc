import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import LetterRotated from './LetterRotated';

storiesOf('exercises/LetterRotated', module).add('', () => (
  <LetterRotated
    letters={['a', 'N', 'E', 's', 'T']}
    rotated={4}
    angle={'50deg'}
  />
));
