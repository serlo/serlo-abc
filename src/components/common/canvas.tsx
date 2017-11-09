// @ts-ignore: TODO: add declaration file
import { MaterialIcons } from '@expo/vector-icons';
// @ts-ignore TODO: add declaration file
import { Constants, Svg } from 'expo';
import * as R from 'ramda';
import * as React from 'react';
import { PanResponder, PanResponderInstance, Text, View } from 'react-native';

import { BLACK_TRANSPARENT, PRIMARY_WEAK } from '../../styles/colors';
import { WithDimensions } from '../helpers/dimensions';
import { RoundIconButton } from './buttons';

export type RawPoint = [number, number];
export type RawPath = RawPoint[];

interface Props {
  strokeWidth: number;
}

interface State {
  paths: RawPath[];
}

export class Canvas extends React.Component<Props, State> {
  public state: State = {
    paths: []
  };

  private panResponder: PanResponderInstance;
  private dx: number = 0;
  private dy: number = 0;

  public componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.setState(({ paths }) => ({
          paths: [
            ...paths,
            [[gestureState.x0 + this.dx, gestureState.y0 + this.dy]]
          ]
        }));
      },
      onPanResponderMove: (evt, gestureState) => {
        this.setState(({ paths }: State) => {
          const lastPath = R.last(paths);
          const point = [
            gestureState.moveX + this.dx,
            gestureState.moveY + this.dy
          ];

          if (lastPath) {
            return {
              paths: [...R.init(paths), [...lastPath, point]]
            };
          }

          return {
            paths: [[point]]
          };
        });
      }
    });
  }

  public render() {
    return (
      <View
        onLayout={event => {
          this.dx = -event.nativeEvent.layout.x;
          this.dy = -event.nativeEvent.layout.y;
        }}
        {...this.panResponder.panHandlers}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: Constants.statusBarHeight
        }}
      >
        <Svg style={{ flex: 1 }}>
          {R.addIndex(R.map)(
            (path, index) => (
              <Svg.G key={`path_${index}`}>
                <Svg.Circle
                  cx={path[0][0]}
                  cy={path[0][1]}
                  r={this.props.strokeWidth / 2}
                  fill={PRIMARY_WEAK}
                />
                <Svg.Polyline
                  points={this.generateTextPoints(path)}
                  fill="none"
                  stroke={PRIMARY_WEAK}
                  strokeLinejoin="round"
                  strokeWidth={this.props.strokeWidth}
                />
                <Svg.Circle
                  cx={path[path.length - 1][0]}
                  cy={path[path.length - 1][1]}
                  r={this.props.strokeWidth / 2}
                  fill={PRIMARY_WEAK}
                />
              </Svg.G>
            ),
            this.state.paths
          )}
        </Svg>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            position: 'absolute',
            bottom: 15 + Constants.statusBarHeight
          }}
        >
          <RoundIconButton
            onPress={() => {
              this.setState({ paths: [] });
            }}
            disabled={R.isEmpty(this.state.paths)}
            IconComponent={MaterialIcons}
            name="clear"
            size={30}
          />
        </View>
      </View>
    );
  }

  private generateTextPoints(path: RawPath) {
    return R.map(point => point.join(','), path).join(' ');
  }
}

export const TextCanvas = ({ text }: { text: string }) => (
  <WithDimensions
    render={({ height }) => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{
            color: BLACK_TRANSPARENT,
            fontSize: height / 2,
            fontFamily: 'norddruck_arrows'
          }}
        >
          {text}
        </Text>
        <Canvas strokeWidth={height / 20} />
      </View>
    )}
  />
);
