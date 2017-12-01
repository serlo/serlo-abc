import {
  AbstractExercise,
  ExerciseFixture
} from './abstract-exercise.interface';

export type InfoScreenState = void;
export type InfoScreenFeedback = void;

export class InfoScreen<Props> extends AbstractExercise<
  Props,
  InfoScreenState,
  InfoScreenFeedback
> {
  public static fixtures: Array<
    ExerciseFixture<InfoScreenState, InfoScreenFeedback>
  > = [
    {
      name: '',
      props: {},
      state: undefined,
      feedback: undefined,
      isCorrect: true
    }
  ];

  public initiallyCorrect = true;

  public getInitialState(): InfoScreenState {
    return;
  }

  public getFeedback(): InfoScreenFeedback {
    return;
  }

  public isCorrect(state: InfoScreenState): boolean {
    return true;
  }

  public isSubmitDisabled(state: InfoScreenState): boolean {
    return false;
  }
}
