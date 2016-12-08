import React from 'react'
import { action, storiesOf } from '@kadira/react-native-storybook'

import TutorialVideo from './TutorialVideo'

storiesOf('components/TutorialVideo', module)
  .add('default', () => (
    <TutorialVideo
      videoURI={'../videos/a_video.mp4'}
    />
  ))
