import * as R from 'ramda';

import Word from '../../../../src/word';
import AbstractExercise from '../AbstractExercise';

export interface FindLetterProps {
  word: Word;
  letter: string;
}

export type FindLetterState = boolean[];

export interface FindLetterFeedback {
  wrongChoices?: boolean[];
  correctChoice?: boolean[];
  missingCorrectChoices?: boolean[];
}

const mapIndexed = R.addIndex(R.map);

class FindLetter extends AbstractExercise<
  FindLetterProps,
  FindLetterState,
  FindLetterFeedback
> {
  public getInitialState() {
    return R.map(
      () => false,
      this.props.word.toString().split('')
    ) as FindLetterState;
  }

  public getFeedback(selected: FindLetterState) {
    if (this.isSubmitDisabled(selected) || this.isCorrect(selected)) {
      return {};
    }

    const { letter, word } = this.props;
    const wordString = word.toString().toUpperCase();

    return {
      wrongChoices: mapIndexed(
        (selection, i) => selection && wordString[i] !== letter,
        selected
      ),
      correctChoices: mapIndexed(
        (selection, i) => selection && wordString[i] === letter,
        selected
      ),
      missingCorrectChoices: mapIndexed(
        (selection, i) => !selection && wordString[i] !== letter,
        selected
      )
    };
  }

  public isCorrect(state: FindLetterState) {
    const { letter, word } = this.props;
    const wordString = word.toString().toUpperCase();

    for (let i = 0; i < wordString.length; i++) {
      if (state[i] !== (wordString[i] === letter)) {
        return false;
      }
    }

    return true;
  }
}

export default FindLetter;
