import { map } from 'ramda';
import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class RepeatWords extends AbstractExerciseGroup {
  protected generateExercises() {
    if (!this.newLetter) {
      return [];
    }

    const letter = this.newLetter.toLowerCase();
    const words = this.newVocabulary;
    const version = sample(['a', 'b'], 1);

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text: 'Wiederholen Sie das Wort.',
        sound: `exercises_wiederholen_sie_das_wort_${version}`
      }),
      this.createExercise(ExerciseTypes.InfoScreen, {
        type: 'TutorialVideo',
        video: 'explanation_show_word'
      }),
      ...map(
        word =>
          this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
            type: 'ShowWord',
            word,
            letter,
            repeat: true
          }),
        words
      )
    ];
  }
}
