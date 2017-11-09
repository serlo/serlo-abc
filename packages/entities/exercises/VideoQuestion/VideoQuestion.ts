// TODO: don't depend on React Native app
import { Optional } from '../../../../src/types';
import { IVideoAsset } from '../../../../src/types/assets';
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

  public isCorrect(selectedIndex: IState) {
    const { correctIndex } = this.props;
    return selectedIndex === correctIndex;
  }
}

export default VideoQuestion;
