import { path } from 'ramda';
import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import {
  WHITE,
  WHITE_TRANSPARENT,
  PRIMARY_WEAK,
  TRANSPARENT,
  RED,
  GREEN
} from '../../styles/colors';
import { DEFAULT } from '../../styles/text';

const AnimatedIcon = Animated.createAnimatedComponent(MaterialIcons);

class RoundText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size:
        typeof props.size !== undefined
          ? new Animated.Value(props.size)
          : undefined,
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
      isIcon,
      style,
      textStyle,
      wrong,
      correct,
      missingCorrect
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
          highlighted && { backgroundColor: correct ? GREEN : WHITE },
          wrong && { backgroundColor: RED },
          !highlighted &&
            missingCorrect && { borderColor: GREEN, borderWidth: 10 }
        ]}
      >
        <Animated.View
          style={{
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
            ...(size !== undefined ? { height: size, width: size } : {})
          }}
        >
          {isIcon ? (
            <AnimatedIcon
              style={[
                DEFAULT,
                highlighted && { color: PRIMARY_WEAK },
                { backgroundColor: TRANSPARENT, marginTop: 5 },
                (wrong || correct) && { color: WHITE },
                textStyle,
                { fontSize }
              ]}
              name={text}
            />
          ) : (
            <Animated.Text
              style={[
                DEFAULT,
                highlighted && { color: PRIMARY_WEAK },
                { backgroundColor: TRANSPARENT, marginTop: 5 },
                (wrong || correct) && { color: WHITE },
                textStyle,
                { fontSize }
              ]}
            >
              {text}
            </Animated.Text>
          )}
          {crossedOut && (
            <Animated.View
              style={{
                position: 'absolute',
                height: 3.5,
                ...(size !== undefined ? { width: size } : {}),
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
