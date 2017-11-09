import { Optional } from '../../../../src/types';
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

  public isCorrect(selectedIndex: IState) {
    const { correctIndex } = this.props;
    return selectedIndex === correctIndex;
  }
}

export default DifferFromSymbol;
