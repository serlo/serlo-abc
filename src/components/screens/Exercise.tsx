// @ts-ignore: TODO: add declaration file
import { Entypo } from '@expo/vector-icons';
import { identity, is, merge } from 'ramda';
import * as React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
// @ts-ignore: TODO: add declaration file
import GestureRecognizer from 'react-native-swipe-gestures';

import AbstractExercise from '../../../packages/entities/exercises/AbstractExercise';
// @ts-ignore: TODO: migrate to TypeScript
import { play } from '../../helpers/audio';
import { GREEN, PRIMARY } from '../../styles/colors';
// @ts-ignore: TODO: migrate to TypeScript
import { RoundIconButton } from '../common/buttons';
// @ts-ignore: TODO: migrate to TypeScript
import { LoadSounds } from '../helpers/Audio';

interface IProps<Props, State> {
  exercise: AbstractExercise<Props, State>;
  Component: React.ComponentType<{
    showFeedback: boolean;
    state: State;
    setState: (state: State) => void;
  }>;
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
        onSwipeLeft={() => {
          if (!exercise.isSubmitDisabled(state)) {
            this.submit();
          }
        }}
        config={{ directionalOffsetThreshold: 160 }}
        style={{ flex: 1, backgroundColor: isCorrect ? GREEN : PRIMARY }}
      >
        <Component
          {...exercise.props}
          showFeedback={submitted && !isCorrect}
          state={state}
          setState={this.updateState}
        />
        <View style={[styles.hoveringButton, styles.top, styles.left]}>
          <RoundIconButton
            onPress={this.props.goToNav}
            IconComponent={Entypo}
            name="menu"
            size={25}
          />
        </View>
        <View style={[styles.hoveringButton, styles.top, styles.right]}>
          <RoundIconButton
            onPress={this.submit}
            IconComponent={Entypo}
            name="chevron-right"
            size={25}
            disabled={exercise.isSubmitDisabled(state)}
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
    const isObject = (val: State) => typeof val === 'object' && !is(Array, val);

    const apply = (oldState: State): ((newState: State) => State) =>
      isObject(oldState) ? merge(oldState) : identity;

    this.setState(({ state }) => ({
      state: apply(state)(
        typeof newState === 'function' ? newState(state) : newState
      )
    }));
  };
}

export default Exercise;
