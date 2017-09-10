import React from 'react';
import { storiesOf } from '@storybook/react-native';

import DifferFromSymbol from './DifferFromSymbol';

storiesOf('exercises/DifferFromSymbol', module).add('M', () => (
  <DifferFromSymbol symbols={['X', 'X', 'X', 'X', 'M']} correctIndex={4} />
));
