import * as R from 'ramda';
import { Maybe } from '../../maybe';

import { AbstractWord } from '../word';
import {
  AbstractExercise,
  ExerciseFixture,
  ExercisePropsFixture
} from './abstract-exercise.interface';

export interface FindLetterProps {
  word: AbstractWord;
  letter: string;
}

export type FindLetterState = boolean[];

export type FindLetterFeedback = Maybe<{
  correctlySelected: boolean[];
  incorrectlySelected: boolean[];
  correctlyNotSelected: boolean[];
  incorrectlyNotSelected: boolean[];
}>;

const mapIndexed = R.addIndex(R.map);

export class FindLetter extends AbstractExercise<
  FindLetterProps,
  FindLetterState,
  FindLetterFeedback
> {
  public static propsFixtures: ExercisePropsFixture[] = [
    {
      name: `Find letter A in 'Ananas'`,
      props: {
        word: 'ananas',
        letter: 'A'
      }
    },
    {
      name: `Find letter ß in 'Fuß'`,
      props: {
        word: 'fusz',
        letter: 'ß'
      }
    }
  ];

  public static fixtures: Array<
    ExerciseFixture<FindLetterState, FindLetterFeedback>
  > = [
    {
      name: 'all correct letters',
      props: FindLetter.propsFixtures[0].props,
      state: [true, false, true, false, true, false],
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'one wrong letter',
      props: FindLetter.propsFixtures[0].props,
      state: [true, true, true, false, true, false],
      feedback: {
        correctlyNotSelected: [false, false, false, true, false, true],
        correctlySelected: [true, false, true, false, true, false],
        incorrectlyNotSelected: [false, false, false, false, false, false],
        incorrectlySelected: [false, true, false, false, false, false]
      },
      isCorrect: false
    },
    {
      name: 'some but not all correct letters',
      props: FindLetter.propsFixtures[0].props,
      state: [true, false, false, false, true, false],
      feedback: {
        correctlyNotSelected: [false, true, false, true, false, true],
        correctlySelected: [true, false, false, false, true, false],
        incorrectlyNotSelected: [false, false, true, false, false, false],
        incorrectlySelected: [false, false, false, false, false, false]
      },
      isCorrect: false
    },
    {
      name: 'all correct letters',
      props: FindLetter.propsFixtures[1].props,
      state: [false, false, true],
      feedback: undefined,
      isCorrect: true
    }
  ];

  public getInitialState(): FindLetterState {
    return R.map(
      () => false,
      this.props.word.toString().split('')
    ) as FindLetterState;
  }

  public getFeedback(selected: FindLetterState): FindLetterFeedback {
    if (this.isSubmitDisabled(selected) || this.isCorrect(selected)) {
      return undefined;
    }

    const { letter, word } = this.props;
    const letterString = letter.toUpperCase();
    const wordString = word.toString().toUpperCase();

    return {
      correctlySelected: mapIndexed(
        (isSelected, i) => isSelected && wordString[i] === letterString,
        selected
      ),
      incorrectlySelected: mapIndexed(
        (isSelected, i) => isSelected && wordString[i] !== letterString,
        selected
      ),
      correctlyNotSelected: mapIndexed(
        (isSelected, i) => !isSelected && wordString[i] !== letterString,
        selected
      ),
      incorrectlyNotSelected: mapIndexed(
        (isSelected, i) => !isSelected && wordString[i] === letterString,
        selected
      )
    };
  }

  public isCorrect(state: FindLetterState): boolean {
    const { letter, word } = this.props;
    const letterString = letter.toLowerCase();
    const wordString = word.toString().toLowerCase();

    for (let i = 0; i < wordString.length; i++) {
      if (state[i] !== (wordString[i] === letterString)) {
        return false;
      }
    }

    return true;
  }
}
