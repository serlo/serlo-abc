import AbstractExercise from '../AbstractExercise';

export type IState = null;

class InfoScreen<Props> extends AbstractExercise<Props, IState> {
  public getInitialState() {
    return null;
  }

  public isCorrect(state: IState) {
    return true;
  }
}

export default InfoScreen;
