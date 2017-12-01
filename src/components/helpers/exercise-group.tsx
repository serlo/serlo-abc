import * as R from 'ramda';
import * as React from 'react';
import { Exercise } from './exercise';

export class ExerciseGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.getStateFromGroup(),
      count: 0
    };
  }

  getStateFromGroup() {
    const lastExercise = R.pathOr(null, ['state', 'exercise'], this);
    const exercise = this.props.group.getCurrentExercise();

    return {
      exercise,
      exercises: this.props.group.getRemainingExercises(),
      count:
        R.pathOr(0, ['state', 'count'], this) +
        (exercise === lastExercise ? 0 : 1)
    };
  }

  submit = state => {
    const { group } = this.props;
    const isCorrect = group.submit(state);
    const initiallyCorrect = this.state.exercise.initiallyCorrect;

    if (isCorrect) {
      if (!initiallyCorrect) {
        this.props.onCorrect();
      }
    } else {
      this.props.onWrong();
    }

    setTimeout(() => {
      if (group.getRemainingExercises().length === 0) {
        this.props.onDone();
      } else {
        this.setState(this.getStateFromGroup());
      }
    }, initiallyCorrect ? 0 : 1000);
  };

  render() {
    const { exercise, count } = this.state;

    if (!exercise) {
      return null;
    }

    const Component = this.props.createExerciseComponent(exercise.props.type);

    return (
      <Exercise
        key={count}
        exercise={exercise}
        Component={Component}
        goToNav={this.props.goToNav}
        onSubmit={this.submit}
        enableSubmitBySwipe={
          exercise.props.type !== 'WriteLetter' &&
          exercise.props.type !== 'WriteWord'
        }
      />
    );
  }
}
