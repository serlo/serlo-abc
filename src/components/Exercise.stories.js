import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'

import ananasImage from '../assets/images/ananas.jpg'
import Exercise from './Exercise'

storiesOf('components/Exercise', module)
  .add('default', () => (
    <Exercise
      image={ananasImage}
      sound="ananas"
      text="Ananas"
      letter="A"
    />
  ))
