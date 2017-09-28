import React from 'react';
import { storiesOf } from '@storybook/react-native';

import BuildSentenceVideo from './BuildSentenceVideo';

storiesOf('exercises/BuildSentenceVideo', module).add('8_words', () => (
  <BuildSentenceVideo
    video={require('../../assets/videos/placeholder.mp4')}
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