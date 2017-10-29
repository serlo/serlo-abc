import { getArticle } from '../../helpers/words.js';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  word: any;
}

export type IState = string;

class ChooseArticle extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return '' as IState;
  }

  public isCorrect(state: IState) {
    const { word } = this.getProps();
    const articleString = getArticle(word).toUpperCase();

    return articleString === state.toUpperCase();
  }
}

export default ChooseArticle;
