import React, { Component } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';
import Svg, { Circle, Path, G } from 'react-native-svg';

export default class SvgExample extends Component {
  constructor() {
    super();
    this.state = {
      points: [],
    };

    // TODO: get letter from props
    // TODO: create letter target points generation algorithm
    this.letter = [
      [79,415],
      [78.5,388],
      [79.5,351.5],
      [81.5,324],
      [88,292],
      [93,253],
      [103,214.5],
      [118,183],
      [140,165],
      [167,152.5],
      [201.5,147.5],
      [228.5,152.5],
      [252,182.5],
      [267.5,220],
      [280,255.5],
      [286.5,295],
      [288.5,335.5],
      [288,365.5],
      [288.5,403.5],
      [288.5,429.5],
      [110,300.5],
      [139.5,298.5],
      [168.5,300.5],
      [201,300],
      [232,301.5],
      [264.5,301],
    ];

    // settings
    // NOTE: these are values in pixels, make it depend on the phone resolution?
    this.strokeWidth = 30;
    this.minThreshold = 20;
    this.maxThreshold = 20;
    this.passThreshold = 0.8;
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        const points = this.state.points;
        points.push([]);
        points[points.length - 1].push([gestureState.x0, gestureState.y0]);
        this.setState({ points });
      },
      onPanResponderMove: (evt, gestureState) => {
        const points = this.state.points;
        points[points.length - 1].push([gestureState.moveX, gestureState.moveY]);
        this.setState({ points });
      },
      onPanResponderRelease: (evt, gestureState) => {
        const points = this.state.points;
      }
    });
  }

  generatePath = (points) => {
    let path = '';
    for (let i = 0; i < points.length; i++) {
        const prefix = (i == 0) ? 'M' : 'L';
        path += `${prefix}${points[i][0]} ${points[i][1]} `;
    }
    return path;
  }

  checkAnswer = (points) => {
    // for each target point find a distance to the closest point
    const targetPassed = []; // array containing result for each target point
    for (let i = 0; i < this.letter.length; i++) {
      const targetPoint = this.letter[i];
      let minDistance = this.minThreshold;
      for (let j = 0; j < points.length; j++) {
        const path = points[j];
        for (let k = 0; k < path.length; k++) {
          const point = path[k];
          const distance = Math.sqrt(
              Math.pow(targetPoint[0] - point[0], 2) +
              Math.pow(targetPoint[1] - point[1], 2)
          );
          if (distance < minDistance) {
            minDistance = distance;
          }
        }
      }
      targetPassed.push(minDistance < this.minThreshold ? 1 : 0);
    }

    // for each user point check that there is a corresponding target point
    // (not too far from initial letter)
    const pointPassed = [];
    for (let i = 0; i < points.length; i++) {
      const path = points[i];
      for (let j = 0; j < path.length; j++) {
        const point = path[j];
        let minDistance = this.maxThreshold;
        for (let k = 0; k < this.letter.length; k++) {
          const targetPoint = this.letter[k];
          const distance = Math.sqrt(
            Math.pow(targetPoint[0] - point[0], 2) +
            Math.pow(targetPoint[1] - point[1], 2)
          );
          if (distance < minDistance) {
            minDistance = distance;
          }
        }
        pointPassed.push(minDistance < this.maxThreshold ? 1 : 0);
      }
    }

    targetResult = targetPassed.reduce((a, b) => a + b, 0) / targetPassed.length > this.passThreshold;
    pointResult = pointPassed.reduce((a, b) => a + b, 0) / pointPassed.length > this.passThreshold;
    return (targetResult && pointResult);
  }

  render() {
    return (
      <View
        {...this._panResponder.panHandlers}
        style={{ flex: 1, backgroundColor: 'orange' }}
      >
        <Svg style={{ width: '100%', height: '100%' }}>
          {this.letter.map((point, index) => (
            <Circle
              key={`target_point_${index}`}
              cx={point[0]}
              cy={point[1]}
              r={this.strokeWidth / 5}
              fill="red"
            />
          ))}
          {this.state.points.map((path, index) => (
            <G key={`path_${index}`}>
              <Circle
                cx={path[0][0]}
                cy={path[0][1]}
                r={this.strokeWidth / 2}
                fill="black"
              />
              <Path
                d={this.generatePath(path)}
                fill="none"
                stroke="black"
                strokeLinejoin="round"
                strokeWidth={this.strokeWidth}
              />
              <Circle
                cx={path[path.length - 1][0]}
                cy={path[path.length - 1][1]}
                r={this.strokeWidth / 2}
                fill="black"
              />
            </G>
          ))}
        </Svg>
      </View>
    );
  }
}

module.exports = SvgExample;
