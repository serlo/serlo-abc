import { AbstractExerciseGroup } from './abstract-exercise-group.interface';
import { FindLetter } from './find-letter';
import { IntroduceLetter } from './introduce-letter';
import { MatchImage } from './match-image';
import { PraiseVideo } from './praise-video';
import { PresentLetter } from './present-letter';
import { RepeatLetter } from './repeat-letter';
import { RepeatWords } from './repeat-words';
import { ShowWords } from './show-words';
import { WriteLetter } from './write-letter';

export enum ExerciseGroupTypes {
  FindLetter = 'FindLetter',
  MatchImage = 'MatchImage',
  IntroduceLetter = 'IntroduceLetter',
  PraiseVideo = 'PraiseVideo',
  PresentLetter = 'PresentLetter',
  RepeatLetter = 'RepeatLetter',
  RepeatWords = 'RepeatWords',
  ShowWords = 'ShowWords',
  WriteLetter = 'WriteLetter'
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
  [ExerciseGroupTypes.FindLetter]: FindLetter,
  [ExerciseGroupTypes.MatchImage]: MatchImage,
  [ExerciseGroupTypes.IntroduceLetter]: IntroduceLetter,
  [ExerciseGroupTypes.PraiseVideo]: PraiseVideo,
  [ExerciseGroupTypes.PresentLetter]: PresentLetter,
  [ExerciseGroupTypes.RepeatLetter]: RepeatLetter,
  [ExerciseGroupTypes.RepeatWords]: RepeatWords,
  [ExerciseGroupTypes.ShowWords]: ShowWords,
  [ExerciseGroupTypes.WriteLetter]: WriteLetter
};

export { AbstractExerciseGroup };
