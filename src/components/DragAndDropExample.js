import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Easing,
  Dimensions
} from 'react-native';

const CIRCLE_RADIUS = 36;
const DOT_RADIUS = 5;
const Window = Dimensions.get('window');
const styles = StyleSheet.create({
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#fff'
  },
  dot: {
    backgroundColor: '#1c45cc',
    width: DOT_RADIUS * 2,
    height: DOT_RADIUS * 2,
    borderRadius: DOT_RADIUS,
  },
  circle: {
    backgroundColor: '#1abc9c',
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
  }
});

export default class DragAndDropExample extends React.Component{
  constructor() {
    super();
    this.initialPosition = {
      x: Window.width / 2 - CIRCLE_RADIUS,
      y: Window.height / 2 + Window.height / 3 - CIRCLE_RADIUS,
    };

    this.state = {
      pan: new Animated.ValueXY(this.initialPosition),
      dotsLayout: [],
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({
          x: this.state.pan.x._value,
          y: this.state.pan.y._value,
        });
        this.state.pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([null, {
        dx: this.state.pan.x,
        dy: this.state.pan.y,
      }]),
      onPanResponderRelease: (e, gesture) => {
        console.log(this.state.pan, gesture);
        this.state.pan.flattenOffset();
        const keys = Object.keys(this.state.dotsLayout);
        const springTo = {x: this.initialPosition.x, y: this.initialPosition.y};
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const zone = this.state.dotsLayout[key];
          if (
            zone.x < gesture.moveX && gesture.moveX < zone.x + zone.width &&
            zone.y < gesture.moveY && gesture.moveY < zone.y + zone.height
          ) {
            springTo.x = zone.x + zone.width / 2 - CIRCLE_RADIUS;
            springTo.y = zone.y + zone.height / 2 - CIRCLE_RADIUS;
            break;
          }
        }
        Animated.spring(this.state.pan, { toValue: { ...springTo } }).start();
      }
    });
  }

  updateDotLayout = (event, dotNumber) => {
    const dotsLayout = this.state.dotsLayout;
    dotsLayout[dotNumber] = event.nativeEvent.layout;
    this.setState({ dotsLayout });
  }

  renderDots = (n) => {
    const dots = [];
    for (let i = 0; i < n; i++) {
      dots.push(
        <View
          key={`answer_${i}`}
          onLayout={(e) => this.updateDotLayout(e, i)}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: '25%',
          }}
        >
          <View style={styles.dot} />
        </View>
      )
    }
    return (
      <View
        style={{
          height: '25%',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {dots}
      </View>
    );
  }

  renderDraggable = () => (
    <View style={{ position: 'absolute' }}>
      <Animated.View
        {...this.panResponder.panHandlers}
        style={[this.state.pan.getLayout(), styles.circle]}
      >
        <Text style={styles.text}>Drag me!</Text>
      </Animated.View>
    </View>
  )

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderDots(6)}
        {this.renderDraggable()}
      </View>
    );
  }
}
