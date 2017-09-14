import React from 'react';
import { storiesOf } from '@storybook/react-native';

import BuildSentence from './BuildSentence';

storiesOf('exercises/BuildSentence', module).add('example', () =>
  <BuildSentence
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
    changeAnswer={() => {}}
  />
);
