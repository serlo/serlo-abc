import React, { Component } from 'react';
import { View } from 'react-native';

import { PRIMARY } from '../../styles/colors';
import { RoundTextButton } from '../Components';

class LettersRotated extends Component {
  constructor(props) {
    super(props);

    this.state = {
      highlighted: [false, false, false, false, false]
    };
  }

  allAngles(size, angles, rotated) {
    var ret = new Array(size), index;
    for (var i = 0; i < size; i++) {
      index = rotated.indexOf(i);
      ret[i] = index !== -1 ? angles[index] : '0deg';
    }
    return ret;
  }

  createLetterButton = index => {
    const { angles, letters, rotated, difficulty } = this.props;
    var allAngles = this.allAngles(letters.length, angles, rotated);
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
            transform: [{ rotate: allAngles[index] }]
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
