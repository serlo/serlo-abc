import AbstractExercise from '../AbstractExercise';

export type IState = void;
export type IFeedback = void;

class InfoScreen<Props> extends AbstractExercise<Props, IState, IFeedback> {
  public initiallyCorrect = true;

  public getInitialState() {
    return;
  }

  public getFeedback() {
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
