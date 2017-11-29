import * as React from 'react';
import { Exercise } from './exercise';

export class ExerciseGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getStateFromGroup();
  }

  getStateFromGroup() {
    return {
      exercise: this.props.group.getCurrentExercise(),
      exercises: this.props.group.getRemainingExercises()
    };
  }

  submit = state => {
    const { group } = this.props;
    group.submit(state);

    if (group.getRemainingExercises().length === 0) {
      this.props.onDone();
    } else {
      this.setState(this.getStateFromGroup());
    }
  };

  render() {
    const { exercise } = this.state;

    if (!exercise) {
      return null;
    }

    const Component = this.props.createExerciseComponent(exercise.props.type);

    return (
      <Exercise
        exercise={exercise}
        Component={Component}
        onSubmit={this.submit}
      />
    );
  }
}
