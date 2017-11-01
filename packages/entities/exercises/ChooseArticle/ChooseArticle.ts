// TODO: don't depend on React Native app
import { Article } from '../../../../src/assets/words';
// TODO: don't depend on React Native app
import Word from '../../../../src/word';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  word: Word;
}

export type IState = Article | null;

class ChooseArticle extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return null as IState;
  }

  public isCorrect(state: IState) {
    const { word } = this.getProps();

    return word.getArticle() === state;
  }
}

export default ChooseArticle;
