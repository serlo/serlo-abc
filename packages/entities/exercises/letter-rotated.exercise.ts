import * as R from 'ramda';

import { Maybe } from '../../maybe';
import {
  AbstractExercise,
  ExerciseFixture,
  ExercisePropsFixture
} from './abstract-exercise.interface';

export interface LetterRotatedProps {
  letters: string[];
  rotated: number[];
  angles: string[];
  difficulty: number;
}

export type LetterRotatedState = boolean[];

export type LetterRotatedFeedback = Maybe<{
  correctlySelected: boolean[];
  incorrectlySelected: boolean[];
  correctlyNotSelected: boolean[];
  incorrectlyNotSelected: boolean[];
}>;

export class LetterRotated extends AbstractExercise<
  LetterRotatedProps,
  LetterRotatedState,
  LetterRotatedFeedback
> {
  public static propsFixtures: ExercisePropsFixture[] = [
    {
      name: 'Difficulty level 1',
      props: {
        letters: ['a', 'N', 'E'],
        rotated: [2],
        angles: ['50deg'],
        difficulty: 0.1
      }
    },
    {
      name: 'Difficulty level 2',
      props: {
        letters: ['a', 'N', 'E', 's', 'T'],
        rotated: [2],
        angles: ['50deg'],
        difficulty: 0.3
      }
    },
    {
      name: 'Difficulty level 3',
      props: {
        letters: ['a', 'N', 'E', 's', 'T'],
        rotated: [2, 3],
        angles: ['50deg', '-30deg'],
        difficulty: 0.5
      }
    }
  ];

  public static fixtures: Array<
    ExerciseFixture<LetterRotatedState, LetterRotatedFeedback>
  > = [
    {
      name: 'difficulty level 1 correct choice',
      props: LetterRotated.propsFixtures[0].props,
      state: [false, false, true, false, false],
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'difficulty level 1 wrong choice',
      props: LetterRotated.propsFixtures[0].props,
      state: [true, false, false, false, false],
      feedback: {
        correctlyNotSelected: [false, true, false, true, true],
        correctlySelected: [false, false, false, false, false],
        incorrectlyNotSelected: [false, false, true, false, false],
        incorrectlySelected: [true, false, false, false, false]
      },
      isCorrect: false
    },
    {
      name: 'difficulty level 2 correct',
      props: LetterRotated.propsFixtures[1].props,
      state: [false, false, true, false, false],
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'difficulty level 2 wrong choice',
      props: LetterRotated.propsFixtures[1].props,
      state: [true, false, false, false, false],
      feedback: {
        correctlyNotSelected: [false, true, false, true, true],
        correctlySelected: [false, false, false, false, false],
        incorrectlyNotSelected: [false, false, true, false, false],
        incorrectlySelected: [true, false, false, false, false]
      },
      isCorrect: false
    },
    {
      name: 'difficulty level 3 one wrong',
      props: LetterRotated.propsFixtures[2].props,
      state: [true, false, true, true, false],
      feedback: {
        correctlyNotSelected: [false, true, false, false, true],
        correctlySelected: [false, false, true, true, false],
        incorrectlyNotSelected: [false, false, false, false, false],
        incorrectlySelected: [true, false, false, false, false]
      },
      isCorrect: false
    },
    {
      name: 'difficulty level 3 correct',
      props: LetterRotated.propsFixtures[2].props,
      state: [false, false, true, true, false],
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'difficulty level 3 one correct missing',
      props: LetterRotated.propsFixtures[2].props,
      state: [false, false, true, false, false],
      feedback: {
        correctlyNotSelected: [true, true, false, false, true],
        correctlySelected: [false, false, true, false, false],
        incorrectlyNotSelected: [false, false, false, true, false],
        incorrectlySelected: [false, false, false, false, false]
      },
      isCorrect: false
    }
  ];

  public getInitialState(): LetterRotatedState {
    return R.map(() => false, this.props.letters) as LetterRotatedState;
  }

  public getFeedback(selected: LetterRotatedState): LetterRotatedFeedback {
    if (this.isSubmitDisabled(selected) || this.isCorrect(selected)) {
      return undefined;
    }

    const mapIndexedBoolean = R.addIndex<boolean, boolean>(R.map);

    return {
      correctlySelected: mapIndexedBoolean(
        (isSelected, i) => isSelected && R.contains(i, this.props.rotated),
        selected
      ),
      incorrectlySelected: mapIndexedBoolean(
        (isSelected, i) => isSelected && !R.contains(i, this.props.rotated),
        selected
      ),
      correctlyNotSelected: mapIndexedBoolean(
        (isSelected, i) => !isSelected && !R.contains(i, this.props.rotated),
        selected
      ),
      incorrectlyNotSelected: mapIndexedBoolean(
        (isSelected, i) => !isSelected && R.contains(i, this.props.rotated),
        selected
      )
    };
  }

  public isCorrect(selected: LetterRotatedState): boolean {
    const { letters, rotated } = this.props;

    for (let i = 0; i < letters.length; i++) {
      if (selected[i] !== R.contains(i, rotated)) {
        return false;
      }
    }
    return true;
  }

  public isSubmitDisabled(selected: LetterRotatedState): boolean {
    return R.all(sel => !sel, selected);
  }
}
