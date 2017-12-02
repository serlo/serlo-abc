import { AbstractExerciseGroup } from './abstract-exercise-group.interface';
import { DifferFromSymbol } from './differ-from-symbol';
import { FindLetter } from './find-letter';
import { IntroduceLetter } from './introduce-letter';
import { LetterRotated } from './letter-rotated';
import { MatchImage } from './match-image';
import { PraiseVideo } from './praise-video';
import { PresentLetter } from './present-letter';
import { RepeatLetter } from './repeat-letter';
import { RepeatWords } from './repeat-words';
import { ShowWords } from './show-words';
import { WriteLetter } from './write-letter';

export enum ExerciseGroupTypes {
  DifferFromSymbol = 'DifferFromSymbol',
  FindLetter = 'FindLetter',
  MatchImage = 'MatchImage',
  IntroduceLetter = 'IntroduceLetter',
  LetterRotated = 'LetterRotated',
  PraiseVideo = 'PraiseVideo',
  PresentLetter = 'PresentLetter',
  RepeatLetter = 'RepeatLetter',
  RepeatWords = 'RepeatWords',
  ShowWords = 'ShowWords',
  WriteLetter = 'WriteLetter'
}

export const ExerciseGroups: {
  [type: string]: {
    new (
      /* tslint:disable-next-line:no-any */ // TODO: specify createExercise type
      createExercise: any,
      newVocab: string[],
      vocab: string[],
      newLetter: string,
      letters: string[],
      /* tslint:disable-next-line:no-any */
      props: any // TODO: check props type of createExercise
    ): AbstractExerciseGroup;
  };
} = {
  [ExerciseGroupTypes.DifferFromSymbol]: DifferFromSymbol,
  [ExerciseGroupTypes.FindLetter]: FindLetter,
  [ExerciseGroupTypes.MatchImage]: MatchImage,
  [ExerciseGroupTypes.IntroduceLetter]: IntroduceLetter,
  [ExerciseGroupTypes.LetterRotated]: LetterRotated,
  [ExerciseGroupTypes.PraiseVideo]: PraiseVideo,
  [ExerciseGroupTypes.PresentLetter]: PresentLetter,
  [ExerciseGroupTypes.RepeatLetter]: RepeatLetter,
  [ExerciseGroupTypes.RepeatWords]: RepeatWords,
  [ExerciseGroupTypes.ShowWords]: ShowWords,
  [ExerciseGroupTypes.WriteLetter]: WriteLetter
};

export { AbstractExerciseGroup };
