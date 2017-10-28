abstract class AbstractExercise {
  protected props: { [propName: string]: any };

  constructor(props: { [propName: string]: any }) {
    this.props = props;
  }

  public getInitialState(): { [propName: string]: any } {
    return this.props;
  }

  public abstract isCorrect(state: any): boolean;
}

export default AbstractExercise;
