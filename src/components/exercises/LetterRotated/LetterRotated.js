import React, { Component } from 'react';
import { View } from 'react-native';

import RoundTextButton from '../../common/RoundTextButton';
import { PortraitScreenOrientation } from '../../helpers/screen-orientation';

class LetterRotated extends Component {
  getTransform = index => {
    const angleIndex = this.props.rotated.indexOf(index);
    return angleIndex !== -1 ? [{ rotate: this.props.angles[angleIndex] }] : [];
  };

  createLetterButton = index => {
    const { letters, showFeedback, feedback } = this.props;
    const wrong =
      showFeedback &&
      (feedback.wrongChoices[index] || feedback.missingCorrectChoices[index]);
    const correct = showFeedback && feedback.correctChoices[index];
    //  const missingCorrect = showFeedback && feedback.missingCorrectChoices[index];
    return (
      <RoundTextButton
        onPress={() => {
          this.props.setState(state => {
            state[index] = !state[index];
            return state;
          });
        }}
        wrong={wrong}
        correct={correct}
        highlighted={this.props.state[index]}
        text={letters[index]}
        size={60}
        style={[
          {
            marginLeft: 5,
            marginRight: 5
          }
        ]}
        textStyle={{ transform: this.getTransform(index) }}
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
              flexDirection: 'row',
              marginTop: 50,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {this.createLetterButton(0)}
            {this.createLetterButton(1)}
            {this.createLetterButton(2)}
          </View>
          {this.props.difficulty >= 0.2 && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {this.createLetterButton(3)}
              {this.createLetterButton(4)}
            </View>
          )}
        </View>
      </PortraitScreenOrientation>
    );
  }
}

export default LetterRotated;
