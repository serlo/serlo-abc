// TODO: don't depend on React Native app
import { IVideoAsset } from '../../../../src/types/assets';
import { Optional } from '../../../../src/types/index';
import AbstractExercise from '../AbstractExercise';

export interface IProps {
  video: IVideoAsset;
  question: string;
  answers: string[];
  correctIndex: number;
}

export type IState = Optional<number>;

class VideoQuestion extends AbstractExercise<IProps, IState> {
  public getInitialState() {
    return undefined;
  }

  public isCorrect(state: IState) {
    const { correctIndex } = this.getProps();
    return state === correctIndex;
  }
}

export default VideoQuestion;
