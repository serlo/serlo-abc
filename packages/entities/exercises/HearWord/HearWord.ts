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

class HearWord extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return { soundsPlayed: false };
  }

  public isCorrect({ selectedIndex }: IState) {
    const { correctIndex } = this.props;

    return selectedIndex === correctIndex;
  }

  public isSubmitDisabled({ soundsPlayed }: IState) {
    return !soundsPlayed;
  }
}

export default HearWord;
