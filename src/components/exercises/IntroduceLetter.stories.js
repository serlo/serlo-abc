import React from 'react';
import { storiesOf } from '@storybook/react-native';

import IntroduceLetter from './IntroduceLetter';

storiesOf('exercises/IntroduceLetter', module).add('A', () =>
  <IntroduceLetter
    images={[
      require('../../assets/images/ananas.jpg'),
      require('../../assets/images/apfel.jpg'),
      require('../../assets/images/affe.jpg')
    ]}
    letter="Aa"
  />
);
