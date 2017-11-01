// TODO: don't depend on React Native app
import Word from '../../../../src/word';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  words: Word[];
  correctIndex: number;
}

export type IState = number | null;

class HearWord extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return null as IState;
  }

  public isCorrect(state: IState) {
    const { correctIndex } = this.getProps();
    return state === correctIndex;
  }
}

export default HearWord;
