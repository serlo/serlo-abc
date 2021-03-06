import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { capitalizeFirstLetter } from '../word/helpers';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class RepeatLetter extends AbstractExerciseGroup {
  protected generateExercises() {
    if (!this.newLetter) {
      return [];
    }

    const letter = this.newLetter.toLowerCase();

    const version = sample(['a', 'b'], 1);

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text: 'Wiederholen Sie den Buchstaben.',
        sound: `exercises_wiederholen_sie_den_buchstaben_${version}`
      }),
      this.createExercise(ExerciseTypes.InfoScreen, {
        type: 'TutorialVideo',
        video: 'explanation_show_letter'
      }),
      ...(letter === 'ß'
        ? []
        : [
            this.createExercise(ExerciseTypes.PlaySounds, {
              type: 'ShowLetter',
              letter: capitalizeFirstLetter(letter),
              sound: letter,
              repeat: true
            })
          ]),
      this.createExercise(ExerciseTypes.PlaySounds, {
        type: 'ShowLetter',
        letter,
        sound: letter,
        repeat: true
      })
    ];
  }
}
