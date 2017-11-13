import { Optional } from '../../../../src/types';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  symbols: string[];
  correctIndex: number;
}

export type IState = Optional<number>;

export interface IFeedback {
  highlightedChoice?: number;
}

class DifferFromSymbol extends AbstractExercise<IProps, IState, IFeedback> {
  public getInitialState() {
    return undefined;
  }

  public getFeedback(selectedIndex: IState) {
    if (this.isSubmitDisabled(selectedIndex) || this.isCorrect(selectedIndex)) {
      return {};
    }

    return {
      highlightedChoice: selectedIndex
    };
  }

  public isCorrect(selectedIndex: IState) {
    const { correctIndex } = this.props;
    return selectedIndex === correctIndex;
  }
}

export default DifferFromSymbol;
