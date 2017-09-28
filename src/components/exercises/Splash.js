import React from 'react';
import { View, Text } from 'react-native';

import { BLACK, PRIMARY } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import RoundImageWithBorder from '../common/RoundImageWithBorder';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: PRIMARY,
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <RoundImageWithBorder
        image={require('../../assets/images/serlo.png')}
        size={130}
      />
      <View style={{ flexDirection: 'row' }}>
        <Text style={[DEFAULT, { color: BLACK, fontFamily: 'serlo' }]}>
          Serlo
        </Text>
        <Text style={[DEFAULT, { marginLeft: 5, color: '#007EC1' }]}>abc</Text>
      </View>
    </View>
  );
};

export default Splash;
