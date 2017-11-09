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

export interface IFeedback {
  highlightedChoice?: boolean;
}

class HasPhoneme extends AbstractExercise<IProps, IState, IFeedback> {
  public getInitialState() {
    return { soundsPlayed: false };
  }

  public getFeedback(state: IState) {
    if (this.isSubmitDisabled(state) || this.isCorrect(state)) {
      return {};
    }

    return {
      highlightedChoice: state.containsPhoneme
    };
  }

  public isCorrect({ containsPhoneme }: IState) {
    return containsPhoneme === this.containsPhoneme();
  }

  public isSubmitDisabled({ soundsPlayed, containsPhoneme }: IState) {
    return !soundsPlayed || typeof containsPhoneme === 'undefined';
  }

  private containsPhoneme(): boolean {
    const { phoneme, word } = this.props;
    const wordString = word.toString().toUpperCase();

    return wordString.indexOf(phoneme) !== -1;
  }
}

export default HasPhoneme;
