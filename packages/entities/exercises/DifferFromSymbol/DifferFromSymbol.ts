import { Optional } from '../../../../src/types/index';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  symbols: string[];
  correctIndex: number;
}

export type IState = Optional<number>;

class DifferFromSymbol extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return undefined;
  }

  public isCorrect(state: IState) {
    const { correctIndex } = this.getProps();
    return state === correctIndex;
  }
}

export default DifferFromSymbol;
