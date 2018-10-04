import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { capitalizeFirstLetter } from '../word/helpers';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class WriteLetter extends AbstractExerciseGroup {
  protected generateExercises() {
    if (!this.newLetter) {
      return [];
    }

    const lowerCaseLetter = this.newLetter.toLowerCase();
    const capitalLetter = capitalizeFirstLetter(lowerCaseLetter);
    const letters = [
      capitalLetter,
      lowerCaseLetter,
      capitalLetter.repeat(2),
      lowerCaseLetter.repeat(2)
    ];
    const version = sample(['a', 'b'], 1);
    const self = this;

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text: 'Schreiben Sie den Buchstaben.',
        sound: `exercises_schreiben_sie_den_buchstaben_${version}`
      }),
      this.createExercise(ExerciseTypes.InfoScreen, {
        type: 'TutorialVideo',
        video: 'explanation_write_letter'
      }),
      ...letters.map(letter =>
        self.createExercise(ExerciseTypes.Canvas, {
          type: 'WriteLetter',
          letter
        })
      )
      /*...(letter === 'ß'
        ? []
        : [
            this.createExercise(ExerciseTypes.Canvas, {
              type: 'WriteLetter',
              letter: capitalizeFirstLetter(letter)
            }),
            this.createExercise(ExerciseTypes.Canvas, {
              type: 'WriteLetter',
              letter: capitalizeFirstLetter(letter)
            }),
            this.createExercise(ExerciseTypes.Canvas, {
              type: 'WriteLetter',
              letter: capitalizeFirstLetter(letter)
            })
          ]),
      this.createExercise(ExerciseTypes.Canvas, {
        type: 'WriteLetter',
        letter
      }),
      this.createExercise(ExerciseTypes.Canvas, {
        type: 'WriteLetter',
        letter
      }),
      this.createExercise(ExerciseTypes.Canvas, {
        type: 'WriteLetter',
        letter
      })*/
    ];
  }
}
