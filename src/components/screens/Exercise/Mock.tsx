import * as React from 'react';
import { Button, View } from 'react-native';

import AbstractExercise from '../../../exercises/AbstractExercise';
import { GREEN, PRIMARY, WHITE } from '../../../styles/colors';

interface IProps<Props, State> {
  exercise: AbstractExercise<Props, State>;
  Component: any; // TODO:
  submitted?: State;
}

interface IState<Props, State> {
  state: State;
  isCorrect: boolean;
  submitted: boolean;
}

class MockExercise<Props, State> extends React.Component<
  IProps<Props, State>,
  IState<Props, State>
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

    if (submitted) {
      this.setState({ state: submitted }, () => {
        this.submit();
      });
    }
  }

  public render() {
    const { exercise, Component } = this.props;
    const { isCorrect, state, submitted } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: isCorrect ? GREEN : PRIMARY }}>
        <Component
          showFeedback={submitted && !isCorrect}
          {...exercise.getProps()}
          state={state}
          setState={(newState: State) => this.setState({ state: newState })}
        />
        <Button onPress={this.submit} title="Submit" color={WHITE} />
      </View>
    );
  }

  private submit = (): void => {
    const { exercise } = this.props;
    const { state } = this.state;

    this.setState({
      isCorrect: exercise.isCorrect(state),
      submitted: true
    });
  };
}

export default MockExercise;
