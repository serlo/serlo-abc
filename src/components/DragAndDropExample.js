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
import { RoundText } from './Components';

const CIRCLE_RADIUS = 36;
const DOT_RADIUS = 5;
const Window = Dimensions.get('window');

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#1abc9c',
    margin: 5,
    borderWidth: 1
  },
  dot: {
    backgroundColor: 'white',
    width: DOT_RADIUS * 2,
    height: DOT_RADIUS * 2,
    borderRadius: DOT_RADIUS
  }
});

// NOTE: RoundText doesn't work well with StyleSheet (calling path on props)
const textStyle = {
  margin: 5,
  textAlign: 'center',
  color: '#fff',
  fontSize: 20
};

const sentence =
  'conveying a statement, question, exclamation, or command, and consisting of a main clause';

export default class DragAndDropExample extends React.Component {
  constructor(props) {
    super(props);
    // TODO: take sentence from props laterm, reinit these values on prop change
    // initialize pan and initialPosition for all words (items)
    const wordArray = sentence.split(' ');
    const panArray = [];
    this.initialPositions = [];
    this.panResponders = [];
    this.zoneLayouts = [];
    this.itemLayouts = [];
    for (let i = 0; i < wordArray.length; i++) {
      panArray.push(null);
      this.initialPositions.push(null);
      this.panResponders.push(null);
      this.zoneLayouts.push(null);
      this.itemLayouts.push(null);
    }

    this.state = {
      pan: panArray
    };
  }

  initPanResponder = index => {
    this.panResponders[index] = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan[index].setOffset({
          x: this.state.pan[index].x._value,
          y: this.state.pan[index].y._value
        });
        this.state.pan[index].setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan[index].x,
          dy: this.state.pan[index].y
        }
      ]),
      onPanResponderRelease: (e, gesture) => {
        this.state.pan[index].flattenOffset();
        const keys = Object.keys(this.zoneLayouts);
        const springTo = {
          x: this.initialPositions[index].x,
          y: this.initialPositions[index].y
        };
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const zone = this.zoneLayouts[key];
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
        Animated.spring(this.state.pan[index], {
          toValue: { ...springTo }
        }).start();
      }
    });
  };

  updateZoneLayout = (event, index) => {
    this.zoneLayouts[index] = event.nativeEvent.layout;
  };

  renderZones = n => {
    const zones = [];
    for (let i = 0; i < n; i++) {
      zones.push(
        <View
          key={`zone_${i}`}
          onLayout={e => this.updateZoneLayout(e, i)}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 60
          }}
        >
          <View style={styles.dot} />
        </View>
      );
    }
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: 'orange'
        }}
      >
        {zones}
      </View>
    );
  };

  updateItemLayouts = (event, index) => {
    const layout = event.nativeEvent.layout;
    this.itemLayouts[index] = layout;
    this.initialPositions[index] = { x: layout.x, y: layout.y };
    this.state.pan[index] = new Animated.ValueXY(this.initialPositions[index]);
    this.initPanResponder(index);
    this.setState({ pan: this.state.pan });
  };

  renderDraggable = sentence => {
    // the idea is to place objects first on the screen using html (flex grid
    // here, for example), and only then make it interactable
    // and initialize the coordinates
    const wordArray = sentence.split(' ');
    const allItemsInitialized = this.state.pan.reduce(
      (acc, val) => acc && val !== null,
      true
    );

    // if all items are initialized -> move container to top
    let containerStyle = { position: 'absolute' };
    if (!allItemsInitialized) {
      containerStyle = {
        ...containerStyle,
        width: '100%',
        paddingTop: Window.height / 2,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
      };
    }

    // initialize items params
    const itemStyle = [];
    const itemPanHandlers = [];
    const itemOnLayout = [];
    for (let i = 0; i < wordArray.length; i++) {
      if (allItemsInitialized) {
        itemPanHandlers.push(this.panResponders[i].panHandlers);
        itemOnLayout.push(() => {});
        itemStyle.push([
          this.state.pan[i].getLayout(),
          { position: 'absolute' }
        ]);
      } else {
        itemPanHandlers.push({});
        itemOnLayout.push(e => this.updateItemLayouts(e, i));
        itemStyle.push({});
      }
    }

    return (
      <View style={containerStyle}>
        {wordArray.map((word, index) => (
          <Animated.View
            key={`word_${index}`}
            {...itemPanHandlers[index]}
            style={itemStyle[index]}
            onLayout={itemOnLayout[index]}
          >
            <RoundText
              text={word}
              textStyle={textStyle}
              style={styles.textContainer}
            />
          </Animated.View>
        ))}
      </View>
    );
  };

  render() {
    const wordCount = sentence.split(' ').length;
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        {this.renderZones(wordCount)}
        {this.renderDraggable(sentence)}
      </View>
    );
  }
}
