import React from 'react';
import { View, Dimensions } from 'react-native';

import { GREEN } from '../../../styles/colors';
import RoundImageWithBorder from '../../common/RoundImageWithBorder';
import RoundText from '../../common/RoundText';
import { PortraitScreenOrientation } from '../../helpers/screen-orientation';

const ScaleFourImages = ({ displaySize, letter, words }) => {
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
        textStyle={{
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
          image={words[0].getImage()}
          size={130 * scale}
          white
          style={{ margin: 0 }}
        />
        <RoundImageWithBorder
          image={words[1].getImage()}
          size={110 * scale}
          white
          style={{ margin: 0 }}
        />
      </View>
      <RoundImageWithBorder
        style={{ marginTop: -25 * scale, marginLeft: 50 * scale }}
        image={words[2].getImage()}
        size={130 * scale}
        white
      />
    </View>
  );
};

const IntroduceLetter = props => {
  const { width } = Dimensions.get('window');
  return (
    <PortraitScreenOrientation>
      <View
        style={{
          flex: 1,
          backgroundColor: GREEN,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ScaleFourImages displaySize={width} {...props} />
      </View>
    </PortraitScreenOrientation>
  );
};

export default IntroduceLetter;
