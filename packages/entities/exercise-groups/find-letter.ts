import { map } from 'ramda';
import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class FindLetter extends AbstractExerciseGroup {
  protected generateExercises() {
    const letter: string = this.newLetter.toLowerCase();
    const words = sample(this.newVocabulary, this.newVocabulary.length);
    const version = sample(['a', 'b'], 1);

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text: `Markieren Sie alle ${letter.toUpperCase()} und ${letter}.`,
        sound: `exercises_markieren_sie_alle_${letter}_${version}`
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
