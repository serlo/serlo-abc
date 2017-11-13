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

export interface IFeedback {
  highlightedChoice?: number;
}

class VideoQuestion extends AbstractExercise<IProps, IState, IFeedback> {
  public getInitialState() {
    return undefined;
  }

  public getFeedback(selectedIndex: IState) {
    if (this.isCorrect(selectedIndex)) {
      return {};
    }
    return {
      highlightedChoice: selectedIndex
    };
  }

  public isCorrect(selectedIndex: IState) {
    const { correctIndex } = this.props;
    return selectedIndex === correctIndex;
  }
}

export default VideoQuestion;
