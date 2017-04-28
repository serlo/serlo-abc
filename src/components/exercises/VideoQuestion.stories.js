import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import VideoQuestion from './VideoQuestion';

storiesOf('exercises/VideoQuestion', module).add('Ananas', () => (
  <VideoQuestion
    video={require('../../assets/videos/placeholder.mp4')}
    question="Wer ist eine Ananas?"
    answers={[
      'Ich bin eine Ananas',
      'Du bist eine Ananas',
      'Wir sind eine Ananas'
    ]}
  />
));
