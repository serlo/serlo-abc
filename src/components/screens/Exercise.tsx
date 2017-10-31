// @ts-ignore: TODO: add declaration file
import { Entypo } from '@expo/vector-icons';
import * as React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
// @ts-ignore: TODO: add declaration file
import GestureRecognizer from 'react-native-swipe-gestures';

import AbstractExercise from '../../../packages/entities/exercises/AbstractExercise';
// @ts-ignore: TODO: migrate to TypeScript
import { play } from '../../helpers/audio';
import { GREEN, PRIMARY } from '../../styles/colors';
// @ts-ignore: TODO: migrate to TypeScript
import RoundButton from '../common/RoundButton';
// @ts-ignore: TODO: migrate to TypeScript
import { LoadSounds } from '../helpers/Audio';

interface IProps<Props, State> {
  exercise: AbstractExercise<Props, State>;
  // TODO: specify type
  Component: any;
  submitted?: State;
  goToNav: () => void;
  onCorrect: () => void;
  onWrong: () => void;
}

interface IState<State> {
  state: State;
  isCorrect: boolean;
  submitted: boolean;
}

const styles = StyleSheet.create({
  hoveringButton: {
    position: 'absolute'
  },
  top: {
    top: (StatusBar.currentHeight || 20) + 15
  },
  bottom: {
    bottom: 15
  },
  left: {
    left: 15
  },
  right: {
    right: 15
  }
});

class Exercise<Props, State> extends React.Component<
  IProps<Props, State>,
  IState<State>
> {
  constructor(props: IProps<Props, State>) {
    super(props);

    const { exercise } = props;
    const state = exercise.getInitialState();

    this.state = {
      state,
      isCorrect: exercise.isCorrect(state),
      submitted: false
    };
  }

  public componentDidMount() {
    const { submitted } = this.props;

    if (typeof submitted !== 'undefined') {
      this.setState({ state: submitted }, () => {
        this.submit();
      });
    }
  }

  public render() {
    const { exercise, Component } = this.props;
    const { isCorrect, state, submitted } = this.state;

    return (
      <GestureRecognizer
        onSwipeLeft={() => this.submit()}
        config={{ directionalOffsetThreshold: 160 }}
        style={{ flex: 1, backgroundColor: isCorrect ? GREEN : PRIMARY }}
      >
        <Component
          showFeedback={submitted && !isCorrect}
          {...exercise.getProps()}
          state={state}
          setState={this.updateState}
        />
        <View style={[styles.hoveringButton, styles.top, styles.left]}>
          <RoundButton
            onPress={this.props.goToNav}
            IconComponent={Entypo}
            name="menu"
            size={25}
          />
        </View>
        <View style={[styles.hoveringButton, styles.top, styles.right]}>
          <RoundButton
            onPress={this.submit}
            IconComponent={Entypo}
            name="chevron-right"
            size={25}
          />
        </View>
      </GestureRecognizer>
    );
  }

  private submit = (): void => {
    const { exercise, onCorrect, onWrong } = this.props;
    const { state } = this.state;

    const isCorrect = exercise.isCorrect(state);

    isCorrect ? onCorrect() : onWrong();

    this.setState({
      isCorrect: exercise.isCorrect(state),
      submitted: true
    });
  };

  private updateState = (
    newState: State | ((oldState: State) => State)
  ): void => {
    if (typeof newState === 'function') {
      this.setState(({ state }) => ({ state: newState(state) }));
      return;
    }

    this.setState({ state: newState });
  };
}

export default Exercise;
