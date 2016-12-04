import React from 'react'
import { action, storiesOf } from '@kadira/react-native-storybook'

import { App } from './App'

storiesOf('components/App', module)
  .add('default', () => (
    <App counter={5} decrement={action('decrement')} increment={action('increment')} />
  ))
