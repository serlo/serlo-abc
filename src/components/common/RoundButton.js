import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { BLACK_TRANSPARENT, PRIMARY_WEAK, WHITE } from '../../styles/colors';

const RoundButton = ({ IconComponent, name, size, style, onPress }) => (
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
        },
        width: size + 15,
        height: size + 15,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <IconComponent name={name} size={size} color={WHITE} />
    </View>
  </TouchableOpacity>
);

export default RoundButton;
