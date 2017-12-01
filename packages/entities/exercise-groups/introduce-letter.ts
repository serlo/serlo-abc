import { ExerciseTypes } from '../exercises';
import { capitalizeFirstLetter, sampleForletter } from '../word/helpers';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class IntroduceLetter extends AbstractExerciseGroup {
  protected generateExercises() {
    const letter: string = this.props.letter.toLowerCase();
    const words = sampleForletter(letter)(this.newVocabulary, 3);

    return [
      this.createExercise(ExerciseTypes.InfoScreen, {
        type: 'IntroduceLetter',
        letter: `${capitalizeFirstLetter(letter)}${
          letter.length > 1 ? ' ' : ''
        }${letter}`,
        words
      })
    ];
  }
}
