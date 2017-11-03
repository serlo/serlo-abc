import React, { Component } from 'react';
import { View } from 'react-native';

import { PRIMARY } from '../../../styles/colors';
import WordImageWithSounds from '../../common/WordImageWithSounds';
import RoundTextButton from '../../common/RoundTextButton';

class HasPhoneme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      claimContained: undefined
    };
  }

  createChoiceButton = choiceOption => {
    return (
      <RoundTextButton
        onPress={() => {
          this.setState({
            claimContained: choiceOption
          });
        }}
        highlighted={choiceOption == this.state.claimContained}
        text={this.props.phoneme.toUpperCase() + this.props.phoneme}
        size={60}
        style={[
          {
            marginLeft: 5,
            marginRight: 5
          },
          !choiceOption && { borderWidth: 3 }
        ]}
        crossedOut={!choiceOption}
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
          {this.createChoiceButton(true)}
          {this.createChoiceButton(false)}
        </View>
      </View>
    );
  }
}

export default HasPhoneme;
