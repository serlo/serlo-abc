import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { play } from '../../helpers/audio';
import { BLACK } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import Word from '../../word';
import RoundImageWithBorder from '../common/RoundImageWithBorder';
import { LoadSound } from '../helpers/Audio';

const morgen = new Word('guten_morgen');
const tag = new Word('guten_tag');
const abend = new Word('guten_abend');

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
    return morgen.getSound();
  }

  if (hour < 18) {
    return tag.getSound();
  }

  return abend.getSound();
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
