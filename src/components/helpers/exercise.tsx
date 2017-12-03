// @ts-ignore: TODO: add declaration file
import { Entypo } from '@expo/vector-icons';
// @ts-ignore: TODO: add declaration file
import { Constants } from 'expo';
import { identity, is, merge } from 'ramda';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
// @ts-ignore: TODO: add declaration file
import GestureRecognizer from 'react-native-swipe-gestures';

import { AbstractExercise } from '../../../packages/entities';
// @ts-ignore: TODO: migrate to TypeScript
import { play } from '../../helpers/audio';
import { GREEN, PRIMARY } from '../../styles/colors';
// @ts-ignore: TODO: migrate to TypeScript
import { RoundIconButton } from '../common/buttons';
// @ts-ignore: TODO: migrate to TypeScript
import { LoadSounds } from '../helpers/Audio';

interface ExerciseProps {
  /* tslint:disable-next-line:no-any */
  exercise: AbstractExercise<any, any, any>;
  enableSubmitBySwipe: boolean;
  Component: React.ComponentType;
  // submitted?: boolean;
  goToNav: () => void;
  /* tslint:disable-next-line:no-any */
  onSubmit: (state: any) => void;
  // onCorrect: () => void;
  // onWrong: () => void;
}

interface ExerciseState {
  /* tslint:disable-next-line:no-any */
  state: any;
  /* tslint:disable-next-line:no-any */
  feedback: any;
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

export class Exercise extends React.Component<ExerciseProps, ExerciseState> {
  constructor(props: ExerciseProps) {
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

  public render() {
    const { enableSubmitBySwipe, exercise, Component } = this.props;
    const { feedback, isCorrect, state, showFeedback } = this.state;

    const Container = enableSubmitBySwipe ? GestureRecognizer : View;
    const containerProps = {
      onSwipeLeft:
        enableSubmitBySwipe &&
        (() => {
          if (!exercise.isSubmitDisabled(state)) {
            this.submit();
          }
        }),
      config: enableSubmitBySwipe && {
        directionalOffsetThreshold: 160
      },
      style: { flex: 1, backgroundColor: isCorrect ? GREEN : PRIMARY }
    };

    return (
      <Container {...containerProps}>
        <Component
          {...exercise.props}
          showFeedback={showFeedback}
          feedback={feedback}
          state={state}
          setState={this.updateState}
          submit={this.submit}
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
      </Container>
    );
  }

  private submit = (): void => {
    const { exercise } = this.props;
    const { state } = this.state;

    const isCorrect = exercise.isCorrect(state);
    const feedback = exercise.getFeedback(state);

    this.setState({
      feedback,
      isCorrect,
      showFeedback: !isCorrect,
      submitted: true
    });

    this.props.onSubmit(state);
  };

  private updateState = (
    /* tslint:disable-next-line:no-any */
    newState: any | ((oldState: any) => any)
  ): void => {
    /* tslint:disable-next-line:no-any */
    const isObject = (val: any) => typeof val === 'object' && !is(Array, val);

    /* tslint:disable-next-line:no-any */
    const apply = (oldState: any): ((newState: any) => any) =>
      isObject(oldState) ? merge(oldState) : identity;

    this.setState(({ state }) => ({
      showFeedback: false,
      state: apply(state)(
        typeof newState === 'function' ? newState(state) : newState
      )
    }));
  };
}
