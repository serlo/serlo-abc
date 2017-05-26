import React from 'react';
import { storiesOf } from '@storybook/react-native';

import LetterRotated from './LetterRotated';

storiesOf('exercises/LetterRotated', module)
  .add('difficulty level 1', () => (
    <LetterRotated
      letters={['a', 'N', 'E']}
      rotated={[4]}
      angles={['50deg']}
      difficulty={0.1}
    />
  ))
  .add('difficulty level 2', () => (
    <LetterRotated
      letters={['a', 'N', 'E', 's', 'T']}
      rotated={[4]}
      angles={['50deg']}
      difficulty={0.3}
    />
  ))
  .add('difficulty level 3', () => (
    <LetterRotated
      letters={['a', 'N', 'E', 's', 'T']}
      rotated={[3, 4]}
      angles={['50deg', '-30deg']}
      difficulty={0.5}
    />
  ));
