import React from 'react';
import { View, Image } from 'react-native';

import { WHITE_TRANSPARENT } from '../../styles/colors';

const IconWithBackground = ({ focused, icon, size }) => (
  <View
    style={{
      backgroundColor: focused ? WHITE_TRANSPARENT : 'transparent',
      borderRadius: 9999,
      padding: 20
    }}
  >
    <Image
      source={icon}
      style={{
        height: size,
        width: size,
        resizeMode: 'contain'
      }}
    />
  </View>
);

export default IconWithBackground;
