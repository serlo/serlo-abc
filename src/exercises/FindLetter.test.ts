import AbstractExercise from './AbstractExercise';
import FindLetter from './FindLetter';

import { getWordObject } from '../helpers/words.js';

let exercise: AbstractExercise;

beforeEach(() => {
  exercise = new FindLetter({
    word: getWordObject('ananas'),
    letter: 'A'
  });
});

it('getInitialState() marks all letters as unhighlighted', () => {
  expect(exercise.getInitialState()).toEqual([
    false,
    false,
    false,
    false,
    false,
    false
  ]);
});

describe('isCorrect()', () => {
  it('returns true if all correct letters are highlighted', () => {
    expect(
      exercise.isCorrect([true, false, true, false, true, false])
    ).toBeTruthy();
  });

  it('returns false if one wrong letter is highlighted', () => {
    expect(
      exercise.isCorrect([true, true, true, false, true, false])
    ).toBeFalsy();
  });

  it('returns false if not all correct letters are highlighted', () => {
    expect(
      exercise.isCorrect([true, false, false, false, true, false])
    ).toBeFalsy();
  });
});
