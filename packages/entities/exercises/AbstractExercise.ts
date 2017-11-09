abstract class AbstractExercise<Props, State, Feedback> {
  /**
   * States iff the exercise is solved initially (e.g. because the exercise
   * represents a instruction screen)
   * @member initiallyCorrect
   */
  public initiallyCorrect: boolean = false;
  /**
   * States iff the exercise can be submitted by swiping
   * @member enableSubmitBySwipe
   */
  public enableSubmitBySwipe: boolean = true;

  /**
   * @param props the props that will be passed down to the exercise view
   */
  constructor(public props: Props) {}

  /**
   * @returns the initial state of the exercise
   */
  public abstract getInitialState(): State;

  /**
   * @param state the state of the exercise
   * @returns a representation of the feedback for the state
   */
  public abstract getFeedback(state: State): Feedback;

  /**
   * Checks if a given state represents a correct solution
   * @param state the state of the exercise
   * @returns true iff the state represents a correct solution
   */
  public abstract isCorrect(state: State): boolean;

  /**
   * Regulates if the submit button is disabled. By default, the button is
   * disabled iff the state is undefined.
   * @param state the state of the exercise
   * @returns true iff the submit button should be disabled
   */
  public isSubmitDisabled(state: State): boolean {
    return typeof state === 'undefined';
  }
}

export default AbstractExercise;
