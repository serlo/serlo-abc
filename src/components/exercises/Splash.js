import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { RoundImageWithBorder } from '../Components';
import { BLACK, PRIMARY } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';

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
        <Text style={[DEFAULT, { marginLeft: 5, color: '#007EC1' }]}>
          abc
        </Text>
      </View>

    </View>
  );
};

export default Splash;
