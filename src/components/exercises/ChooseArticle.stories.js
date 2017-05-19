import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import ChooseArticle from './ChooseArticle';

storiesOf('exercises/ChooseArticle', module)
  .add('Ananas', () => (
    <ChooseArticle
      image={require('../../assets/images/ananas.jpg')}
      sounds={[
        require('../../assets/sounds/ananas_short.mp3'),
        require('../../assets/sounds/ananas_long.mp3')
      ]}
      text="Ananas"
    />
  ))
  .add('Apfel', () => (
    <ChooseArticle
      image={require('../../assets/images/apfel.jpg')}
      sounds={[
        require('../../assets/sounds/apfel_short.mp3'),
        require('../../assets/sounds/apfel_long.mp3')
      ]}
      text="Apfel"
    />
  ));
