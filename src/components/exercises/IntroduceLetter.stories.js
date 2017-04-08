import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import IntroduceLetter from './IntroduceLetter';

storiesOf('exercises/IntroduceLetter', module).add('A', () => (
  <IntroduceLetter
    images={[
      require('../../assets/images/ananas.jpg'),
      require('../../assets/images/apfel.jpg'),
      require('../../assets/images/affe.jpg')
    ]}
    letter="Aa"
  />
));
