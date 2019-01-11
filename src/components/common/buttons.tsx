import chroma from 'chroma-js';
import * as React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProperties,
  View
} from 'react-native';

import { BLACK_TRANSPARENT, PRIMARY_WEAK, WHITE } from '../../styles/colors';

interface RoundIconButtonProps extends TouchableOpacityProperties {
  IconComponent: React.ComponentType<{
    name: string;
    size?: number;
    color: string;
  }>;
  name: string;
  size: number;
}

export const RoundIconButton: React.SFC<RoundIconButtonProps> = ({
  IconComponent,
  name,
  size,
  style,
  onPress,
  disabled
}) => (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
    <View
      style={[
        {
          backgroundColor: disabled
            ? chroma(PRIMARY_WEAK)
                .brighten()
                .desaturate()
                .hex()
            : PRIMARY_WEAK,
          borderRadius: 9999,
          padding: 5,
          elevation: 10,
          shadowColor: BLACK_TRANSPARENT,
          shadowOpacity: disabled ? 0 : 1,
          shadowRadius: 0,
          shadowOffset: {
            height: 4,
            width: 4
          },
          width: size + 15,
          height: size + 15,
          alignItems: 'center',
          justifyContent: 'center'
        },
        style
      ]}
    >
      <IconComponent name={name} size={size} color={WHITE} />
    </View>
  </TouchableOpacity>
);
