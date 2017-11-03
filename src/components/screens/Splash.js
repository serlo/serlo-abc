import React, { Component } from 'react';
import { View, Text } from 'react-native';

import loadImage from '../../assets/images';
import loadSound from '../../assets/sounds';
import { play } from '../../helpers/audio';
import { BLACK } from '../../styles/colors';
import { DEFAULT } from '../../styles/text';
import RoundImageWithBorder from '../common/RoundImageWithBorder';
import { LoadSound } from '../helpers/Audio';

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
        <RoundImageWithBorder image={loadImage['serlo']()} size={130} />
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
    return loadSound['guten_morgen']();
  }

  if (hour < 18) {
    return loadSound['guten_tag']();
  }

  return loadSound['guten_abend']();
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
