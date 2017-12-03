import {
  filter,
  identity,
  intersection,
  join,
  map,
  times,
  without
} from 'ramda';
import { sample } from '../../sample';
import { AbstractExercise, ExerciseTypes } from '../exercises';
import { AbstractExerciseGroup } from './abstract-exercise-group.interface';

export class ConnectSyllables extends AbstractExerciseGroup {
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
        text: 'Verbinden Sie die Silben.',
        sound: `exercises_verbinden_sie_die_silben_${version}`
      }),
      ...(filter(
        exercise => !!exercise,
        map(word => {
          const wordObj = this.createWord(word);
          if (!wordObj) {
            return undefined;
          }
          const syllablesString = wordObj.getRawSingular();
          if (!syllablesString || syllablesString.indexOf('|') === -1) {
            return undefined;
          }
          const text = syllablesString.replace(/['-]/g, '').split('|');

          const missing = sample(times(identity, text.length), 1);
          const knownVocals = intersection(
            ['a', 'e', 'i', 'o', 'u'],
            this.letters
          );

          const options = map(
            missingLetterIndex =>
              map(
                replacement =>
                  text[missingLetterIndex].replace(
                    new RegExp(`[${join('', knownVocals)}]`, 'g'),
                    replacement
                  ),
                knownVocals
              ),
            missing
          );
          return this.createExercise(ExerciseTypes.MissingText, {
            type: 'MissingText',
            word,
            text,
            missing,
            options
          });
        }, words)
        /* tslint:disable-next-line:no-any */
      ) as Array<AbstractExercise<any, any, any>>)
    ];
  }
}
