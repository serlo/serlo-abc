import React, { Component } from 'react';
import { View } from 'react-native';
import RoundTextButton from '../../common/RoundTextButton';

class DifferFromSymbol extends Component {
  changeAnswer = answer => () => {
    this.props.setState(answer);
  };

  buttonIsHighlighted = answer => {
    const { state } = this.props;
    return answer === state;
  };

  render() {
    const buttonStyle = { margin: 5 };
    const { symbols } = this.props;
    return (
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
          <RoundTextButton
            style={buttonStyle}
            highlighted={this.buttonIsHighlighted(0)}
            text={symbols[0]}
            size={80}
            onPress={this.changeAnswer(0)}
          />
          <RoundTextButton
            style={buttonStyle}
            highlighted={this.buttonIsHighlighted(1)}
            text={symbols[1]}
            size={80}
            onPress={this.changeAnswer(1)}
          />
          <RoundTextButton
            style={buttonStyle}
            highlighted={this.buttonIsHighlighted(2)}
            text={symbols[2]}
            size={80}
            onPress={this.changeAnswer(2)}
          />
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
          <RoundTextButton
            style={buttonStyle}
            highlighted={this.buttonIsHighlighted(3)}
            text={symbols[3]}
            size={80}
            onPress={this.changeAnswer(3)}
          />
          <RoundTextButton
            style={buttonStyle}
            highlighted={this.buttonIsHighlighted(4)}
            text={symbols[4]}
            size={80}
            onPress={this.changeAnswer(4)}
          />
        </View>
      </View>
    );
  }
}

export default DifferFromSymbol;
