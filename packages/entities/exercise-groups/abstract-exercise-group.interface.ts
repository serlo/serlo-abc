import { head, tail } from 'ramda';

import { Maybe } from '../../maybe';
import { AbstractExercise } from '../exercises';
import { EntityFactory } from '../index';

export abstract class AbstractExerciseGroup {
  private exercises: Array<AbstractExercise<any, any, any>>;
  private numberOfAttempts: number;

  constructor(
    protected createExercise: EntityFactory['createExercise'],
    protected newVocabulary: string[],
    protected vocabulary: string[],
    protected props: { [key: string]: any }
  ) {
    this.exercises = this.generateExercises();
    this.resetProgress();
  }

  public getRemainingExercises(): Array<AbstractExercise<any, any, any>> {
    return this.exercises;
  }

  public getCurrentExercise(): Maybe<AbstractExercise<any, any, any>> {
    return head(this.exercises);
  }

  public submit(state: any): void {
    const exercise = this.getCurrentExercise();

    if (!exercise) {
      return;
    }

    const isCorrect = exercise.isCorrect(state);

    if (isCorrect) {
      if (this.numberOfAttempts > 0) {
        this.enqueueExercise(exercise);
      }

      this.moveToNextExercise();
    } else {
      this.numberOfAttempts++;

      if (this.numberOfAttempts >= 3) {
        this.enqueueExercise(exercise);
        this.moveToNextExercise();
      }
    }
  }

  protected abstract generateExercises(): Array<
    AbstractExercise<any, any, any>
  >;

  private moveToNextExercise(): void {
    this.exercises = tail(this.exercises);
    this.resetProgress();
  }

  private resetProgress(): void {
    this.numberOfAttempts = 0;
  }

  private enqueueExercise(exercise: AbstractExercise<any, any, any>): void {
    this.exercises.push(exercise);
  }
}
