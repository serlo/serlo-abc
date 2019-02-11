import { contains, map, without } from 'ramda';
import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class HasPhoneme extends AbstractExerciseGroup {
  protected generateExercises() {
    if (!this.newLetter) {
      return [];
    }
    const numberOfOldWords: number = 6;
    const oldWords = sample(
      without(this.newVocabulary, this.vocabulary),
      numberOfOldWords
    );
    const words = sample(
      [...oldWords, ...this.newVocabulary],
      this.newVocabulary.length + numberOfOldWords
    );

    const version = sample(['a', 'b'], 1);

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text: 'Hören Sie den Laut?',
        sound: `exercises_hoeren_sie_den_laut_${version}`
      }),
      ...this.getExplanationVideos(this.newLetter.toLowerCase()),
      ...map(word => {
        return this.createExercise(ExerciseTypes.HasPhoneme, {
          type: 'HasPhoneme',
          word,
          phoneme: this.newLetter
        });
      }, words)
    ];
  }

  private getExplanationVideos(letter: string) {
    if (contains(letter, ['h', 'i', 'r'])) {
      return [
        this.createExercise(ExerciseTypes.InfoScreen, {
          type: 'TutorialVideo',
          video: `explanation_has_phoneme_${letter}_w_phoneme`
        }),
        this.createExercise(ExerciseTypes.InfoScreen, {
          type: 'TutorialVideo',
          video: `explanation_has_phoneme_${letter}_wo_phoneme`
        })
      ];
    }

    return [];
  }
}
