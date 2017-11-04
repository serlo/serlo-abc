// @ts-ignore TODO: add declaration file
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { Text } from 'react-native';

import { GreenScreen, PrimaryScreen, Screen } from './screens';

const children = <Text>Foo</Text>;

storiesOf('common/Screens', module)
  .add('Screen', () => <Screen children={children} />)
  .add('BlueScreen', () => <PrimaryScreen children={children} />)
  .add('GreenScreen', () => <GreenScreen children={children} />);
