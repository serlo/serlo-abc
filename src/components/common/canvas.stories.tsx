// @ts-ignore TODO: add declaration file
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';

import { Canvas, TextCanvas } from './canvas';
import { PrimaryScreen } from './screens';

storiesOf('common/canvas', module)
  .add('Canvas', () => (
    <PrimaryScreen>
      <Canvas strokeWidth={20} />
    </PrimaryScreen>
  ))
  .add('TextCanvas (letter)', () => (
    <PrimaryScreen>
      <TextCanvas text="A" />
    </PrimaryScreen>
  ))
  .add('TextCanvas (word)', () => (
    <PrimaryScreen>
      <TextCanvas text="Anna" />
    </PrimaryScreen>
  ));
