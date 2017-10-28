import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';

import Course from '.';

storiesOf('screens/Course', module).add('default', () => (
  <Course goToSection={action('goToSection')} />
));
