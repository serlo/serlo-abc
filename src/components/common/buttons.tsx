import * as chroma from 'chroma-js';
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

export class RoundIconButton extends React.Component {
  private button: any;

  public measureInWindow(cb) {
    if (this.button) {
      return this.button.measureInWindow(cb);
    }
  }

  public render() {
    const { IconComponent, name, size, style, onPress, disabled } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        ref={ref => (this.button = ref)}
      >
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
  }
}
