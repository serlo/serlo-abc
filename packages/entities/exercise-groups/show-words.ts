import { map } from 'ramda';
import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { capitalizeFirstLetter } from '../word/helpers';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class ShowWords extends AbstractExerciseGroup {
  protected generateExercises() {
    const letter: string = this.props.letter.toLowerCase();
    const words = sample(this.newVocabulary, this.newVocabulary.length);
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
