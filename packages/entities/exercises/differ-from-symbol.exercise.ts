import { Maybe } from '../../maybe';
import {
  AbstractExercise,
  ExerciseFixture,
  ExercisePropsFixture
} from './abstract-exercise.interface';

export interface Figure {
  name: string;
  isIcon: boolean;
}

export interface DifferFromSymbolProps {
  symbols: Figure[];
  correctIndex: number;
}

export type DifferFromSymbolState = Maybe<number>;

export type DifferFromSymbolFeedback = Maybe<{
  correctChoice: number;
  wrongChoice: number;
}>;

export class DifferFromSymbol extends AbstractExercise<
  DifferFromSymbolProps,
  DifferFromSymbolState,
  DifferFromSymbolFeedback
> {
  public static propsFixtures: ExercisePropsFixture[] = [
    {
      name: '',
      props: {
        symbols: ['3', '+', ',', 'event-seat', 'M'],
        isIcon: [false, false, false, true, false],
        correctIndex: 4
      }
    }
  ];

  public static fixtures: Array<
    ExerciseFixture<DifferFromSymbolState, DifferFromSymbolFeedback>
  > = [
    {
      name: 'correct choice',
      props: DifferFromSymbol.propsFixtures[0].props,
      state: 4,
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'wrong choice',
      props: DifferFromSymbol.propsFixtures[0].props,
      state: 2,
      feedback: {
        correctChoice: 4,
        wrongChoice: 2
      },
      isCorrect: false
    }
  ];

  public getInitialState(): DifferFromSymbolState {
    return undefined;
  }

  public getFeedback(
    selectedIndex: DifferFromSymbolState
  ): DifferFromSymbolFeedback {
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

  public isCorrect(selectedIndex: DifferFromSymbolState): boolean {
    const { correctIndex } = this.props;
    return selectedIndex === correctIndex;
  }
}
