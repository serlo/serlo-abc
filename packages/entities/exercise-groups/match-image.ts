import { indexOf, map, without } from 'ramda';
import { sample } from '../../sample';
import { ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class MatchImage extends AbstractExerciseGroup {
  protected generateExercises() {
    const words = sample(this.newVocabulary, this.newVocabulary.length);
    const version = sample(['a', 'b'], 1);

    return [
      this.createExercise(ExerciseTypes.InfoScreenWithSounds, {
        type: 'ExplanationText',
        text: 'Markieren Sie das richtige Bild.',
        sound: `exercises_markieren_sie_das_richtige_bild_${version}`
      }),
      ...map(word => {
        const otherWords = sample(without([word], this.vocabulary), 3);
        const wordsProp = sample([...otherWords, word], 4);
        return this.createExercise(ExerciseTypes.MatchImage, {
          type: 'MatchImage',
          words: wordsProp,
          correctIndex: indexOf(word, wordsProp)
        });
      }, words)
    ];
  }
}
