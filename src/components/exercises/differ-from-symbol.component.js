import React, { Component } from 'react';
import { Dimensions, View } from 'react-native';

import RoundTextButton from '../common/RoundTextButton';
import { PortraitScreenOrientation } from '../helpers/screen-orientation';

export class DifferFromSymbol extends Component {
  createChoiceButton = answer => {
    const buttonStyle = { margin: 5 };
    const { symbols, showFeedback, feedback, state } = this.props;
    const wrong = showFeedback && feedback.wrongChoice === answer;
    const missingCorrect = showFeedback && feedback.correctChoice === answer;

    const buttonIsHighlighted = answer === state;
    return (
      <RoundTextButton
        style={buttonStyle}
        highlighted={buttonIsHighlighted}
        wrong={wrong}
        missingCorrect={missingCorrect}
        text={symbols[answer].name}
        isIcon={symbols[answer].isIcon}
        size={75}
        onPress={() => {
          this.props.setState(answer);
        }}
      />
    );
  };

  render() {
    const { width } = Dimensions.get('window');
    const scale = width / 360;

    return (
      <PortraitScreenOrientation>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: 300 * scale,
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
              width: 300 * scale
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
