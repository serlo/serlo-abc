import { Optional } from '../../../../src/types/index';
import Word from '../../../../src/word';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  word: Word;
  phoneme: string;
}

export type IState = Optional<boolean>;

class HasPhoneme extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return undefined;
  }

  public isCorrect(state: IState) {
    const { phoneme, word } = this.getProps();
    const wordString = word.toString().toUpperCase();
    return state === (wordString.indexOf(phoneme) !== -1);
  }
}

export default HasPhoneme;
