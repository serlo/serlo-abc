import { Optional } from '../../../../src/types';
// TODO: don't depend on React Native app
import Word from '../../../../src/word';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  words: Word[];
  correctIndex: number;
}

export type IState = Optional<number>;

export interface IFeedback {
  highlightedChoice?: number;
}

class MatchImage extends AbstractExercise<IProps, IState, IFeedback> {
  public getInitialState() {
    return undefined;
  }

  public getFeedback(selectedIndex: IState) {
    if (this.isCorrect(selectedIndex)) {
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

export default MatchImage;
