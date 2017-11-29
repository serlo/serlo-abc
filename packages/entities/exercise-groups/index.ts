import { AbstractExerciseGroup } from './abstract-exercise-group.interface';
import { IntroduceLetter } from './introduce-letter';
import { PresentLetter } from './present-letter';

export enum ExerciseGroupTypes {
  IntroduceLetter = 'IntroduceLetter',
  PresentLetter = 'PresentLetter'
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
  [ExerciseGroupTypes.IntroduceLetter]: IntroduceLetter,
  [ExerciseGroupTypes.PresentLetter]: PresentLetter
};

export { AbstractExerciseGroup };
