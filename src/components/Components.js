import { addIndex, map, path } from 'ramda';
import React, { Component } from 'react';
import { Animated, TouchableOpacity, View, Image, Text } from 'react-native';

import {
  BLACK_TRANSPARENT,
  WHITE,
  WHITE_TRANSPARENT,
  PRIMARY_WEAK,
  TRANSPARENT
} from '../styles/colors';
import { DEFAULT } from '../styles/text';

const mapIndexed = addIndex(map);

export const RoundImageWithBorder = ({ image, size, white, style }) => (
  <View
    style={[
      {
        backgroundColor: white ? WHITE_TRANSPARENT : BLACK_TRANSPARENT,
        borderRadius: 9999999,
        margin: size / 10
      },
      style
    ]}
  >
    <Image
      resizeMode="cover"
      source={image}
      style={{
        height: size,
        width: size,
        margin: size / 10,
        borderRadius: size / 2
      }}
    />
  </View>
);

export class IconWithBackground extends Component {
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

export const RoundButton = ({ icon, size, style, onPress }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <View
      style={{
        backgroundColor: PRIMARY_WEAK,
        borderRadius: 9999,
        padding: 5,
        elevation: 10,
        shadowColor: BLACK_TRANSPARENT,
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowOffset: {
          height: 4,
          width: 4
        }
      }}
    >
      <Image
        source={icon}
        style={{
          height: size,
          width: size,
          resizeMode: 'contain'
        }}
      />
    </View>
  </TouchableOpacity>
);
export const RoundTextButton = ({ onPress, style, ...props }) => (
  <TouchableOpacity onPress={onPress}>
    <RoundText
      {...props}
      style={[
        {
          backgroundColor: PRIMARY_WEAK,
          elevation: 5,
          shadowColor: BLACK_TRANSPARENT,
          shadowOpacity: 1,
          shadowRadius: 0,
          shadowOffset: {
            height: 4,
            width: 4
          },
          opacity: 1
        },
        style
      ]}

      // size={highlighted ? size * 1.2 : size}
    />
  </TouchableOpacity>
);

export class RoundText extends Component {
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
    const { highlighted, crossed_out, text, style, textStyle } = this.props;
    const { size, fontSize } = this.state;
    return (
      <Animated.View
        style={[
          {
            backgroundColor: WHITE_TRANSPARENT,
            borderRadius: 9999,
            borderColor: highlighted ? PRIMARY_WEAK : WHITE,
            height: size,
            width: size,
            alignItems: 'center',
            justifyContent: 'center'
          },
          style,
          highlighted ? { backgroundColor: WHITE } : {}
        ]}
      >
        <Animated.Text
          style={[
            DEFAULT,
            highlighted ? { color: PRIMARY_WEAK } : {},
            { backgroundColor: TRANSPARENT },
            textStyle,
            { fontSize },
            { marginTop: 5 }
          ]}
        >
          {text}
        </Animated.Text>
        <Animated.View
          style={{
            borderRadius: 9999,
            position: 'absolute',
            top: 0,
            left: 0,
            height: size,
            width: size,
            overflow: 'hidden'
          }}
        />
        {crossed_out &&
          <Animated.View
            style={{
              height: 3.5,
              width: size,
              borderRadius: 1,
              top: '-40.7%',
              backgroundColor: highlighted ? PRIMARY_WEAK : WHITE,
              transform: [{ rotate: '-45deg' }],
              opacity: 0.8
            }}
          />}
      </Animated.View>
    );
  }
}

export const RoundImageWithButton = ({
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

export class TextPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsVisible: false,
      selectedValue: ''
    };
  }

  selectOption = key => () => {
    this.setState({
      optionsVisible: false,
      selectedValue: this.props.options[key]
    });
  };

  togglePickerOptions = () => {
    this.setState({
      optionsVisible: !this.state.optionsVisible
    });
  };

  styles = {
    button: {
      backgroundColor: PRIMARY_WEAK,
      padding: 5,
      borderRadius: 20,
      elevation: 10,
      shadowColor: BLACK_TRANSPARENT,
      shadowOpacity: 1,
      shadowRadius: 0,
      shadowOffset: {
        height: 4,
        width: 4
      }
    },
    text: DEFAULT
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}
      >

        {this.state.optionsVisible
          ? mapIndexed(
              (option, key) => (
                <TouchableOpacity onPress={this.selectOption(key)} key={key}>
                  <View style={this.styles.button}>
                    <Text style={this.styles.text}>
                      {option}
                    </Text>
                  </View>
                </TouchableOpacity>
              ),
              this.props.options
            )
          : null}

        <TouchableOpacity onPress={this.togglePickerOptions}>
          <View style={this.styles.button}>
            <Text style={this.styles.text}>
              {this.state.selectedValue}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
