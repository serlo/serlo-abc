// TODO: don't depend on React Native app
import { IVideoAsset } from '../../../../src/types/assets';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  video: IVideoAsset;
  question: string;
  answers: string[];
  correctIndex: number;
}

export type IState = number | null;

class VideoQuestion extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return null as IState;
  }

  public isCorrect(state: IState) {
    const { correctIndex } = this.getProps();
    return state === correctIndex;
  }
}

export default VideoQuestion;
