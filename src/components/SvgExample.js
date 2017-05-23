import React, { Component } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

export default class SvgExample extends Component {
  constructor() {
    super();
    this.state = {
      // svgCircleArray: [],
      svgLineArray: []
    };
    this.oldCoordX = 0;
    this.oldCoordY = 0;
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderGrant: (evt, gestureState) => {
        console.log('grant', gestureState);
        this.oldCoordX = gestureState.x0;
        this.oldCoordY = gestureState.y0;
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log('move');
        if (
          Math.abs(gestureState.moveX - this.oldCoordX) > 20 ||
          Math.abs(gestureState.moveY - this.oldCoordY) > 20
        ) {
          this.renderLine(gestureState);
          this.oldCoordX = gestureState.moveX;
          this.oldCoordY = gestureState.moveY;
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        console.log('release', gestureState);
      }
    });
  }

  renderLine = gestureState => {
    const svgLineArray = this.state.svgLineArray;
    const line = (
      <Line
        x1={this.oldCoordX}
        y1={this.oldCoordY}
        x2={gestureState.moveX}
        y2={gestureState.moveY}
        stroke="pink"
        strokeWidth="20"
      />
    );
    svgLineArray.push(line);
    this.setState({ svgLineArray });
  };

  // renderCircle = (type, gestureState) => {
  //   console.log('render circles');
  //   console.log(gestureState);
  //   let coordX;
  //   let coordY;
  //   switch (type) {
  //     case 'grant':
  //       coordX = gestureState.x0;
  //       coordY = gestureState.y0;
  //       break;
  //     case 'release':
  //       coordX = gestureState.moveX;
  //       coordY = gestureState.moveY;
  //       break;
  //     case 'move':
  //       coordX = gestureState.moveX;
  //       coordY = gestureState.moveY;
  //       break;
  //     default:
  //       break;
  //   }
  //   const svgCircleArray = this.state.svgCircleArray;
  //   const circle = (
  //     <Circle cx={coordX} cy={coordY} r="15" fill="pink" />
  //   );
  //   svgCircleArray.push(circle);
  //   this.setState({ svgCircleArray });
  //   console.log(this.state.svgCircleArray);
  // };

  render() {
    return (
      <View
        {...this._panResponder.panHandlers}
        style={{ flex: 1, backgroundColor: 'orange' }}
      >
        <Svg style={{ width: '100%', height: '100%' }}>
          {this.state.svgCircleArray}
          {this.state.svgLineArray}
        </Svg>
      </View>
    );
  }
}

module.exports = SvgExample;
