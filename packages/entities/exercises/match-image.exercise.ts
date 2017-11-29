import { Maybe } from '../../maybe';
import { AbstractWord } from '../word';
import {
  AbstractExercise,
  ExerciseFixture,
  ExercisePropsFixture
} from './abstract-exercise.interface';

export interface MatchImageProps {
  words: AbstractWord[];
  correctIndex: number;
}

export type MatchImageState = Maybe<number>;

export type MatchImageFeedback = Maybe<{
  correctChoice: number;
  wrongChoice: number;
}>;

export class MatchImage extends AbstractExercise<
  MatchImageProps,
  MatchImageState,
  MatchImageFeedback
> {
  public static propsFixtures: ExercisePropsFixture[] = [
    {
      name: 'Find Esel',
      props: {
        words: ['affe', 'esel', 'apfel', 'nase'],
        correctIndex: 1
      }
    }
  ];

  public static fixtures: Array<
    ExerciseFixture<MatchImageState, MatchImageFeedback>
  > = [
    {
      name: 'correct selected',
      props: MatchImage.propsFixtures[0].props,
      state: 1,
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'wrong selected',
      props: MatchImage.propsFixtures[0].props,
      state: 2,
      feedback: {
        correctChoice: 1,
        wrongChoice: 2
      },
      isCorrect: false
    }
  ];

  public getInitialState(): MatchImageState {
    return undefined;
  }

  public getFeedback(selectedIndex: MatchImageState): MatchImageFeedback {
    if (
      typeof selectedIndex === 'undefined' ||
      this.isSubmitDisabled(selectedIndex) ||
      this.isCorrect(selectedIndex)
    ) {
      return undefined;
    }

    return {
      correctChoice: this.props.correctIndex,
      wrongChoice: selectedIndex
    };
  }

  public isCorrect(selectedIndex: MatchImageState) {
    const { correctIndex } = this.props;
    return selectedIndex === correctIndex;
  }

  public isSubmitDisabled(selectedIndex: MatchImageState): boolean {
    return typeof selectedIndex === 'undefined';
  }
}
