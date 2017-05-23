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
console.log('window object', Window);
console.log('minWidth', Window.width / 4);
const styles = StyleSheet.create({
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10
  },
  dot: {
    backgroundColor: '#01579B',
    width: DOT_RADIUS * 2,
    height: DOT_RADIUS * 2,
    borderRadius: DOT_RADIUS
  },
  rectangle: {
    backgroundColor: '#0277BD',
    // width: CIRCLE_DIAMETER,
    height: CIRCLE_DIAMETER
    // minWidth: Window.width / 4,
  }
});

const sentenceArray = ['doing', 'like', 'I', 'exercises'];

export default class DragAndDropExample extends React.Component {
  constructor() {
    super();
    this.itemNo = 6;
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

    // initialize pan array
    const panArr = [];
    for (let i = 0; i < this.itemNo; i++) {
      const panObj = new Animated.ValueXY(this.initialPositionArr[i]);
      panArr.push(panObj);
    }

    this.state = {
      panArr,
      dotsLayout: [],
      recsLayout: []
    };
  }

  componentWillMount = () => {
    // initialize multiple panResponder listeners
    for (let i = 0; i < this.itemNo; i++) {
      const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderGrant: (e, gestureState) => {
          console.log('grant', gestureState);
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
          console.log('recsLayout', this.state.recsLayout[i]);
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
              springTo.x =
                zone.x + zone.width / 2 - this.state.recsLayout[i].width / 2;
              springTo.y =
                zone.y + zone.height / 2 - this.state.recsLayout[i].height / 2;
              break;
            }
          }
          let overlappedIndex = -1;
          for (let j = 0; j < this.state.panArr.length; j++) {
            if (
              parseInt(springTo.x, 10) ===
                parseInt(this.state.panArr[j].x._value, 10) &&
              parseInt(springTo.y, 10) ===
                parseInt(this.state.panArr[j].y._value, 10)
            ) {
              console.log(j);
              // springTo.x = this.initialPositionArr[i].x;
              // springTo.y = this.initialPositionArr[i].y;
              overlappedIndex = j;
            }
          }
          Animated.spring(this.state.panArr[i], {
            toValue: { ...springTo }
          }).start();
          if (overlappedIndex !== -1) {
            Animated.spring(this.state.panArr[overlappedIndex], {
              toValue: {
                x: this.initialPositionArr[overlappedIndex].x,
                y: this.initialPositionArr[overlappedIndex].y
              }
            }).start();
          }
          console.log(this.state.panArr);
        }
      });
      this.panResponderArr.push(panResponder);
    }
  };

  updateDotLayout = (event, dotNumber) => {
    console.log('updateDotLayout', event.nativeEvent);
    const dotsLayout = this.state.dotsLayout;
    dotsLayout[dotNumber] = event.nativeEvent.layout;
    this.setState({ dotsLayout });
  };

  updateRectangleLayout = (event, recIndex) => {
    console.log('updateRecLayout', event.nativeEvent);
    const recsLayout = this.state.recsLayout;
    recsLayout[recIndex] = event.nativeEvent.layout;
    this.setState({ recsLayout });
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

  renderDraggable = sentenceArray => {
    const draggables = [];
    for (let i = 0; i < sentenceArray.length; i++) {
      draggables.push(
        <View key={`rectangle_${i}`} style={{ position: 'absolute' }}>
          <Animated.View
            {...this.panResponderArr[i].panHandlers}
            style={[this.state.panArr[i].getLayout(), styles.rectangle]}
            onLayout={e => this.updateRectangleLayout(e, i)}
          >
            <Text style={styles.text}>{`${sentenceArray[i]}`}</Text>
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
      <View style={{ flex: 1, backgroundColor: '#81D4FA' }}>
        {this.renderDots(sentenceArray.length)}
        {this.renderDraggable(sentenceArray)}
      </View>
    );
  }
}
