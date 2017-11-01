import AbstractExercise from '../AbstractExercise';

export type IState = void;

class InfoScreen<Props> extends AbstractExercise<Props, IState> {
  public getInitialState() {
    return;
  }

  public isCorrect(state: IState) {
    return true;
  }
}

export default InfoScreen;
