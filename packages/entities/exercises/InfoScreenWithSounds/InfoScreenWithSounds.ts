import AbstractExercise from '../AbstractExercise';

export type IState = boolean;

export type IFeedback = void;

class InfoScreenWithSounds<Props> extends AbstractExercise<
  Props,
  IState,
  IFeedback
> {
  public initiallyCorrect = true;

  public getInitialState() {
    return false;
  }

  public getFeedback() {
    return;
  }

  public isCorrect(state: IState) {
    return true;
  }

  public isSubmitDisabled(state: IState) {
    return !state;
  }
}

export default InfoScreenWithSounds;
