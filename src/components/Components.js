import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';

const styles = {
  buttonWithInset: {
    marginLeft: -70
  }
};

export const RoundImageWithBorder = ({ image, size }) => (
  <View
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      borderRadius: 9999999,
      margin: size / 10
    }}
  >
    <Image
      resizeMode="cover"
      source={image}
      style={{
        height: size,
        width: size,
        margin: size / 10,
        borderRadius: size / 2,
        borderColor: 'rgba(0, 0, 0, 0.05)'
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
      backgroundColor: 'rgba(255,255,255,0.15)'
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
        backgroundColor: '#73DBFF',
        borderRadius: 9999,
        padding: 5,
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
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
  <TouchableOpacity onPress={onPress} style={style}>
    <RoundText
      {...props}
      style={{
        backgroundColor: '#73DBFF',
        elevation: 5,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowOffset: {
          height: 4,
          width: 4
        },
        opacity: 1
      }}
    />
  </TouchableOpacity>
);

export const RoundText = ({ text, size, style, textstyle }) => (
  <View
    style={[
      {
        backgroundColor: 'rgba(255,255,255,0.2)',
        opacity: 0.4,
        borderRadius: 9999,
        padding: 5
      },
      style
    ]}
  >
    <Text
      style={[
        {
          backgroundColor: 'transparent',
          color: '#fff',
          fontSize: 40,
          fontWeight: 'bold',
          height: size,
          width: size,
          textAlign: 'center'
        },
        textstyle
      ]}
    >
      {text}
    </Text>
  </View>
);

export const RoundImageWithButton = (
  { image, imageSize, icon, buttonSize, onPress }
) => (
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
