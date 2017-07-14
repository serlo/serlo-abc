import React, { Component } from 'react';
import { View } from 'react-native';

import speakerImage from '../../assets/images/speaker.png';

import { PRIMARY } from '../../styles/colors';
import { RoundTextButton, RoundImageWithButton } from '../Components';
import { loadSounds } from '../helpers/audio';

class HasPhoneme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlighted: null
    };
  }

  play = () => {
    const playAll = ([sound, ...rest]) => {
      sound.playAsync();
      sound.setPlaybackFinishedCallback(() => {
        sound.setPositionAsync(0);
        if (rest.length > 0) {
          setTimeout(() => playAll(rest), 1000);
        }
      });
    };
    playAll(this.props.sounds);
  };

  createPhonemeButton = (index, crossed_out) => {
    return (
      <RoundTextButton
        onPress={() => {
          this.setState({
            highlighted: index
          });
        }}
        highlighted={index === this.state.highlighted}
        text={this.props.syllable.toUpperCase() + this.props.syllable}
        size={60}
        style={[
          {
            marginLeft: 5,
            marginRight: 5
          },
          crossed_out && { borderWidth: 3 }
        ]}
        crossed_out={crossed_out}
      />
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: PRIMARY,
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <RoundImageWithButton
          image={this.props.image}
          imageSize={150}
          icon={speakerImage}
          buttonSize={30}
          onPress={this.play}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {this.createPhonemeButton(0, false)}
          {this.createPhonemeButton(1, true)}
        </View>
      </View>
    );
  }
}

export default loadSounds(HasPhoneme);
