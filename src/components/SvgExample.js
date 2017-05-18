import React, { Component } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

export default class SvgExample extends Component {
  constructor() {
    super();
    this.state = {
      svgCircleArray: [],
      previousXDistance: 0,
      previousYDistance: 0
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,

      onPanResponderGrant: (evt, gestureState) => {
        console.log('grant');
        this.renderCircle(gestureState);
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log('move');
        // console.log(gestureState);
        // console.log(gestureState.dx);
        // console.log(gestureState.dy);
        // // this.renderCircle(gestureState);
        // if((gestureState.dx - this.state.previousXDistance) > 50 || (gestureState.dy - this.state.previousYDistance) > 50) {
        //   console.log('meet');
        //   this.state.previousXDistance = gestureState.dx;
        //   this.state.previousYDistance = gestureState.dy;
        //   this.renderCircle(gestureState);
        // }
        const svgCircleArray = this.state.svgCircleArray;
        const circle = (
          <Circle
            cx={gestureState.x0}
            cy={gestureState.y0}
            r="15"
            fill="pink"
          />
        );
        svgCircleArray.push(circle);
        this.setState({ svgCircleArray });
        console.log(this.state.svgCircleArray);
      },
      onPanResponderRelease: (evt, gestureState) => {
        console.log('release');
        this.renderCircle(gestureState);
      }
    });
  }

  renderCircle = gestureState => {
    console.log('render circles');
    const svgCircleArray = this.state.svgCircleArray;
    const circle = (
      <Circle cx={gestureState.x0} cy={gestureState.y0} r="15" fill="pink" />
    );
    svgCircleArray.push(circle);
    this.setState({ svgCircleArray });
    console.log(this.state.svgCircleArray);
  };

  render() {
    return (
      <View
        {...this._panResponder.panHandlers}
        style={{ flex: 1, backgroundColor: 'orange' }}
      >
        <Svg style={{ width: '100%', height: '100%' }}>
          {this.state.svgCircleArray}
        </Svg>
      </View>
    );
  }
}

module.exports = SvgExample;
