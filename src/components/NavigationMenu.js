import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

const duration = 500;

class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: new Animated.Value(props.visible ? 0 : -100),
      opacity: new Animated.Value(props.visible ? 1 : 0),
      visible: props.visible
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.visible !== nextProps.visible) {
      if (nextProps.visible) {
        this.setState({ visible: nextProps.visible });
      } else {
        setTimeout(() => {
          this.setState({ visible: nextProps.visible });
        }, duration);
      }

      Animated.timing(this.state.top, {
        duration,
        toValue: nextProps.visible ? 0 : -100
      }).start();
      Animated.timing(this.state.opacity, {
        duration,
        toValue: nextProps.visible ? 1 : 0
      }).start();
    }
  }

  render() {
    const navigationMenuStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      paddingTop: 25,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      top: this.state.top,
      opacity: this.state.opacity,
      ...this.props.style
    };

    if (this.state.visible) {
      return (
        <Animated.ScrollView style={navigationMenuStyle}>
          {this.props.children}
        </Animated.ScrollView>
      );
    }

    return null;
  }
}

NavigationMenu.propTypes = {
  visible: PropTypes.bool.isRequired
};

export default NavigationMenu;
