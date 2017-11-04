import { all, contains, map } from 'ramda';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  letters: string[];
  rotated: number[];
  angles: string[];
  difficulty: number;
}

export type IState = boolean[];

class LetterRotated extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return map(() => false, this.props.letters) as IState;
  }

  public isCorrect(selected: IState) {
    const { letters, rotated } = this.props;

    for (let i = 0; i < letters.length; i++) {
      if (selected[i] !== contains(i, rotated)) {
        return false;
      }
    }
    return true;
  }

  public isSubmitDisabled(selected: IState) {
    return all(sel => !sel, selected);
  }
}

export default LetterRotated;
