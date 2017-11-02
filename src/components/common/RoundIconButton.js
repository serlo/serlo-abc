import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { BLACK_TRANSPARENT, PRIMARY_WEAK, WHITE } from '../../styles/colors';

const RoundIconButton = ({
  color = WHITE,
  onPress,
  style,
  children,
  ...props
}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: PRIMARY_WEAK,
          borderRadius: 9999,
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
    >
      <Ionicons {...props} color={color} size={30} />
    </View>
  </TouchableOpacity>
);

export default RoundIconButton;
