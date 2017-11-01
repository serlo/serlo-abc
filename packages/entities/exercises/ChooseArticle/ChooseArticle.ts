// TODO: don't depend on React Native app
import { Article } from '../../../../src/assets/words';
import { Optional } from '../../../../src/types/index';
// TODO: don't depend on React Native app
import Word from '../../../../src/word';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  word: Word;
}

export type IState = Optional<Article>;

class ChooseArticle extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return undefined;
  }

  public isCorrect(state: IState) {
    const { word } = this.getProps();

    return word.getArticle() === state;
  }
}

export default ChooseArticle;
