import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import DifferFromSymbol from './DifferFromSymbol';

storiesOf('exercises/DifferFromSymbol', module)
  .add('M', () => (
    <DifferFromSymbol 
    letter={["X","X", "X", "X","M"]}
    index={4}
    />
  ));