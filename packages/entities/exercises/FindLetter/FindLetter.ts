import { map } from 'ramda';

import Word from '../../../../src/word';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  word: Word;
  letter: string;
}

export type IState = boolean[];

class FindLetter extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return map(
      () => false,
      this.getProps()
        .word.toString()
        .split('')
    ) as IState;
  }

  public isCorrect(state: IState) {
    const { letter, word } = this.getProps();
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
