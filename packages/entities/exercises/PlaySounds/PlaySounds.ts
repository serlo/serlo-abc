import AbstractExercise from '../AbstractExercise';

export type IState = boolean;

export type IFeedback = void;

class PlaySounds<Props> extends AbstractExercise<Props, IState, IFeedback> {
  public getInitialState() {
    return false;
  }

  public getFeedback(state: IState) {
    return;
  }

  public isCorrect(state: IState) {
    return state;
  }

  public isSubmitDisabled(state: IState) {
    return !state;
  }
}

export default PlaySounds;
