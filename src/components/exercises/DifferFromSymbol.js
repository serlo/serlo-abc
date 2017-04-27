import React from 'react';
import { View } from 'react-native';
import * as colors from '../../styles/colors';
import { RoundTextButton, RoundText } from '../Components';

const DifferFromSymbol = (props) => {
  const {
    symbols,
    selectAnswer,
    selectedAnswer,
    exerciseComplete,
    exerciseSuccess,
  } = props;

  let selectedButtonColor = colors.PRIMARY_STRONG;
  if (exerciseComplete) {
    if (exerciseSuccess) {
      selectedButtonColor = colors.GREEN;
    } else {
      selectedButtonColor = colors.RED;
    }
  }

  const generateButtonStyle = (answer) => {
    const style = { margin: 5 };
    if (answer === selectedAnswer) {
      style.backgroundColor = selectedButtonColor;
    }
    return style;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.PRIMARY,
        alignItems: 'center',
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
          text={symbols[0]}
          size={80}
          onPress={() => selectAnswer(0)}
        />
        <RoundTextButton
          style={generateButtonStyle(1)}
          text={symbols[1]}
          size={80}
          onPress={() => selectAnswer(1)}
        />
        <RoundTextButton
          style={generateButtonStyle(2)}
          text={symbols[2]}
          size={80}
          onPress={() => selectAnswer(2)}
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
          text={symbols[3]}
          size={80}
          onPress={() => selectAnswer(3)}
        />
        <RoundTextButton
          style={generateButtonStyle(4)}
          text={symbols[4]}
          size={80}
          onPress={() => selectAnswer(4)}
        />
      </View>
    </View>
  );
};

export default DifferFromSymbol;
