import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { WHITE_TRANSPARENT } from '../../styles/colors';

class IconWithBackground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'transparent'
    };
  }

  // Removes the semi-transparent background behind the icon
  unfocus = () => {
    this.setState({
      backgroundColor: 'transparent'
    });
  };

  // Draws the semi-transparent background behind the icon
  focus = () => {
    this.setState({
      backgroundColor: WHITE_TRANSPARENT
    });
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: this.state.backgroundColor,
          borderRadius: 9999,
          padding: 20
        }}
      >
        <Image
          source={this.props.icon}
          style={{
            height: this.props.size,
            width: this.props.size,
            resizeMode: 'contain'
          }}
        />
      </View>
    );
  }
}

export default IconWithBackground;
