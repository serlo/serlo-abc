import { map } from 'ramda';
import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class FindLetter extends AbstractExerciseGroup {
  protected generateExercises() {
    if (!this.newLetter) {
      return [];
    }

    const letter = this.newLetter.toLowerCase();
    const words = this.newVocabulary;

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text: `Markieren Sie alle${
          letter === 'ß' ? '' : ` ${letter.toUpperCase()} und`
        } ${letter}.`,
        sounds: [`exercises_markieren_sie_alle`, letter]
      }),
      ...map(
        word =>
          this.createExercise(ExerciseTypes.FindLetter, {
            type: 'FindLetter',
            word,
            letter
          }),
        words
      )
    ];
  }
}
