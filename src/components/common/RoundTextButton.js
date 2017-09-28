import React from 'react';
import { TouchableOpacity } from 'react-native';

import RoundText from './RoundText';

import { BLACK_TRANSPARENT, PRIMARY_WEAK } from '../../styles/colors';

const RoundTextButton = ({ onPress, style, ...props }) => (
  <TouchableOpacity onPress={onPress}>
    <RoundText
      {...props}
      style={[
        {
          backgroundColor: PRIMARY_WEAK,
          elevation: 5,
          shadowColor: BLACK_TRANSPARENT,
          shadowOpacity: 1,
          shadowRadius: 0,
          shadowOffset: {
            height: 4,
            width: 4
          },
          opacity: 1
        },
        style
      ]}
    />
  </TouchableOpacity>
);

export default RoundTextButton;
