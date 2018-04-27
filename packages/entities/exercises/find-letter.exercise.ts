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
        letter: 'a'
      }
    },
    {
      name: `Find letter ß in 'Fuß'`,
      props: {
        word: 'fusz',
        letter: 'ß'
      }
    },
    {
      name: `Find letter Sch in 'Schal'`,
      props: {
        word: 'schal',
        letter: 'sch'
      }
    },
    {
      name: `Find letter S in 'Sessel'`,
      props: {
        word: 'sessel',
        letter: 's'
      }
    }
  ];

  public static fixtures: Array<
    ExerciseFixture<FindLetterState, FindLetterFeedback>
  > = [
    {
      name: 'all correct letters (A)',
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
      name: 'all correct letters (ß)',
      props: FindLetter.propsFixtures[1].props,
      state: [false, false, true],
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'all correct letters (sch)',
      props: FindLetter.propsFixtures[2].props,
      state: [true, true, true, false, false],
      feedback: undefined,
      isCorrect: true
    },
    {
      name: 'missing last letter (sch)',
      props: FindLetter.propsFixtures[2].props,
      state: [true, true, false, false, false],
      feedback: {
        correctlyNotSelected: [false, false, false, true, true],
        correctlySelected: [true, true, false, false, false],
        incorrectlyNotSelected: [false, false, true, false, false],
        incorrectlySelected: [false, false, false, false, false]
      },
      isCorrect: false
    },
    {
      name: 'all correct letters (s)',
      props: FindLetter.propsFixtures[3].props,
      state: [true, false, true, true, false, false],
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

    const correctState = this.getCorrectState();
    const mapIndexedBoolean = R.addIndex<boolean, boolean>(R.map);

    return {
      correctlySelected: mapIndexedBoolean(
        (isSelected, i) => isSelected && correctState[i],
        selected
      ),
      incorrectlySelected: mapIndexedBoolean(
        (isSelected, i) => isSelected && !correctState[i],
        selected
      ),
      correctlyNotSelected: mapIndexedBoolean(
        (isSelected, i) => !isSelected && !correctState[i],
        selected
      ),
      incorrectlyNotSelected: mapIndexedBoolean(
        (isSelected, i) => !isSelected && correctState[i],
        selected
      )
    };
  }

  public isCorrect(state: FindLetterState): boolean {
    return R.equals(state, this.getCorrectState());
  }

  private getCorrectState(): FindLetterState {
    const { letter, word } = this.props;
    const wordString = word.toString().toLowerCase();

    const startIndices = this.findAllIndices(letter, wordString);

    const indices = R.flatten<number>(
      R.map(
        index => R.times(offset => index + offset, letter.length),
        startIndices
      )
    );

    return R.reduce(
      (acc, index) => R.update(index, true, acc),
      R.times(R.always(false), wordString.length),
      indices
    );
  }

  private findAllIndices(substr: string, str: string, start = 0): number[] {
    const index = str.indexOf(substr, start);

    if (index < 0) {
      return [];
    }

    return [index, ...this.findAllIndices(substr, str, index + substr.length)];
  }
}
