import { Maybe } from '../../maybe';
import { AssetTypes } from '../asset-resolver';
import {
  AbstractExercise,
  ExerciseFixture,
  ExercisePropsFixture
} from './abstract-exercise.interface';

export interface VideoQuestionProps {
  video: AssetTypes.VideoAsset;
  question: string;
  answers: string[];
  correctIndex: number;
}

export type VideoQuestionState = Maybe<number>;

export type VideoQuestionFeedback = Maybe<{
  correctChoice: number;
  wrongChoice: number;
}>;

export class VideoQuestion extends AbstractExercise<
  VideoQuestionProps,
  VideoQuestionState,
  VideoQuestionFeedback
> {
  public static propsFixtures: ExercisePropsFixture[] = [
    {
      name: 'Ich bin eine Ananas',
      props: {
        video: 'placeholder',
        question: 'Wer ist eine Ananas?',
        answers: [
          'Ich bin eine Ananas',
          'Du bist eine Ananas',
          'Wir sind eine Ananas'
        ],
        correctIndex: 0
      }
    }
  ];

  public static fixtures: Array<
    ExerciseFixture<VideoQuestionState, VideoQuestionFeedback>
  > = [
    {
      name: 'correct selected',
      props: VideoQuestion.propsFixtures[0].props,
      state: 0,
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'wrong selected',
      props: VideoQuestion.propsFixtures[0].props,
      state: 1,
      feedback: {
        correctChoice: 0,
        wrongChoice: 1
      },
      isCorrect: false
    }
  ];

  public getInitialState(): VideoQuestionState {
    return undefined;
  }

  public getFeedback(selectedIndex: VideoQuestionState): VideoQuestionFeedback {
    if (!selectedIndex || this.isCorrect(selectedIndex)) {
      return undefined;
    }

    return {
      correctChoice: this.props.correctIndex,
      wrongChoice: selectedIndex
    };
  }

  public isCorrect(selectedIndex: VideoQuestionState) {
    const { correctIndex } = this.props;
    return selectedIndex === correctIndex;
  }

  public isSubmitDisabled(selectedIndex: VideoQuestionState): boolean {
    return typeof selectedIndex === 'undefined';
  }
}
