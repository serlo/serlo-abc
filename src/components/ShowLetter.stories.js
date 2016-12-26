import React from 'react'
import { storiesOf } from '@kadira/react-native-storybook'

import ShowLetter from './ShowLetter'

storiesOf('components/ShowLetter', module)
  .add('default', () => (
    <ShowLetter
      letter="A"
      sound="a"
      isRepeat={true}
    />
  ))
