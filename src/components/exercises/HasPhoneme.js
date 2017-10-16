import React, { Component } from 'react';
import { View } from 'react-native';

import { PRIMARY } from '../../styles/colors';
import WordImageWithSounds from '../common/WordImageWithSounds';
import RoundTextButton from '../common/RoundTextButton';

class HasPhoneme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlighted: null
    };
  }

  createPhonemeButton = (index, crossedOut) => {
    return (
      <RoundTextButton
        onPress={() => {
          this.setState({
            highlighted: index
          });
        }}
        highlighted={index === this.state.highlighted}
        text={this.props.phoneme.toUpperCase() + this.props.phoneme}
        size={60}
        style={[
          {
            marginLeft: 5,
            marginRight: 5
          },
          crossedOut && { borderWidth: 3 }
        ]}
        crossedOut={crossedOut}
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
        <WordImageWithSounds word={this.props.word} />
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

export default HasPhoneme;
