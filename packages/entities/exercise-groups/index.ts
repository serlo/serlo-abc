import { Maybe } from '../../maybe';
import { Word } from '../word';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';
import { ConnectSyllables } from './connect-syllables';
import { DifferFromSymbol } from './differ-from-symbol';
import { FindLetter } from './find-letter';
import { HasPhoneme } from './has-phoneme';
import { IntroduceLetter } from './introduce-letter';
import { LetterRotated } from './letter-rotated';
import { MatchImage } from './match-image';
import { MissingLetter } from './missing-letter';
import { PraiseVideo } from './praise-video';
import { PresentLetter } from './present-letter';
import { RepeatLetter } from './repeat-letter';
import { RepeatWords } from './repeat-words';
import { ShowWords } from './show-words';
import { WriteLetter } from './write-letter';

export enum ExerciseGroupTypes {
  ConnectSyllables = 'ConnectSyllables',
  DifferFromSymbol = 'DifferFromSymbol',
  FindLetter = 'FindLetter',
  HasPhoneme = 'HasPhoneme',
  IntroduceLetter = 'IntroduceLetter',
  LetterRotated = 'LetterRotated',
  MatchImage = 'MatchImage',
  MissingLetter = 'MissingLetter',
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
      createWord: (id: string) => Maybe<Word>, // TODO: specify createExercise type
      /* tslint:disable-next-line:no-any */
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
  [ExerciseGroupTypes.ConnectSyllables]: ConnectSyllables,
  [ExerciseGroupTypes.DifferFromSymbol]: DifferFromSymbol,
  [ExerciseGroupTypes.FindLetter]: FindLetter,
  [ExerciseGroupTypes.IntroduceLetter]: IntroduceLetter,
  [ExerciseGroupTypes.HasPhoneme]: HasPhoneme,
  [ExerciseGroupTypes.LetterRotated]: LetterRotated,
  [ExerciseGroupTypes.MatchImage]: MatchImage,
  [ExerciseGroupTypes.MissingLetter]: MissingLetter,
  [ExerciseGroupTypes.PraiseVideo]: PraiseVideo,
  [ExerciseGroupTypes.PresentLetter]: PresentLetter,
  [ExerciseGroupTypes.RepeatLetter]: RepeatLetter,
  [ExerciseGroupTypes.RepeatWords]: RepeatWords,
  [ExerciseGroupTypes.ShowWords]: ShowWords,
  [ExerciseGroupTypes.WriteLetter]: WriteLetter
};

export { AbstractExerciseGroup };
