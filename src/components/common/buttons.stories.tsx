import { Entypo } from '@expo/vector-icons';
// @ts-ignore TODO: add declaration file
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { View } from 'react-native';

import { RoundIconButton } from './buttons';
import { GreenScreen, PrimaryScreen } from './screens';

storiesOf('common/Buttons', module).add('RoundIconButton', () => {
  const children = (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
      }}
    >
      <RoundIconButton
        key="active"
        IconComponent={Entypo}
        name="chevron-right"
        size={30}
      />
      <RoundIconButton
        key="disabled"
        disabled
        IconComponent={Entypo}
        name="chevron-right"
        size={30}
      />
    </View>
  );

  return [
    <GreenScreen key="green" children={children} />,
    <PrimaryScreen key="blue" children={children} />
  ];
});
