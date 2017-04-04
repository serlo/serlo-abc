import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import IntroduceLetter from './IntroduceLetter';

storiesOf('components/IntroduceLetter', module).add('default', () => (
  <IntroduceLetter
    images={[require('../assets/images/ananas.jpg'), 
    		require('../assets/images/ananas.jpg'),
    		require('../assets/images/ananas.jpg')]}
    letter="Aa"
  />
));