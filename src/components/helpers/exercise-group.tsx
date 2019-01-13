import * as R from 'ramda';
import * as React from 'react';

import {
  AbstractExercise,
  AbstractExerciseGroup
} from '../../../packages/entities';
import { Exercise } from './exercise';

interface ExerciseGroupProps {
  onCorrect: () => void;
  onWrong: () => void;
  onDone: () => void;
  goToNav: () => void;
  createExerciseComponent: (type: string) => React.ComponentType;
  group: AbstractExerciseGroup;
}

interface ExerciseGroupState {
  /* tslint:disable-next-line:no-any */
  exercises: Array<AbstractExercise<any, any, any>>;
  /* tslint:disable-next-line:no-any */
  exercise?: AbstractExercise<any, any, any>;
  count: number;
}

export class ExerciseGroup extends React.Component<
  ExerciseGroupProps,
  ExerciseGroupState
> {
  constructor(props: ExerciseGroupProps) {
    super(props);

    this.state = {
      ...this.getStateFromGroup(),
      count: 0
    };
  }

  public render() {
    const { exercise, count } = this.state;

    if (!exercise) {
      /* tslint:disable-next-line:no-null-keyword */
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

  private getStateFromGroup(): ExerciseGroupState {
    const lastExercise = R.path(['state', 'exercise'], this);
    const exercise = this.props.group.getCurrentExercise();

    return {
      exercise,
      exercises: this.props.group.getRemainingExercises(),
      count:
        R.pathOr(0, ['state', 'count'], this) +
        (exercise === lastExercise ? 0 : 1)
    };
  }

  /* tslint:disable-next-line:no-any */
  private submit = (state: any) => {
    const { group } = this.props;
    const { exercise } = this.state;
    const isCorrect = group.submit(state);
    const initiallyCorrect = exercise && exercise.initiallyCorrect;

    if (isCorrect) {
      if (!initiallyCorrect) {
        this.props.onCorrect();
      }
    } else {
      this.props.onWrong();
    }

    setTimeout(
      () => {
        if (group.getRemainingExercises().length === 0) {
          this.props.onDone();
        } else {
          this.setState(this.getStateFromGroup());
        }
      },
      initiallyCorrect ? 0 : 1000
    );
  };
}
