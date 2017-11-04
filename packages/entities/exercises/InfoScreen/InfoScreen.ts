import AbstractExercise from '../AbstractExercise';

export type IState = void;

class InfoScreen<Props> extends AbstractExercise<Props, IState> {
  public initiallyCorrect = true;

  public getInitialState() {
    return;
  }

  public isCorrect(state: IState) {
    return true;
  }

  public isSubmitDisabled(state: IState) {
    return false;
  }
}

export default InfoScreen;
