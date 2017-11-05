import AbstractExercise from '../AbstractExercise';

export type IState = boolean;

class InfoScreenWithSounds<Props> extends AbstractExercise<Props, IState> {
  public initiallyCorrect = true;

  public getInitialState() {
    return false;
  }

  public isCorrect(state: IState) {
    return true;
  }

  public isSubmitDisabled(state: IState) {
    return !state;
  }
}

export default InfoScreenWithSounds;
