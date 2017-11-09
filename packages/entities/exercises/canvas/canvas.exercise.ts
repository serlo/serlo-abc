import AbstractExercise from '../AbstractExercise';

export type IState = boolean;

class Canvas<Props> extends AbstractExercise<Props, IState> {
  public enableSubmitBySwipe = false;

  public getInitialState() {
    return false;
  }

  public isCorrect(state: IState) {
    return true;
  }

  public isSubmitDisabled(state: IState) {
    // TODO:
    // return !state;
    return false;
  }
}

export default Canvas;
