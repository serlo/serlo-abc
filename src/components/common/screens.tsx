// @ts-ignore TODO: add declaration file
import { Constants } from 'expo';
import * as React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { GREEN, PRIMARY } from '../../styles/colors';

interface ScreenProps {
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
}

export const Screen: React.SFC<ScreenProps> = ({
  backgroundColor,
  children,
  style
}) => (
  <View
    style={[
      {
        flex: 1,
        alignItems: 'center',
        backgroundColor,
        paddingTop: Constants.statusBarHeight
      },
      style
    ]}
  >
    {children}
  </View>
);

export const PrimaryScreen: React.SFC<ScreenProps> = props => (
  <Screen backgroundColor={PRIMARY} {...props} />
);

export const GreenScreen: React.SFC<ScreenProps> = props => (
  <Screen backgroundColor={GREEN} {...props} />
);
