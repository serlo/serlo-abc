import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { play } from '../../helpers/audio';
import { getWordObject, getSound } from '../../helpers/words';
import { BLACK } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import RoundImageWithBorder from '../common/RoundImageWithBorder';
import { LoadSound } from '../helpers/Audio';

const morgen = getWordObject('guten_morgen');
const tag = getWordObject('guten_tag');
const abend = getWordObject('guten_abend');

class Splash extends Component {
  componentDidMount() {
    const next = this.props.next || (() => null);

    setTimeout(() => {
      play(this.props.sound).then(() => {
        setTimeout(() => {
          next();
        }, 1000);
      });
    }, 1000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
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
  }
}

const soundFromHour = hour => {
  if (hour < 10) {
    return getSound(morgen);
  }

  if (hour < 18) {
    return getSound(tag);
  }

  return getSound(abend);
};

const SplashWrapper = props => {
  const hour = new Date().getHours();
  const sound = soundFromHour(hour);

  return (
    <LoadSound
      sound={sound}
      render={sound => <Splash sound={sound} {...props} />}
    />
  );
};

export default SplashWrapper;
