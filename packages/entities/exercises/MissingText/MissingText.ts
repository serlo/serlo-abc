import { indexOf } from 'ramda';

// TODO: don't depend on React Native app
import { Optional } from '../../../../src/types';
import { IVideoAsset } from '../../../../src/types/assets';
// TODO: don't depend on React Native app
import Word from '../../../../src/word';
import AbstractExercise from '../AbstractExercise';

export interface MissingTextProps {
  word?: Word;
  video?: IVideoAsset;
  text: string[];
  missing: number;
  options: string[];
}

export type MissingTextState = Optional<number>;

export interface MissingTextFeedback {
  wrong?: number;
  correct?: number;
}

class MissingText extends AbstractExercise<
  MissingTextProps,
  MissingTextState,
  MissingTextFeedback
> {
  public getInitialState() {
    return undefined;
  }

  public getFeedback(state: MissingTextState) {
    if (this.isSubmitDisabled(state) || this.isCorrect(state)) {
      return {};
    }

    return {
      wrong: state,
      correct: indexOf(this.props.text[this.props.missing], this.props.options)
    };
  }

  public isCorrect(state: MissingTextState) {
    if (typeof state !== 'undefined') {
      const { options, text, missing } = this.props;
      return text[missing] === options[state];
    }

    return false;
  }
}

export default MissingText;
