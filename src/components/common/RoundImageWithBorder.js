import React, { Component } from 'react';
import { Animated } from 'react-native';

import {
  BLACK_TRANSPARENT,
  WHITE_TRANSPARENT,
  WHITE_LESS_TRANSPARENT,
  RED
} from '../../styles/colors';

class RoundImageWithBorder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: new Animated.Value(props.size)
    };
  }

  componentWillReceiveProps(nextProps) {
    const scaleFactor = 1.2;

    if (
      this.props.size !== nextProps.size ||
      this.props.highlighted !== nextProps.highlighted
    ) {
      Animated.timing(this.state.size, {
        toValue: nextProps.highlighted
          ? scaleFactor * nextProps.size
          : nextProps.size
      }).start();
    }
  }

  render() {
    const { highlighted, image, white, style, wrong } = this.props;
    const { size } = this.state;

    return (
      <Animated.View
        style={[
          {
            backgroundColor: white ? WHITE_TRANSPARENT : BLACK_TRANSPARENT,
            borderRadius: 9999999,
            margin: this.props.size / 10
          },
          highlighted && {
            backgroundColor: wrong ? RED : WHITE_LESS_TRANSPARENT
          },
          style
        ]}
      >
        <Animated.Image
          resizeMode="cover"
          source={image}
          style={{
            height: size,
            width: size,
            margin: this.props.size / 10,
            borderRadius:
              (highlighted ? 1.2 * this.props.size : this.props.size) / 2
          }}
        />
      </Animated.View>
    );
  }
}

export default RoundImageWithBorder;
