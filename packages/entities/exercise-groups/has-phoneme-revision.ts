import { map, without } from 'ramda';
import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class HasPhonemeRevision extends AbstractExerciseGroup {
  protected generateExercises() {
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
      ...map(word => {
        const [phoneme] = sample(this.props.letters, 1);
        return this.createExercise(ExerciseTypes.HasPhoneme, {
          type: 'HasPhoneme',
          word,
          phoneme
        });
      }, words)
    ];
  }
}
