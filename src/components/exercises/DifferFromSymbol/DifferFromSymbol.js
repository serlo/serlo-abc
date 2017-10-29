import React from 'react';
import { View } from 'react-native';
import RoundTextButton from '../../common/RoundTextButton';

const DifferFromSymbol = props => {
  const { symbols, state } = props;

  changeAnswer = answer => this.props.setState(answer);

  const buttonStyle = { margin: 5 };

  const buttonIsHighlighted = answer => {
    return answer === state;
  };

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
          highlighted={buttonIsHighlighted(0)}
          text={symbols[0]}
          size={80}
          onPress={() => changeAnswer(0)}
        />
        <RoundTextButton
          style={buttonStyle}
          highlighted={buttonIsHighlighted(1)}
          text={symbols[1]}
          size={80}
          onPress={() => changeAnswer(1)}
        />
        <RoundTextButton
          style={buttonStyle}
          highlighted={buttonIsHighlighted(2)}
          text={symbols[2]}
          size={80}
          onPress={() => changeAnswer(2)}
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
          highlighted={buttonIsHighlighted(3)}
          text={symbols[3]}
          size={80}
          onPress={() => changeAnswer(3)}
        />
        <RoundTextButton
          style={buttonStyle}
          highlighted={buttonIsHighlighted(4)}
          text={symbols[4]}
          size={80}
          onPress={() => changeAnswer(4)}
        />
      </View>
    </View>
  );
};

export default DifferFromSymbol;
