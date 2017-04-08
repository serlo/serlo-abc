import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { RoundImageWithBorder, RoundText } from '../Components';

const ScaleFourImages = ({ displaySize, images, letter }) => {
  const scale = displaySize / 360;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <RoundText
        style={{
          marginLeft: 35 * scale
        }}
        text={letter}
        textstyle={{
          fontSize: 50 * scale
        }}
        size={130 * scale}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: -27 * scale
        }}
      >
        <RoundImageWithBorder
          image={images[0]}
          size={130 * scale}
          white
          style={{ margin: 0 }}
        />
        <RoundImageWithBorder
          image={images[1]}
          size={110 * scale}
          white
          style={{ margin: 0 }}
        />
      </View>
      <RoundImageWithBorder
        style={{ marginTop: -25 * scale, marginLeft: 50 * scale }}
        image={images[2]}
        size={130 * scale}
        white
      />
    </View>
  );
};
const IntroduceLetter = props => {
  const { width } = Dimensions.get('window');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#b5ce4d',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <ScaleFourImages displaySize={width} {...props} />
    </View>
  );
};

export default IntroduceLetter;
