import AbstractExercise from '../AbstractExercise';

export interface IProps {
  words: any[];
  correctIndex: number;
}

export type IState = number | null;

class MatchImage extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return null as IState;
  }

  public isCorrect(state: IState) {
    const { correctIndex } = this.getProps();
    return state === correctIndex;
  }
}

export default MatchImage;
