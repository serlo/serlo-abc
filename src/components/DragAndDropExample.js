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
const CIRCLE_DIAMETER = 72;
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
    borderRadius: DOT_RADIUS
  },
  circle: {
    backgroundColor: '#1abc9c',
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  }
});

export default class DragAndDropExample extends React.Component {
  constructor() {
    super();
    this.itemNo = 4;
    this.panResponderArr = [];
    this.initialPositionArr = [];

    // initialize items' initial position array
    for (let i = 0; i < this.itemNo; i++) {
      if (i + 1 <= this.itemNo / 2) {
        const initialPos = {
          x: Window.width / 2 - (this.itemNo / 2 - i) * CIRCLE_DIAMETER,
          y: Window.height / 2 + Window.height / 3 - CIRCLE_RADIUS
        };
        this.initialPositionArr.push(initialPos);
      } else {
        const initialPos = {
          x: Window.width / 2 + (i - this.itemNo / 2) * CIRCLE_DIAMETER,
          y: Window.height / 2 + Window.height / 3 - CIRCLE_RADIUS
        };
        this.initialPositionArr.push(initialPos);
      }
    }

    const panArr = [];
    for (let i = 0; i < this.itemNo; i++) {
      const panObj = new Animated.ValueXY(this.initialPositionArr[i]);
      panArr.push(panObj);
    }

    this.state = {
      panArr,
      dotsLayout: []
    };
  }

  componentWillMount = () => {
    // initialize multiple panResponder listeners
    for (let i = 0; i < this.itemNo; i++) {
      const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: (e, gestureState) => {
          this.state.panArr[i].setOffset({
            x: this.state.panArr[i].x._value,
            y: this.state.panArr[i].y._value
          });
          this.state.panArr[i].setValue({ x: 0, y: 0 });
        },
        onPanResponderMove: Animated.event([
          null,
          {
            dx: this.state.panArr[i].x,
            dy: this.state.panArr[i].y
          }
        ]),
        onPanResponderRelease: (e, gesture) => {
          console.log(this.state.pan, gesture);
          this.state.panArr[i].flattenOffset();
          const keys = Object.keys(this.state.dotsLayout);
          const springTo = {
            x: this.initialPositionArr[i].x,
            y: this.initialPositionArr[i].y
          };
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const zone = this.state.dotsLayout[key];
            if (
              zone.x < gesture.moveX &&
              gesture.moveX < zone.x + zone.width &&
              zone.y < gesture.moveY &&
              gesture.moveY < zone.y + zone.height
            ) {
              springTo.x = zone.x + zone.width / 2 - CIRCLE_RADIUS;
              springTo.y = zone.y + zone.height / 2 - CIRCLE_RADIUS;
              break;
            }
          }
          Animated.spring(this.state.panArr[i], {
            toValue: { ...springTo }
          }).start();
        }
      });
      this.panResponderArr.push(panResponder);
    }
  };

  updateDotLayout = (event, dotNumber) => {
    const dotsLayout = this.state.dotsLayout;
    dotsLayout[dotNumber] = event.nativeEvent.layout;
    this.setState({ dotsLayout });
  };

  renderDots = n => {
    const dots = [];
    for (let i = 0; i < n; i++) {
      dots.push(
        <View
          key={`answer_${i}`}
          onLayout={e => this.updateDotLayout(e, i)}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: '25%'
          }}
        >
          <View style={styles.dot} />
        </View>
      );
    }
    return (
      <View
        style={{
          height: '25%',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {dots}
      </View>
    );
  };

  renderDraggable = n => {
    const draggables = [];
    for (let i = 0; i < n; i++) {
      draggables.push(
        <View style={{ position: 'absolute' }}>
          <Animated.View
            {...this.panResponderArr[i].panHandlers}
            style={[this.state.panArr[i].getLayout(), styles.circle]}
          >
            <Text style={styles.text}>{`Drag ${i}`}</Text>
          </Animated.View>
        </View>
      );
    }
    return (
      <View style={{ position: 'absolute' }}>
        {draggables}
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderDots(this.itemNo)}
        {this.renderDraggable(this.itemNo)}
      </View>
    );
  }
}
