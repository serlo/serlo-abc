import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';

import Splash from './Splash';

storiesOf('screens/Splash', module).add('default', () => (
  <Splash next={action('next')} />
));
