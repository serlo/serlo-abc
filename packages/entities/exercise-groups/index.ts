import { AbstractExerciseGroup } from './abstract-exercise-group.interface';
import { IntroduceLetter } from './introduce-letter';

export enum ExerciseGroupTypes {
  IntroduceLetter = 'IntroduceLetter'
}

export const ExerciseGroups: {
  [type: string]: {
    /* tslint:disable-next-line:no-any */ // TODO: specify createExercise type
    new (
      createExercise: any,
      newVocab: string[],
      vocab: string[],
      props: any
    ): AbstractExerciseGroup;
  };
} = {
  [ExerciseGroupTypes.IntroduceLetter]: IntroduceLetter
};

export { AbstractExerciseGroup };
