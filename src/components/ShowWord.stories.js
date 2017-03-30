import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import ShowWord from './ShowWord';

storiesOf('components/ShowWord', module)
  .add('Ananas', () => (
    <ShowWord
      image={require('../assets/images/ananas.jpg')}
      sounds={[
        require('../assets/sounds/ananas_long.mp3'),
        require('../assets/sounds/ananas_short.mp3')
      ]}
      text="Ananas"
      letter="A"
    />
  ))
  .add('Affe', () => (
    <ShowWord
      image={require('../assets/images/affe.jpg')}
      sounds={[
        require('../assets/sounds/affe_long.mp3'),
        require('../assets/sounds/affe_short.mp3')
      ]}
      text="Affe"
      letter="A"
    />
  ));
