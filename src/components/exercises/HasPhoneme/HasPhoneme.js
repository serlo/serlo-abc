import React, { Component } from 'react';
import { View } from 'react-native';

import { PRIMARY } from '../../../styles/colors';
import WordImageWithSounds from '../../common/WordImageWithSounds';
import RoundTextButton from '../../common/RoundTextButton';

class HasPhoneme extends Component {
  createChoiceButton = containsPhoneme => {
    return (
      <RoundTextButton
        onPress={() => {
          this.props.setState({ containsPhoneme });
        }}
        highlighted={containsPhoneme === this.props.state.containsPhoneme}
        text={this.props.phoneme.toUpperCase() + this.props.phoneme}
        size={60}
        style={[
          {
            marginLeft: 5,
            marginRight: 5
          },
          !containsPhoneme && { borderWidth: 3 }
        ]}
        crossedOut={!containsPhoneme}
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
        <WordImageWithSounds
          word={this.props.word}
          onPlayEnd={() => {
            this.props.setState({ soundsPlayed: true });
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {this.createChoiceButton(true)}
          {this.createChoiceButton(false)}
        </View>
      </View>
    );
  }
}

export default HasPhoneme;
