import {
  AbstractExercise,
  ExerciseFixture,
  ExercisePropsFixture
} from './abstract-exercise.interface';
import { BuildSentenceVideo } from './build-sentence-video.exercise';
import { Canvas } from './canvas.exercise';
import { ChooseArticle } from './choose-article.exercise';
import { DifferFromSymbol } from './differ-from-symbol.exercise';
import { FindLetter } from './find-letter.exercise';
import { HasPhoneme } from './has-phoneme.exercise';
import { HearWord } from './hear-word.exercise';
import { InfoScreenWithSounds } from './info-screen-with-sounds.exercise';
import { InfoScreen } from './info-screen.exercise';
import { LetterRotated } from './letter-rotated.exercise';
import { MatchImage } from './match-image.exercise';
import { MissingText } from './missing-text.exercise';
import { PlaySounds } from './play-sounds.exercise';
import { SerializedProps } from './serialized-props.interface';
import { VideoQuestion } from './video-question.exercise';

export enum ExerciseTypes {
  BuildSentenceVideo = 'BuildSentenceVideo',
  Canvas = 'Canvas',
  ChooseArticle = 'ChooseArticle',
  DifferFromSymbol = 'DifferFromSymbol',
  FindLetter = 'FindLetter',
  HasPhoneme = 'HasPhoneme',
  HearWord = 'HearWord',
  InfoScreen = 'InfoScreen',
  InfoScreenWithSounds = 'InfoScreenWithSounds',
  LetterRotated = 'LetterRotated',
  MatchImage = 'MatchImage',
  MissingText = 'MissingText',
  PlaySounds = 'PlaySounds',
  VideoQuestion = 'VideoQuestion'
}

export const Exercises: {
  [type: string]: {
    propsFixtures: ExercisePropsFixture[];
    /* tslint:disable-next-line:no-any */
    fixtures: Array<ExerciseFixture<any, any>>;
    /* tslint:disable-next-line:no-any */
    new (p: any): AbstractExercise<any, any, any>;
  };
} = {
  [ExerciseTypes.BuildSentenceVideo]: BuildSentenceVideo,
  [ExerciseTypes.Canvas]: Canvas,
  [ExerciseTypes.ChooseArticle]: ChooseArticle,
  [ExerciseTypes.DifferFromSymbol]: DifferFromSymbol,
  [ExerciseTypes.FindLetter]: FindLetter,
  [ExerciseTypes.HasPhoneme]: HasPhoneme,
  [ExerciseTypes.HearWord]: HearWord,
  [ExerciseTypes.InfoScreen]: InfoScreen,
  [ExerciseTypes.InfoScreenWithSounds]: InfoScreenWithSounds,
  [ExerciseTypes.LetterRotated]: LetterRotated,
  [ExerciseTypes.MatchImage]: MatchImage,
  [ExerciseTypes.MissingText]: MissingText,
  [ExerciseTypes.PlaySounds]: PlaySounds,
  [ExerciseTypes.VideoQuestion]: VideoQuestion
};

export {
  AbstractExercise,
  ExerciseFixture,
  ExercisePropsFixture,
  SerializedProps
};
