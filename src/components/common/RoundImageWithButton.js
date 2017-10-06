import React from 'react';
import { View } from 'react-native';

import RoundButton from './RoundButton';
import RoundImageWithBorder from './RoundImageWithBorder';

const RoundImageWithButton = ({
  image,
  imageSize,
  icon,
  buttonSize,
  onPress
}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'flex-end'
    }}
  >
    <RoundImageWithBorder image={image} size={imageSize} />
    <RoundButton
      icon={icon}
      size={buttonSize}
      onPress={onPress}
      style={{
        marginLeft: -(buttonSize + imageSize / 10 + 10),
        marginRight: imageSize / 10
      }}
    />
  </View>
);

export default RoundImageWithButton;