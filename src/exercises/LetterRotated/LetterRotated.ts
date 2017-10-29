import { map, contains } from 'ramda';
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
    return map(() => false, this.getProps().letters) as IState;
  }

  public isCorrect(state: IState) {
    const { rotated } = this.getProps();
    for (let i = 0; i < state.length; i++) {
      if (state[i] !== contains(i, rotated)) {
        return false;
      }
    }
    return true;
  }
}

export default LetterRotated;
