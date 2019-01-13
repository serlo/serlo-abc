import { Maybe } from '../../maybe';
import { Word } from '../word';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';
import { BuildSentences } from './build-sentences';
import { ConnectSyllables } from './connect-syllables';
import { DifferFromSymbol } from './differ-from-symbol';
import { DifferFromSymbolRevision } from './differ-from-symbol-revision';
import { FindLetter } from './find-letter';
import { HasPhoneme } from './has-phoneme';
import { HasPhonemeRevision } from './has-phoneme-revision';
import { IntroduceLetter } from './introduce-letter';
import { LetterRotated } from './letter-rotated';
import { MatchImage } from './match-image';
import { MissingLetter } from './missing-letter';
import { PraiseVideo } from './praise-video';
import { PresentLetter } from './present-letter';
import { RepeatLetter } from './repeat-letter';
import { RepeatWords } from './repeat-words';
import { ShowWords } from './show-words';
import { StoryVideo } from './story-video';
import { WriteLetter } from './write-letter';
import { WriteWords } from './write-words';

export enum ExerciseGroupTypes {
  BuildSentences = 'BuildSentences',
  ConnectSyllables = 'ConnectSyllables',
  DifferFromSymbol = 'DifferFromSymbol',
  DifferFromSymbolRevision = 'DifferFromSymbolRevision',
  FindLetter = 'FindLetter',
  HasPhoneme = 'HasPhoneme',
  HasPhonemeRevision = 'HasPhonemeRevision',
  IntroduceLetter = 'IntroduceLetter',
  LetterRotated = 'LetterRotated',
  MatchImage = 'MatchImage',
  MissingLetter = 'MissingLetter',
  PraiseVideo = 'PraiseVideo',
  PresentLetter = 'PresentLetter',
  RepeatLetter = 'RepeatLetter',
  RepeatWords = 'RepeatWords',
  ShowWords = 'ShowWords',
  StoryVideo = 'StoryVideo',
  WriteLetter = 'WriteLetter',
  WriteWords = 'WriteWords'
}

export const ExerciseGroups: {
  [type: string]: new (
    createWord: (id: string) => Maybe<Word>, // TODO: specify createExercise type
    /* tslint:disable-next-line:no-any */
    createExercise: any,
    newVocab: string[],
    vocab: string[],
    newLetter: string,
    letters: string[],
    /* tslint:disable-next-line:no-any */
    props: any // TODO: check props type of createExercise
  ) => AbstractExerciseGroup;
} = {
  [ExerciseGroupTypes.BuildSentences]: BuildSentences,
  [ExerciseGroupTypes.ConnectSyllables]: ConnectSyllables,
  [ExerciseGroupTypes.DifferFromSymbol]: DifferFromSymbol,
  [ExerciseGroupTypes.DifferFromSymbolRevision]: DifferFromSymbolRevision,
  [ExerciseGroupTypes.FindLetter]: FindLetter,
  [ExerciseGroupTypes.IntroduceLetter]: IntroduceLetter,
  [ExerciseGroupTypes.HasPhoneme]: HasPhoneme,
  [ExerciseGroupTypes.HasPhonemeRevision]: HasPhonemeRevision,
  [ExerciseGroupTypes.LetterRotated]: LetterRotated,
  [ExerciseGroupTypes.MatchImage]: MatchImage,
  [ExerciseGroupTypes.MissingLetter]: MissingLetter,
  [ExerciseGroupTypes.PraiseVideo]: PraiseVideo,
  [ExerciseGroupTypes.PresentLetter]: PresentLetter,
  [ExerciseGroupTypes.RepeatLetter]: RepeatLetter,
  [ExerciseGroupTypes.RepeatWords]: RepeatWords,
  [ExerciseGroupTypes.ShowWords]: ShowWords,
  [ExerciseGroupTypes.StoryVideo]: StoryVideo,
  [ExerciseGroupTypes.WriteLetter]: WriteLetter,
  [ExerciseGroupTypes.WriteWords]: WriteWords
};

export { AbstractExerciseGroup };
