import React from 'react';
import { View } from 'react-native';
import * as colors from '../../styles/colors';
import { RoundTextButton, RoundText } from '../Components';

const DifferFromSymbol = props => {
  const {
    symbols,
    changeAnswer,
    currentAnswer,
    exerciseComplete,
    exerciseSuccess
  } = props;

  const generateButtonStyle = answer => {
    const style = { margin: 5 };
    if (answer === currentAnswer && exerciseComplete) {
      if (exerciseSuccess) {
        style.backgroundColor = colors.GREEN;
      } else {
        style.backgroundColor = colors.RED;
      }
    }
    return style;
  };

  const buttonIsHighlighted = answer => {
    return answer === currentAnswer && !exerciseComplete;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.PRIMARY,
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
          style={generateButtonStyle(0)}
          highlighted={buttonIsHighlighted(0)}
          text={symbols[0]}
          size={80}
          onPress={() => changeAnswer(0)}
        />
        <RoundTextButton
          style={generateButtonStyle(1)}
          highlighted={buttonIsHighlighted(1)}
          text={symbols[1]}
          size={80}
          onPress={() => changeAnswer(1)}
        />
        <RoundTextButton
          style={generateButtonStyle(2)}
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
          style={generateButtonStyle(3)}
          highlighted={buttonIsHighlighted(3)}
          text={symbols[3]}
          size={80}
          onPress={() => changeAnswer(3)}
        />
        <RoundTextButton
          style={generateButtonStyle(4)}
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
