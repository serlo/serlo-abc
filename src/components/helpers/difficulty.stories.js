import React from 'react';
import { Text, View } from 'react-native';
import { storiesOf } from '@kadira/react-native-storybook';

import withDifficulty from './difficulty';

const C = ({ label, difficulty }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>{label}: {difficulty}</Text>
  </View>
);

const WrappedComponent = withDifficulty(C);

storiesOf('helpers/difficulty', module).add('placeholder', () => (
  <WrappedComponent label="Foo" />
));
