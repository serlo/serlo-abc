import React, { Component } from 'react';
import { View } from 'react-native';

import { PRIMARY } from '../../styles/colors';
import { RoundTextButton } from '../Components';

class LettersRotated extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlighted: null
    }
  }

  createLetterButton = index => {
    const { angle, letters, rotated } = this.props

    return (
      <RoundTextButton
        onPress={() => {
          this.setState({
            highlighted: index
          })
        }}
        highlighted={index === this.state.highlighted}
        text={letters[index]}
        size={60}
        style={[
          {
            marginLeft: 5,
            marginRight: 5
          },
          index === rotated ? { transform: [{ rotate: angle }] } : {}
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
      </View>
    );
  }
}

export default LettersRotated;
