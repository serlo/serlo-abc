import React, { Component } from 'react';
import { View } from 'react-native';

import { PRIMARY } from '../../styles/colors';
import { RoundTextButton } from '../Components';

class LettersRotated extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlighted: props.letters.map(() => false)
    };
  }

  getTransform = index => {
    const angleIndex = this.props.rotated.indexOf(index);
    return angleIndex !== -1 ? [{ rotate: this.props.angles[angleIndex] }] : [];
  };

  createLetterButton = index => {
    const { angles, letters, rotated, difficulty } = this.props;
    return (
      <RoundTextButton
        onPress={() => {
          this.setState(({ highlighted }) => {
            highlighted[index] = !highlighted[index];
            return {
              highlighted: highlighted
            };
          });
        }}
        highlighted={this.state.highlighted[index]}
        text={letters[index]}
        size={60}
        style={[
          {
            marginLeft: 5,
            marginRight: 5,
            transform: this.getTransform(index)
          }
        ]}
      />
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: PRIMARY,
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
        {this.props.difficulty >= 0.2 &&
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {this.createLetterButton(3)}
            {this.createLetterButton(4)}
          </View>}
      </View>
    );
  }
}

export default LettersRotated;
