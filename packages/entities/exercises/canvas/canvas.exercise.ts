import AbstractExercise from '../AbstractExercise';

export type CanvasState = boolean;

class Canvas<Props> extends AbstractExercise<Props, CanvasState, void> {
  public enableSubmitBySwipe = false;

  public getInitialState() {
    return false;
  }

  public getFeedback(state: CanvasState) {
    return;
  }

  public isCorrect(state: CanvasState) {
    return true;
  }

  public isSubmitDisabled(state: CanvasState) {
    return !state;
  }
}

export default Canvas;
