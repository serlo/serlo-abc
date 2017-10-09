import React from 'react';
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Dimensions
} from 'react-native';

import {
  PRIMARY,
  PRIMARY_WEAK,
  WHITE,
  BLACK_TRANSPARENT
} from '../../styles/colors';
import RoundText from '../common/RoundText';

const DOT_RADIUS = 5;
const Window = Dimensions.get('window');

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: PRIMARY_WEAK,
    margin: 5,
    shadowColor: BLACK_TRANSPARENT,
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 4,
      width: 4
    }
  },
  dot: {
    backgroundColor: WHITE,
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

export default class BuildSentence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movingItem: -1,
      items: this.initItems(props.sentence),
      zones: this.initZones(props.sentence)
    };
    this.itemsReady = false;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.sentence !== nextProps.sentence) {
      this.setState({
        movingItem: -1,
        items: this.initItems(nextProps.sentence),
        zones: this.initZones(nextProps.sentence)
      });
      this.itemsReady = false;
    }
  }

  initItems = sentence => {
    const items = [];
    for (let i = 0; i < sentence.length; i++) {
      items.push({
        id: i,
        word: sentence[i],
        layout: null,
        position: null,
        pan: null,
        panResponder: null
      });
    }

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.props = {
        onLayout: event => this.updateItemLayouts(event, item)
      };
    }

    return items;
  };

  initItemsProps = () => {
    for (let i = 0; i < this.state.items.length; i++) {
      const item = this.state.items[i];
      item.props = {
        ...item.panResponder.panHandlers,
        style: [item.pan.getLayout(), { position: 'absolute' }]
      };
    }
  };

  initZones = sentence => {
    const zones = [];
    for (let i = 0; i < sentence.length; i++) {
      zones.push({
        id: i,
        layout: null,
        item: -1
      });
    }
    return zones;
  };

  initPanResponders = () => {
    for (let m = 0; m < this.state.items.length; m++) {
      const item = this.state.items[m];
      item.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        // eslint-disable-next-line handle-callback-err
        onPanResponderGrant: (e, gestureState) => {
          this.setState({ movingItem: item.id });
          item.pan.setOffset({
            x: item.pan.x._value,
            y: item.pan.y._value
          });
          item.pan.setValue({ x: 0, y: 0 });
        },
        onPanResponderMove: Animated.event([
          null,
          { dx: item.pan.x, dy: item.pan.y }
        ]),
        // eslint-disable-next-line handle-callback-err
        onPanResponderRelease: (e, gesture) => {
          item.pan.flattenOffset();
          const springTo = { ...item.position };
          let zoneFound = false;
          for (let i = 0; i < this.state.zones.length; i++) {
            const zone = this.state.zones[i];
            const paddingTop = this.props.paddingTop + 20;
            if (
              zone.layout.x < gesture.moveX &&
              gesture.moveX < zone.layout.x + zone.layout.width &&
              zone.layout.y - paddingTop < gesture.moveY &&
              gesture.moveY - paddingTop < zone.layout.y + zone.layout.height
            ) {
              zoneFound = true;
              springTo.x =
                zone.layout.x + zone.layout.width / 2 - item.layout.width / 2;
              springTo.y =
                zone.layout.y + zone.layout.height / 2 - item.layout.height / 2;

              // check if some other zone contains current item and in this
              // case swap items in zone and second zone
              let secondZoneFound = false;
              for (let j = 0; j < this.state.zones.length; j++) {
                const secondZone = this.state.zones[j];
                if (secondZone.item === item.id) {
                  secondZoneFound = true;
                  secondZone.item = zone.item;
                  break;
                }
              }
              // if second zone wasn't found but there's some item in found zone
              // we need to put this item back to initial position
              if (zone.item >= 0 && !secondZoneFound) {
                const secondItem = this.state.items[zone.item];
                Animated.spring(secondItem.pan, {
                  toValue: { ...secondItem.position }
                }).start();
              }
              zone.item = item.id;

              const answer = this.state.zones
                .map(zone => {
                  if (zone.item >= 0) return this.state.items[zone.item].word;
                })
                .join(' ');
              this.props.changeAnswer(answer);
              break;
            }
          }

          if (!zoneFound) {
            for (let j = 0; j < this.state.zones.length; j++) {
              const zone = this.state.zones[j];
              if (zone.item === item.id) {
                zone.item = -1;
                break;
              }
            }
          }
          Animated.spring(item.pan, { toValue: { ...springTo } }).start();
          this.setState({ movingItem: -1 });
        }
      });
    }
  };

  updateZoneLayout = (event, zone) => {
    const layout = event.nativeEvent.layout;
    zone.layout = layout;
    if (zone.item >= 0) {
      const item = this.state.items[zone.item];
      const springTo = {
        x: layout.x + layout.width / 2 - item.layout.width / 2,
        y: layout.y + layout.height / 2 - item.layout.height / 2
      };
      Animated.spring(item.pan, { toValue: { ...springTo } }).start();
    }
  };

  renderZones = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {this.state.zones.map(zone => {
          let width = 50;
          if (zone.item >= 0) {
            const item = this.state.items[zone.item];
            width = item.layout.width;
          }
          return (
            <View
              key={zone.id}
              onLayout={event => this.updateZoneLayout(event, zone)}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 70,
                width
              }}
            >
              <View style={styles.dot} />
            </View>
          );
        })}
      </View>
    );
  };

  updateItemLayouts = (event, item) => {
    const layout = event.nativeEvent.layout;
    item.layout = layout;
    item.position = { x: layout.x, y: layout.y };
    item.pan = new Animated.ValueXY(item.position);

    // check if we know layouts of all items
    this.itemsReady = this.state.items.reduce(
      (acc, item) => acc && item.pan !== null,
      true
    );
    // when all items are ready - we can initialize drag and drop
    // functionality, after that layout is not updated anymore.
    if (this.itemsReady) {
      this.initPanResponders();
      this.initItemsProps();
    }
    this.setState({ items: this.state.items });
  };

  renderItems = () => {
    // the idea is to place objects first on the screen using html (flex grid
    // here, for example), and only then make it interactable
    // and initialize the coordinates

    // if all items are initialized -> move container to the top
    // (to use as a relative object for items)
    let containerStyle = { position: 'absolute', top: 0, left: 0 };
    if (!this.itemsReady) {
      containerStyle = {
        ...containerStyle,
        width: Window.width,
        paddingTop: this.props.paddingTop,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
      };
    }

    return (
      <View style={containerStyle}>
        {this.state.items.map(item => (
          <Animated.View key={item.id} {...item.props}>
            <RoundText
              text={item.word}
              textStyle={textStyle}
              style={styles.textContainer}
            />
          </Animated.View>
        ))}

        {/*
          A bit of a hack here to keep moving item on top of the others (we
          basically render in one more time after all other items),
          dynamically changing zIndex of the items didn't work,
          will try to check what else can be done as a better solution
        */}
        {this.state.movingItem !== -1 ? (
          <Animated.View
            style={this.state.items[this.state.movingItem].props.style}
          >
            <RoundText
              text={this.state.items[this.state.movingItem].word}
              textStyle={textStyle}
              style={styles.textContainer}
            />
          </Animated.View>
        ) : null}
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: PRIMARY }}>
        {this.renderZones()}
        {this.renderItems()}
      </View>
    );
  }
}
