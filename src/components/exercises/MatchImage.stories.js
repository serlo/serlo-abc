import React from 'react';
import { storiesOf } from '@storybook/react-native';

import MatchImage from './MatchImage';

storiesOf('exercises/MatchImage', module).add('Apfel', () =>
  <MatchImage
    images={[
      require('../../assets/images/affe.jpg'),
      require('../../assets/images/esel.jpg'),
      require('../../assets/images/apfel.jpg'),
      require('../../assets/images/nase.jpg')
    ]}
    text="Apfel"
    sound={require('../../assets/sounds/apfel_short.mp3')}
  />
);
