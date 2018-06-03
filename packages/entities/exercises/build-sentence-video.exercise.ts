import { sample } from '../../sample';
import {
  AbstractExercise,
  ExerciseFixture,
  ExercisePropsFixture
} from './abstract-exercise.interface';

export interface BuildSentenceVideoProps {
  /* tslint:disable-next-line:no-any */
  sentence: any;
}

export type BuildSentenceVideoState = string[];

export type BuildSentenceVideoFeedback = void;

export class BuildSentenceVideo extends AbstractExercise<
  BuildSentenceVideoProps,
  BuildSentenceVideoState,
  BuildSentenceVideoFeedback
> {
  public static propsFixtures: ExercisePropsFixture[] = [
    {
      name: 'Ich bin eine Ananas.',
      props: {
        sentence: 'Ich bin eine Ananas.'
      }
    }
  ];

  public static fixtures: Array<
    ExerciseFixture<BuildSentenceVideoState, BuildSentenceVideoFeedback>
  > = [
    {
      name: 'correct order',
      props: BuildSentenceVideo.propsFixtures[0].props,
      state: ['Ich', 'bin', 'eine', 'Ananas.'],
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'wrong order',
      props: BuildSentenceVideo.propsFixtures[0].props,
      state: ['Ananas.', 'eine', 'bin', 'ich'],
      feedback: undefined,
      isCorrect: false
    }
  ];

  private sentence: string;

  constructor(props: BuildSentenceVideoProps) {
    const sentence = sample(
      props.sentence.split(' '),
      props.sentence.split(' ').length
    );

    super({ sentence });

    this.sentence = props.sentence;
  }

  public getInitialState(): BuildSentenceVideoState {
    return [];
  }

  public getFeedback(
    currentSentence: BuildSentenceVideoState
  ): BuildSentenceVideoFeedback {
    return undefined;
  }

  public isCorrect(currentSentence: BuildSentenceVideoState) {
    return currentSentence.join(' ') === this.sentence;
  }
}
