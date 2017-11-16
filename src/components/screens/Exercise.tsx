// @ts-ignore: TODO: add declaration file
import { Entypo } from '@expo/vector-icons';
// @ts-ignore: TODO: add declaration file
import { Constants } from 'expo';
import { identity, is, merge } from 'ramda';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
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

interface IProps<Props, State, Feedback> {
  exercise: AbstractExercise<Props, State, Feedback>;
  Component: React.ComponentType<{
    showFeedback: boolean;
    feedback: Feedback;
    state: State;
    setState: (state: State) => void;
  }>;
  submitted?: State;
  goToNav: () => void;
  onCorrect: () => void;
  onWrong: () => void;
}

interface IState<State, Feedback> {
  state: State;
  feedback: Feedback;
  isCorrect: boolean;
  showFeedback: boolean;
  submitted: boolean;
}

const styles = StyleSheet.create({
  hoveringButton: {
    position: 'absolute'
  },
  top: {
    top: Constants.statusBarHeight + 15
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

class Exercise<Props, State, Feedback> extends React.Component<
  IProps<Props, State, Feedback>,
  IState<State, Feedback>
> {
  public exercise: any;
  public submitButton: any;

  constructor(props: IProps<Props, State, Feedback>) {
    super(props);

    const { exercise } = props;
    const state = exercise.getInitialState();

    this.state = {
      state,
      feedback: exercise.getFeedback(state),
      isCorrect: exercise.initiallyCorrect && exercise.isCorrect(state),
      showFeedback: false,
      submitted: false
    };
  }

  public componentDidMount() {
    const { submitted } = this.props;

    if (typeof submitted !== 'undefined') {
      this.setState({ state: submitted }, () => {
        this.handleSubmit();
      });
    }
  }

  public getMeasuresAsync() {
    if (this.exercise) {
      return this.exercise.getMeasuresAsync();
    }
  }

  public render() {
    const { exercise, Component } = this.props;
    const { feedback, isCorrect, state, showFeedback } = this.state;

    const Container = exercise.enableSubmitBySwipe ? GestureRecognizer : View;
    const containerProps = {
      onSwipeLeft:
        exercise.enableSubmitBySwipe &&
        (() => {
          if (!exercise.isSubmitDisabled(state)) {
            this.handleSubmit();
          }
        }),
      config: exercise.enableSubmitBySwipe && {
        directionalOffsetThreshold: 160
      },
      style: { flex: 1, backgroundColor: isCorrect ? GREEN : PRIMARY }
    };

    return (
      <Container {...containerProps}>
        <Component
          ref={ref => (this.exercise = ref)}
          {...exercise.props}
          showFeedback={showFeedback}
          feedback={feedback}
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
            ref={ref => (this.submitButton = ref)}
            onPress={this.handleSubmit}
            IconComponent={Entypo}
            name="chevron-right"
            size={25}
            disabled={exercise.isSubmitDisabled(state)}
          />
        </View>
      </Container>
    );
  }

  private handleSubmit = (): void => {
    const { exercise, onCorrect, onWrong } = this.props;
    const { state } = this.state;

    const isCorrect = exercise.isCorrect(state);
    const feedback = exercise.getFeedback(state);

    isCorrect ? onCorrect() : onWrong();

    this.setState({
      isCorrect,
      feedback,
      showFeedback: !isCorrect,
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
      showFeedback: false,
      state: apply(state)(
        typeof newState === 'function' ? newState(state) : newState
      )
    }));
  };
}

export default Exercise;
