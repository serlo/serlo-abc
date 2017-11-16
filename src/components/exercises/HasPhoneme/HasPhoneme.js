import React, { Component } from 'react';
import { View } from 'react-native';

import WordImageWithSounds from '../../common/WordImageWithSounds';
import RoundTextButton from '../../common/RoundTextButton';
import { PortraitScreenOrientation } from '../../helpers/screen-orientation';

class HasPhoneme extends Component {
  createChoiceButton = containsPhoneme => {
    const { showFeedback, feedback } = this.props;

    const wrong =
      showFeedback && feedback.highlightedChoice === containsPhoneme;

    return (
      <RoundTextButton
        onPress={() => {
          this.props.setState({ containsPhoneme });
        }}
        highlighted={containsPhoneme === this.props.state.containsPhoneme}
        wrong={wrong}
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
      <PortraitScreenOrientation>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <WordImageWithSounds
            playInitially={!this.props.state.soundsPlayed}
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
      </PortraitScreenOrientation>
    );
  }
}

export default HasPhoneme;
