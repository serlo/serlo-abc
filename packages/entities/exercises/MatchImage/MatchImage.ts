import { Optional } from '../../../../src/types/index';
// TODO: don't depend on React Native app
import Word from '../../../../src/word';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  words: Word[];
  correctIndex: number;
}

export type IState = Optional<number>;

class MatchImage extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return undefined;
  }

  public isCorrect(state: IState) {
    const { correctIndex } = this.getProps();
    return state === correctIndex;
  }
}

export default MatchImage;
