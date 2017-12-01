import React, { Component } from 'react';
import { View } from 'react-native';

import RoundTextButton from '../common/RoundTextButton';
import { PortraitScreenOrientation } from '../helpers/screen-orientation';

export class DifferFromSymbol extends Component {
  createChoiceButton = answer => {
    const buttonStyle = { margin: 5 };
    const { symbols, showFeedback, feedback, state } = this.props;
    const wrong = showFeedback && feedback.highlightedChoice === answer;

    const buttonIsHighlighted = answer === state;
    return (
      <RoundTextButton
        style={buttonStyle}
        highlighted={buttonIsHighlighted}
        wrong={wrong}
        text={symbols[answer]}
        size={80}
        onPress={() => {
          this.props.setState(answer);
        }}
      />
    );
  };

  render() {
    return (
      <PortraitScreenOrientation>
        <View
          style={{
            flex: 1,
            alignItems: 'center'
          }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: 300,
              marginTop: 50
            }}
          >
            {this.createChoiceButton(0)}
            {this.createChoiceButton(1)}
            {this.createChoiceButton(2)}
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: 300
            }}
          >
            {this.createChoiceButton(3)}
            {this.createChoiceButton(4)}
          </View>
        </View>
      </PortraitScreenOrientation>
    );
  }
}
