import React from 'react';
import { storiesOf } from '@storybook/react-native';

import TutorialVideo from './TutorialVideo';

storiesOf('exercises/TutorialVideo', module).add('placeholder', () =>
  <TutorialVideo video={require('../../assets/videos/placeholder.mp4')} />
);
