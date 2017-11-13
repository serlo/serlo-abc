// TODO: don't depend on React Native app
import Word from '../../../../src/word';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  words: Word[];
  correctIndex: number;
}

export interface IState {
  selectedIndex?: number;
  soundsPlayed: boolean;
}

export interface IFeedback {
  highlightedChoice?: number;
}

class HearWord extends AbstractExercise<IProps, IState, IFeedback> {
  public getInitialState() {
    return { soundsPlayed: false };
  }

  public getFeedback(state: IState) {
    if (this.isSubmitDisabled(state) || this.isCorrect(state)) {
      return {};
    }
    return {
      highlightedChoice: state.selectedIndex
    };
  }

  public isCorrect({ selectedIndex }: IState) {
    const { correctIndex } = this.props;

    return selectedIndex === correctIndex;
  }

  public isSubmitDisabled({ selectedIndex, soundsPlayed }: IState) {
    return !soundsPlayed || typeof selectedIndex === 'undefined';
  }
}

export default HearWord;
