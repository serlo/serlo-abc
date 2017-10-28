abstract class AbstractExercise<Props = {}, State = {}> {
  protected props: Props;

  constructor(props: Props) {
    this.props = props;
  }

  public getProps(): Props {
    return this.props;
  }

  public abstract getInitialState(): State;
  public abstract isCorrect(state: State): boolean;
}

export default AbstractExercise;
