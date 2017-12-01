import { Maybe } from '../../maybe';
import { AbstractWord } from '../word';
import {
  AbstractExercise,
  ExerciseFixture,
  ExercisePropsFixture
} from './abstract-exercise.interface';

export interface HearWordProps {
  words: AbstractWord[];
  correctIndex: number;
}

export interface HearWordState {
  selectedIndex?: number;
  soundsPlayed: boolean;
}

export type HearWordFeedback = Maybe<{
  correctChoice: number;
  wrongChoice: number;
}>;

export class HearWord extends AbstractExercise<
  HearWordProps,
  HearWordState,
  HearWordFeedback
> {
  public static propsFixtures: ExercisePropsFixture[] = [
    {
      name: 'Find Nase',
      props: {
        words: ['apfel', 'nase', 'ball'],
        correctIndex: 1
      }
    }
  ];

  public static fixtures: Array<
    ExerciseFixture<HearWordState, HearWordFeedback>
  > = [
    {
      name: 'correct choice',
      props: HearWord.propsFixtures[0].props,
      state: { selectedIndex: 1, soundsPlayed: true },
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'wrong choice',
      props: HearWord.propsFixtures[0].props,
      state: { selectedIndex: 2, soundsPlayed: true },
      feedback: {
        correctChoice: 1,
        wrongChoice: 2
      },
      isCorrect: false
    }
  ];

  public getInitialState(): HearWordState {
    return { soundsPlayed: false };
  }

  public getFeedback(state: HearWordState): HearWordFeedback {
    if (
      typeof state.selectedIndex === 'undefined' ||
      this.isSubmitDisabled(state) ||
      this.isCorrect(state)
    ) {
      return undefined;
    }
    return {
      correctChoice: this.props.correctIndex,
      wrongChoice: state.selectedIndex
    };
  }

  public isCorrect({ selectedIndex }: HearWordState): boolean {
    const { correctIndex } = this.props;

    return selectedIndex === correctIndex;
  }

  public isSubmitDisabled({
    selectedIndex,
    soundsPlayed
  }: HearWordState): boolean {
    return !soundsPlayed || typeof selectedIndex === 'undefined';
  }
}
