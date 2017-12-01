import {
  AbstractExercise,
  ExerciseFixture
} from './abstract-exercise.interface';

export type InfoScreenWithSoundsState = boolean;
export type InfoScreenWithSoundsFeedback = void;

export class InfoScreenWithSounds<Props> extends AbstractExercise<
  Props,
  InfoScreenWithSoundsState,
  InfoScreenWithSoundsFeedback
> {
  public static fixtures: Array<
    ExerciseFixture<InfoScreenWithSoundsState, InfoScreenWithSoundsFeedback>
  > = [
    {
      name: '',
      props: {},
      state: true,
      feedback: undefined,
      isCorrect: true
    }
  ];

  public initiallyCorrect = true;

  public getInitialState(): InfoScreenWithSoundsState {
    return false;
  }

  public getFeedback(): InfoScreenWithSoundsFeedback {
    return;
  }

  public isCorrect(state: InfoScreenWithSoundsState): boolean {
    return true;
  }

  public isSubmitDisabled(state: InfoScreenWithSoundsState): boolean {
    return !state;
  }
}
