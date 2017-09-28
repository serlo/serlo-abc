import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

import { BLACK_TRANSPARENT, PRIMARY_WEAK } from '../../styles/colors';

const RoundButton = ({ icon, size, style, onPress }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <View
      style={{
        backgroundColor: PRIMARY_WEAK,
        borderRadius: 9999,
        padding: 5,
        elevation: 10,
        shadowColor: BLACK_TRANSPARENT,
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowOffset: {
          height: 4,
          width: 4
        }
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
  </TouchableOpacity>
);

export default RoundButton;
