import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import DragAndDropExample from './DragAndDropExample';

storiesOf('Drag And Drop', module).add('example', () => (
  <DragAndDropExample
    sentence={[
      'JavaScript',
      'React',
      'using',
      'mobile',
      'Build',
      'apps',
      'native',
      'and'
    ]}
  />
));
