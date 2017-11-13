import { addIndex, all, contains, map } from 'ramda';
import AbstractExercise from '../AbstractExercise';

const mapIndexed = addIndex(map);

export interface IProps {
  letters: string[];
  rotated: number[];
  angles: string[];
  difficulty: number;
}

export type IState = boolean[];

export interface IFeedback {
  wrongChoices?: boolean[];
  correctChoice?: boolean[];
  missingCorrectChoices?: boolean[];
}

class LetterRotated extends AbstractExercise<IProps, IState, IFeedback> {
  public getInitialState() {
    return map(() => false, this.props.letters) as IState;
  }

  public getFeedback(selected: IState) {
    if (this.isSubmitDisabled(selected) || this.isCorrect(selected)) {
      return {};
    }
    return {
      wrongChoices: mapIndexed(
        (selection, index) => selection && !contains(index, this.props.rotated),
        selected
      ),
      correctChoices: mapIndexed(
        (selection, index) => selection && contains(index, this.props.rotated),
        selected
      ),
      missingCorrectChoices: mapIndexed(
        (selection, index) => !selection && contains(index, this.props.rotated),
        selected
      )
    };
  }

  public isCorrect(selected: IState) {
    const { letters, rotated } = this.props;

    for (let i = 0; i < letters.length; i++) {
      if (selected[i] !== contains(i, rotated)) {
        return false;
      }
    }
    return true;
  }

  public isSubmitDisabled(selected: IState) {
    return all(sel => !sel, selected);
  }
}

export default LetterRotated;
