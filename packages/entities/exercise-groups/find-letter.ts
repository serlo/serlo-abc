import { contains, map } from 'ramda';
import { ExerciseTypes } from '../exercises';
import { capitalizeFirstLetter } from '../word/helpers';
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
          letter === 'ß' ? '' : ` ${capitalizeFirstLetter(letter)} und`
        } ${letter}.`,
        sounds: [`exercises_markieren_sie_alle`, letter]
      }),
      ...this.getExplanationVideos(letter),
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

  private getExplanationVideos(letter: string) {
    if (contains(letter, ['a', 'e', 'n'])) {
      return [
        this.createExercise(ExerciseTypes.InfoScreen, {
          type: 'TutorialVideo',
          video: `explanation_find_letter_${letter}_w_letter`
        }),
        this.createExercise(ExerciseTypes.InfoScreen, {
          type: 'TutorialVideo',
          video: `explanation_find_letter_${letter}_wo_letter`
        })
      ];
    }

    return [];
  }
}
