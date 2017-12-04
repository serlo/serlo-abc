import { map } from 'ramda';
import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class ShowWords extends AbstractExerciseGroup {
  protected generateExercises() {
    const letter = this.newLetter && this.newLetter.toLowerCase();
    const words = this.newVocabulary;
    const version = sample(['a', 'b'], 1);

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text: 'Hören Sie die Wörter.',
        sound: `exercises_hoeren_sie_die_woerter_${version}`
      }),
      ...map(
        word =>
          this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
            type: 'ShowWord',
            word,
            letter
          }),
        words
      )
    ];
  }
}
