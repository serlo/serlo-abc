import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';

import Splash from './Splash';

storiesOf('components/Splash', module).add('default', () => (
  <Splash
    images=
      {require('../../assets/images/serlo.png')}
      
  />
));
