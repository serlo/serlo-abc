import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'

import ananasImage from '../assets/images/ananas.jpg'
import ShowWord from './ShowWord'

storiesOf('components/ShowWord', module)
  .add('default', () => (
    <ShowWord
      image={ananasImage}
      sound="ananas"
      text="Ananas"
      letter="A"
    />
  ))
