import { SerializedProps } from './serialized-props.interface';

export interface ExercisePropsFixture {
  name: string;
  props: SerializedProps;
}
export interface ExerciseFixture<S, F> {
  name: string;
  props: SerializedProps;
  state: S;
  feedback: F;
  isCorrect: boolean;
}

export abstract class AbstractExercise<P, S, F> {
  /**
   * Example props that can be used to generate stories / unit tests for the view. The props will still be processed by `EntityFactory`.
   * @member propsFixtures
   */
  public static propsFixtures: ExercisePropsFixture[] = [];
  /**
   * Fixtures to automatically generate unit tests. Can also be used to generate stories for the view.
   * Should use `propsFixtures`.
   * @member fixtures
   */
  public fixtures: Array<ExerciseFixture<S, F>> = [];

  /**
   * States iff the exercise is solved initially (e.g. because the exercise
   * represents a instruction screen)
   * @member initiallyCorrect
   */
  public initiallyCorrect: boolean = false;

  /**
   * @param props the props that will be passed down to the exercise view
   */
  constructor(public props: P) {}

  /**
   * @returns the initial state of the exercise
   */
  public abstract getInitialState(): S;

  /**
   * @param state the state of the exercise
   * @returns a representation of the feedback for the state
   */
  public abstract getFeedback(state: S): F;

  /**
   * Checks if a given state represents a correct solution
   * @param state the state of the exercise
   * @returns true iff the state represents a correct solution
   */
  public abstract isCorrect(state: S): boolean;

  /**
   * Regulates if the submit button is disabled. By default, the button is
   * disabled iff the state is undefined.
   * @param state the state of the exercise
   * @returns true iff the submit button should be disabled
   */
  public isSubmitDisabled(state: S): boolean {
    return typeof state === 'undefined';
  }
}
