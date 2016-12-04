import React from 'react'
import { action, storiesOf } from '@kadira/react-native-storybook'

import aVideo from '../assets/a_video.mp4'
import VideoExercise from './VideoExercise'

storiesOf('components/VideoExercise', module)
  .add('default', () => (
    <VideoExercise
      video={aVideo}
    />
  ))
