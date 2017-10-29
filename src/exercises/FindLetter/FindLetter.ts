import { map } from 'ramda';

import { getWord } from '../../helpers/words.js';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  word: any;
  letter: string;
}

export type IState = boolean[];

class FindLetter extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return map(() => false, getWord(this.getProps().word)) as IState;
  }

  public isCorrect(state: IState) {
    const { letter, word } = this.getProps();
    const wordString = getWord(word).toUpperCase();

    for (let i = 0; i < wordString.length; i++) {
      if (state[i] !== (wordString[i] === letter)) {
        return false;
      }
    }

    return true;
  }
}

export default FindLetter;
