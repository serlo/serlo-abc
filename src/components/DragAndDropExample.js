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

const sentenceArray = ['doing', 'like', 'I', 'exercises', 'and', 'Mary'];

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
      recsLayout: [],
      dotsWidthArray: [],
      dotsFlagArray: []
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
          let dotIndex = -1;
          for (let m = 0; m < keys.length; m++) {
            const key = keys[m];
            const zone = this.state.dotsLayout[key];
            if (
              zone.x < gesture.moveX &&
              gesture.moveX < zone.x + zone.width &&
              zone.y < gesture.moveY &&
              gesture.moveY < zone.y + zone.height
            ) {
              dotIndex = m;
              this.state.dotsFlagArray[dotIndex] = i;
              // springTo.x = zone.x + zone.width / 2 - this.state.recsLayout[i].width / 2;
              // springTo.y = zone.y + zone.height / 2 - this.state.recsLayout[i].height / 2;
              break;
            }
          }
          if (dotIndex !== -1) {
            const dotsWidthArray = this.state.dotsWidthArray;
            dotsWidthArray[dotIndex] = this.state.recsLayout[i].width;
            this.setState({ dotsWidthArray });
            setTimeout(() => {
              for (let n = 0; n < this.state.dotsFlagArray.length; n++) {
                if (this.state.dotsFlagArray[n] !== -1) {
                  const keys = Object.keys(this.state.dotsLayout);
                  const key = keys[n];
                  const zone = this.state.dotsLayout[key];
                  const rectangleIndex = this.state.dotsFlagArray[n];
                  const moveTo = {
                    x: zone.x +
                      zone.width / 2 -
                      this.state.recsLayout[rectangleIndex].width / 2,
                    y: zone.y +
                      zone.height / 2 -
                      this.state.recsLayout[rectangleIndex].height / 2
                  };
                  Animated.spring(this.state.panArr[rectangleIndex], {
                    toValue: { ...moveTo }
                  }).start();
                }
              }
            }, 5);
          } else {
            Animated.spring(this.state.panArr[i], {
              toValue: { ...springTo }
            }).start();
          }

          // () => {
          //   const keys = Object.keys(this.state.dotsLayout);
          //   const key = keys[dotIndex];
          //   const zone = this.state.dotsLayout[key];
          //   springTo.x = zone.x + zone.width / 2 - this.state.recsLayout[i].width / 2;
          //   springTo.y = zone.y + zone.height / 2 - this.state.recsLayout[i].height / 2;
          //
          // }
          // setTimeout(() => {
          //   for (let m = 0; m < keys.length; m++) {
          //     const key = keys[m];
          //     const zone = this.state.dotsLayout[key];
          //     if (
          //       zone.x < gesture.moveX &&
          //       gesture.moveX < zone.x + zone.width &&
          //       zone.y < gesture.moveY &&
          //       gesture.moveY < zone.y + zone.height
          //     ) {
          //       springTo.x = zone.x + zone.width / 2 - this.state.recsLayout[i].width / 2;
          //       springTo.y = zone.y + zone.height / 2 - this.state.recsLayout[i].height / 2;
          //       break;
          //     }
          //   }
          //   Animated.spring(this.state.panArr[i], {
          //     toValue: { ...springTo }
          //   }).start();
          // }, 500);

          // let overlappedIndex = -1;
          // for (let n = 0; n < this.state.panArr.length; n++) {
          //   if (
          //     parseInt(springTo.x, 10) === parseInt(this.state.panArr[n].x._value, 10) &&
          //     parseInt(springTo.y, 10) === parseInt(this.state.panArr[n].y._value, 10)
          //   ) { overlappedIndex = n; }
          // }

          // if (overlappedIndex !== -1) {
          //   Animated.spring(this.state.panArr[overlappedIndex], {
          //     toValue: {
          //       x: this.initialPositionArr[overlappedIndex].x,
          //       y: this.initialPositionArr[overlappedIndex].y
          //     }
          //   }).start();
          // }
          console.log(this.state.panArr);
        }
      });
      this.panResponderArr.push(panResponder);
    }

    // initialize dots width array and flag array
    const dotsWidthArray = this.state.dotsWidthArray;
    const dotsFlagArray = this.state.dotsFlagArray;
    for (let i = 0; i < sentenceArray.length; i++) {
      dotsWidthArray.push('25%');
      dotsFlagArray.push(-1);
    }
    this.setState({ dotsWidthArray, dotsFlagArray });
  };

  updateDotLayout = (event, dotNumber) => {
    console.log('update dot layout');
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
            minWidth: this.state.dotsWidthArray[i]
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
