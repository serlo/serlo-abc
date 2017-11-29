import {
  AbstractExercise,
  ExerciseFixture
} from './abstract-exercise.interface';

export type PlaySoundsState = boolean;

export type PlaySoundsFeedback = void;

export class PlaySounds<Props> extends AbstractExercise<
  Props,
  PlaySoundsState,
  PlaySoundsFeedback
> {
  public static fixtures: Array<
    ExerciseFixture<PlaySoundsState, PlaySoundsFeedback>
  > = [
    {
      name: '',
      props: {},
      isCorrect: false,
      feedback: undefined,
      state: false
    }
  ];

  public getInitialState(): PlaySoundsState {
    return false;
  }

  public getFeedback(state: PlaySoundsState): PlaySoundsFeedback {
    return;
  }

  public isCorrect(state: PlaySoundsState): boolean {
    return state;
  }

  public isSubmitDisabled(state: PlaySoundsState): boolean {
    return !state;
  }
}
