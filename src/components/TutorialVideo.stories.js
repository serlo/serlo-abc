import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import TutorialVideo from './TutorialVideo';

storiesOf('components/TutorialVideo', module).add('default', () => (
  <TutorialVideo video={require('../assets/video/video.mp4')} />
));
