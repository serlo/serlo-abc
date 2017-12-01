import { ExerciseTypes } from '../exercises';
import { capitalizeFirstLetter, sampleForletter } from '../word/helpers';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class PresentLetter extends AbstractExerciseGroup {
  protected generateExercises() {
    const letter: string = this.newLetter.toLowerCase();
    const [word] = sampleForletter(letter)(this.newVocabulary, 1);

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ShowLetter',
        letter: capitalizeFirstLetter(letter),
        sound: letter
      }),
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ShowLetter',
        letter,
        sound: letter
      }),
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ShowWord',
        letter,
        word
      })
    ];
  }
}
