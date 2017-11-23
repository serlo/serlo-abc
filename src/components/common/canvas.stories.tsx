// @ts-ignore TODO: add declaration file
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';

import { TextCanvas } from './canvas';
import { PrimaryScreen } from './screens';

storiesOf('common/canvas', module)
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
