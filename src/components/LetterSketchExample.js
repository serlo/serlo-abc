import React, { Component } from 'react';
import { View, Button, Alert, PanResponder } from 'react-native';
import Svg, { Circle, Path, Polyline, G } from 'react-native-svg';

export default class SvgExample extends Component {
  constructor() {
    super();
    this.state = {
      points: []
    };

    // TODO: get letter from props
    // TODO: create letter target points generation algorithm if the given way
    // of checking an answer will be fine
    this.letter = [
      [79, 415],
      [78.5, 388],
      [79.5, 351.5],
      [81.5, 324],
      [88, 292],
      [93, 253],
      [103, 214.5],
      [118, 183],
      [140, 165],
      [167, 152.5],
      [201.5, 147.5],
      [228.5, 152.5],
      [252, 182.5],
      [267.5, 220],
      [280, 255.5],
      [286.5, 295],
      [288.5, 335.5],
      [288, 365.5],
      [288.5, 403.5],
      [288.5, 429.5],
      [110, 300.5],
      [139.5, 298.5],
      [168.5, 300.5],
      [201, 300],
      [232, 301.5],
      [264.5, 301]
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
        points[points.length - 1].push([
          gestureState.moveX,
          gestureState.moveY
        ]);
        this.setState({ points });
        // NOTE: it would be better to directly change the component's path
        // value, instead of calling setState every time,
        // but there's some problem with this in the project (haven't figured it out yet)
        // (it can be either the library itself or something to do with expo,
        // but the same example works with the default react-native project):
        // this.path - ref of the component
        // this.path.setNativeProps({ points: this.generatePoints(points) })
      },
      onPanResponderRelease: (evt, gestureState) => {}
    });
  }

  // NOTE: it's better to append new value to given path during movement
  // and keep paths to prevent recalculation every time
  generateTextPoints = path => {
    const textPoints = [];
    for (let i = 0; i < path.length; i++) {
      const point = path[i];
      textPoints.push(point.join(','));
    }
    return textPoints.join(' ');
  };

  // @checkAnswer
  // letter - target points which form letter
  // points - user points [[[x, y], [x, y]]], contains paths, each path contains points
  // minThreshold - min distance between target point and closest user point
  //    to consider target point as "passed"
  // maxThreshold - max distance between any closest user point and target point
  //    to still consider it a part of a letter
  //    (otherwise every letter could be simply painted over with black box)
  // passThreshold - ratio of "passed" points to consider condition as "passed"
  checkAnswer = (letter, points, minThreshold, maxThreshold, passThreshold) => {
    // for each target point find a distance to the closest point
    const targetPassed = []; // array containing result for each target point
    for (let i = 0; i < letter.length; i++) {
      const targetPoint = letter[i];
      let minDistance = minThreshold;
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
      targetPassed.push(minDistance < minThreshold ? 1 : 0);
    }

    // for each user point check that there is a corresponding target point
    // (not too far from initial letter)
    const pointPassed = [];
    for (let i = 0; i < points.length; i++) {
      const path = points[i];
      for (let j = 0; j < path.length; j++) {
        const point = path[j];
        let minDistance = maxThreshold;
        for (let k = 0; k < letter.length; k++) {
          const targetPoint = letter[k];
          const distance = Math.sqrt(
            Math.pow(targetPoint[0] - point[0], 2) +
              Math.pow(targetPoint[1] - point[1], 2)
          );
          if (distance < minDistance) {
            minDistance = distance;
          }
        }
        pointPassed.push(minDistance < maxThreshold ? 1 : 0);
      }
    }

    let arraySum = targetPassed.reduce((a, b) => a + b, 0);
    targetResult = arraySum / targetPassed.length > passThreshold;
    arraySum = pointPassed.reduce((a, b) => a + b, 0);
    pointResult = arraySum / pointPassed.length > passThreshold;
    return targetResult && pointResult;
  };

  render() {
    return (
      <View
        {...this._panResponder.panHandlers}
        style={{ flex: 1, backgroundColor: 'orange', position: 'relative' }}
      >
        <Svg style={{ flex: 1 }}>
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
              <Polyline
                points={this.generateTextPoints(path)}
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
        <Button
          title="Check Answer"
          onPress={() => {
            Alert.alert(
              this.checkAnswer(
                this.letter,
                this.state.points,
                this.minThreshold,
                this.maxThreshold,
                this.passThreshold
              )
                ? 'True'
                : 'False'
            );
          }}
        />
      </View>
    );
  }
}

module.exports = SvgExample;
