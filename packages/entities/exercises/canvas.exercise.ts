import {
  AbstractExercise,
  ExerciseFixture
} from './abstract-exercise.interface';

export type CanvasState = boolean;
export type CanvasFeedback = void;

export class Canvas<P> extends AbstractExercise<
  P,
  CanvasState,
  CanvasFeedback
> {
  public static fixtures: Array<
    ExerciseFixture<CanvasState, CanvasFeedback>
  > = [
    {
      name: '',
      props: {},
      state: true,
      feedback: undefined,
      isCorrect: true
    }
  ];

  public getInitialState(): CanvasState {
    return false;
  }

  public getFeedback(state: CanvasState): CanvasFeedback {
    return;
  }

  public isCorrect(state: CanvasState): boolean {
    return true;
  }

  public isSubmitDisabled(state: CanvasState): boolean {
    return !state;
  }
}
