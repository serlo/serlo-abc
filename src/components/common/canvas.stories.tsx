// @ts-ignore TODO: add declaration file
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';

import { Canvas } from './canvas';
import { PrimaryScreen } from './screens';

storiesOf('common/canvas', module).add('default', () => (
  <PrimaryScreen>
    <Canvas />
  </PrimaryScreen>
));
