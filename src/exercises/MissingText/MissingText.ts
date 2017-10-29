import AbstractExercise from '../AbstractExercise';

export interface IProps {
  word?: any;
  video?: any;
  text: string[];
  missing: number;
  options: string[];
}

export type IState = number | null;

class MissingText extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return null as IState;
  }

  public isCorrect(state: IState) {
    if (state !== null) {
      const { options, text, missing } = this.getProps();
      return text[missing] === options[state];
    }

    return false;
  }
}

export default MissingText;
