import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'

import video from '../assets/video/video.mp4'
import TutorialVideo from './TutorialVideo'

storiesOf('components/TutorialVideo', module)
  .add('default', () => (
    <TutorialVideo video={video} />
  ))
