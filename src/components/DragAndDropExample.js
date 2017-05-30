import React from 'react';
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Dimensions
} from 'react-native';
import { RoundText } from './Components';

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
    // TODO: take sentence from props later, reinit these values on prop change
    // NOTE: there is a number of arrays, every item (word) represented there
    // by index (so all arrays are connected by index), maybe it won't be
    // a bad idea to create one array of objects with parameters instead

    // initialize arrays for all words (items)
    this.wordCount = sentence.split(' ').length;
    this.initialPositions = Array(this.wordCount);
    this.panResponders = Array(this.wordCount);
    this.zoneLayouts = Array(this.wordCount);
    this.itemLayouts = Array(this.wordCount);
    const panArray = [];
    const itemLinkedZoneArray = [];
    for (let i = 0; i < this.wordCount; i++) {
      panArray.push(null);
      itemLinkedZoneArray.push(-1);
    }

    this.state = {
      pan: panArray,
      itemLinkedZone: itemLinkedZoneArray
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
        const springTo = {
          x: this.initialPositions[index].x,
          y: this.initialPositions[index].y
        };
        const itemLinkedZone = this.state.itemLinkedZone;
        let linkedZoneFound = false;
        for (let i = 0; i < this.zoneLayouts.length; i++) {
          const zone = this.zoneLayouts[i];
          if (
            zone.x < gesture.moveX &&
            gesture.moveX < zone.x + zone.width &&
            zone.y < gesture.moveY &&
            gesture.moveY < zone.y + zone.height
          ) {
            springTo.x =
              zone.x + zone.width / 2 - this.itemLayouts[index].width / 2;
            springTo.y =
              zone.y + zone.height / 2 - this.itemLayouts[index].height / 2;
            linkedZoneFound = true;
            secondItemInZone = this.state.itemLinkedZone.indexOf(i);
            if (secondItemInZone >= 0) {
              itemLinkedZone[secondItemInZone] = itemLinkedZone[index];
              if (itemLinkedZone[index] === -1) {
                Animated.spring(this.state.pan[secondItemInZone], {
                  toValue: {
                    x: this.initialPositions[secondItemInZone].x,
                    y: this.initialPositions[secondItemInZone].y
                  }
                }).start();
              }
            }
            itemLinkedZone[index] = i;
            this.setState({ itemLinkedZone });
            break;
          }
        }
        if (!linkedZoneFound) {
          itemLinkedZone[index] = -1;
          this.setState({ itemLinkedZone });
        }
        Animated.spring(this.state.pan[index], {
          toValue: { ...springTo }
        }).start();
      }
    });
  };

  updateZoneLayout = (event, index) => {
    const layout = event.nativeEvent.layout;
    this.zoneLayouts[index] = layout;
    const itemIndex = this.state.itemLinkedZone.indexOf(index);
    if (itemIndex >= 0) {
      const springTo = {
        x: layout.x + layout.width / 2 - this.itemLayouts[itemIndex].width / 2,
        y: layout.y + layout.height / 2 - this.itemLayouts[itemIndex].height / 2
      };
      Animated.spring(this.state.pan[itemIndex], {
        toValue: { ...springTo }
      }).start();
    }
  };

  renderZones = n => {
    const zones = [];
    for (let i = 0; i < n; i++) {
      const itemIndex = this.state.itemLinkedZone.indexOf(i);
      zones.push(
        <View
          key={`zone_${i}`}
          onLayout={e => this.updateZoneLayout(e, i)}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: itemIndex >= 0 ? this.itemLayouts[itemIndex].width : 50,
            height: 70
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
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        {this.renderZones(this.wordCount)}
        {this.renderDraggable(sentence)}
      </View>
    );
  }
}
