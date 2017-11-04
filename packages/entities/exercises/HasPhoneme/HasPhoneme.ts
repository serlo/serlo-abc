import Word from '../../../../src/word';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  word: Word;
  phoneme: string;
}

export interface IState {
  containsPhoneme?: boolean;
  soundsPlayed: boolean;
}

class HasPhoneme extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return { soundsPlayed: false };
  }

  public isCorrect({ containsPhoneme }: IState) {
    const { phoneme, word } = this.props;
    const wordString = word.toString().toUpperCase();

    return containsPhoneme === (wordString.indexOf(phoneme) !== -1);
  }

  public isSubmitDisabled({ soundsPlayed }: IState) {
    return !soundsPlayed;
  }
}

export default HasPhoneme;
