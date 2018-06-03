import { head, tail } from 'ramda';

import { Maybe } from '../../maybe';
import { AbstractExercise } from '../exercises';
import { EntityFactory } from '../index';
import Word from '../word/word';

export abstract class AbstractExerciseGroup {
  /* tslint:disable-next-line:no-any */
  private exercises: Array<AbstractExercise<any, any, any>>;
  private numberOfAttempts: number;

  constructor(
    protected createWord: (id: string) => Maybe<Word>,
    protected createExercise: EntityFactory['createExercise'],
    protected newVocabulary: string[],
    protected vocabulary: string[],
    protected newLetter: Maybe<string>,
    protected letters: string[],
    /* tslint:disable-next-line:no-any */
    protected props: { [key: string]: any }
  ) {
    this.exercises = this.generateExercises();
    this.numberOfAttempts = 0;
  }

  /* tslint:disable-next-line:no-any */
  public getRemainingExercises(): Array<AbstractExercise<any, any, any>> {
    return this.exercises;
  }

  /* tslint:disable-next-line:no-any */
  public getCurrentExercise(): Maybe<AbstractExercise<any, any, any>> {
    return head(this.exercises);
  }

  /* tslint:disable-next-line:no-any */
  public submit(state: any): boolean {
    const exercise = this.getCurrentExercise();

    if (!exercise) {
      return true;
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

    return isCorrect;
  }

  protected abstract generateExercises(): Array<
    /* tslint:disable-next-line:no-any */
    AbstractExercise<any, any, any>
  >;

  private moveToNextExercise(): void {
    this.exercises = tail(this.exercises);
    this.resetProgress();
  }

  private resetProgress(): void {
    this.numberOfAttempts = 0;
  }

  /* tslint:disable-next-line:no-any */
  private enqueueExercise(exercise: AbstractExercise<any, any, any>): void {
    this.exercises.push(exercise);
  }
}
