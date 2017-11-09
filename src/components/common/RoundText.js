import { path } from 'ramda';
import React, { Component } from 'react';
import { Animated, View } from 'react-native';

import {
  WHITE,
  WHITE_TRANSPARENT,
  PRIMARY_WEAK,
  TRANSPARENT,
  RED
} from '../../styles/colors';
import { DEFAULT } from '../../styles/text';

class RoundText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: new Animated.Value(props.size),
      fontSize: new Animated.Value(this.getBaseFontSize(props))
    };
  }

  getBaseFontSize = props =>
    path(['textStyle', 'fontSize'], props) || DEFAULT.fontSize;

  componentWillReceiveProps(nextProps) {
    const scaleFactor = 1.2;

    if (
      this.props.size !== nextProps.size ||
      this.getBaseFontSize(this.props) !== this.getBaseFontSize(nextProps) ||
      this.props.highlighted !== nextProps.highlighted
    ) {
      const baseFontSize = this.getBaseFontSize(nextProps);
      Animated.parallel([
        Animated.timing(this.state.size, {
          toValue: nextProps.highlighted
            ? scaleFactor * nextProps.size
            : nextProps.size
        }),
        Animated.timing(this.state.fontSize, {
          toValue: nextProps.highlighted
            ? scaleFactor * baseFontSize
            : baseFontSize
        })
      ]).start();
    }
  }

  render() {
    const {
      highlighted,
      crossedOut,
      text,
      style,
      textStyle,
      wrong
    } = this.props;
    const { size, fontSize } = this.state;
    return (
      <View
        style={[
          {
            backgroundColor: wrong ? RED : WHITE_TRANSPARENT,
            borderRadius: 9999,
            borderColor: highlighted && !wrong ? PRIMARY_WEAK : WHITE
          },
          style,
          highlighted ? { backgroundColor: wrong ? RED : WHITE } : {}
        ]}
      >
        <Animated.View
          style={{
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
            height: size,
            width: size
          }}
        >
          <Animated.Text
            style={[
              DEFAULT,
              highlighted && { color: PRIMARY_WEAK },
              { backgroundColor: TRANSPARENT, marginTop: 5 },
              wrong && { color: WHITE },
              textStyle,
              { fontSize }
            ]}
          >
            {text}
          </Animated.Text>
          {crossedOut && (
            <Animated.View
              style={{
                position: 'absolute',
                height: 3.5,
                width: size,
                borderRadius: 1,
                backgroundColor: highlighted && !wrong ? PRIMARY_WEAK : WHITE,
                transform: [{ rotate: '-45deg' }],
                opacity: 0.8
              }}
            />
          )}
        </Animated.View>
      </View>
    );
  }
}

export default RoundText;
