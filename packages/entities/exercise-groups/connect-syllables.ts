import {
  contains,
  filter,
  find,
  identity,
  intersection,
  join,
  map,
  times,
  without
} from 'ramda';
// @ts-ignore
import Sentry from '../../../src/helpers/sentry';

import { sample } from '../../sample';
import { AbstractExercise, ExerciseTypes } from '../exercises';
import { capitalizeFirstLetter } from '../word/helpers';
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
      this.createExercise(ExerciseTypes.InfoScreen, {
        type: 'TutorialVideo',
        video: 'explanation_connect_syllables'
      }),
      ...(filter(
        exercise => !!exercise,
        // tslint:disable-next-line:no-any
        map<string, AbstractExercise<any, any, any> | undefined>(word => {
          const wordObj = this.createWord(word);
          if (!wordObj) {
            return undefined;
          }
          const syllablesRawString = wordObj.getRawSingular();
          if (!syllablesRawString || syllablesRawString.indexOf('|') === -1) {
            return undefined;
          }
          const syllables = syllablesRawString.replace(/['-]/g, '').split('|');

          const missingSyllableIndices = sample(
            times(identity, syllables.length),
            1
          );
          try {
            const options = map(missingSyllableIndex => {
              const syllableOptions = this.createOptionsForSyllable(
                syllables[missingSyllableIndex]
              );
              if (!syllableOptions) {
                throw new Error(
                  `ConnectSyllables: Options empty at word ${syllablesRawString}, syllable ${missingSyllableIndex}`
                );
              }
              return syllableOptions;
            }, missingSyllableIndices);

            return this.createExercise(ExerciseTypes.MissingText, {
              type: 'MissingText',
              word,
              text: syllables,
              missing: missingSyllableIndices,
              options
            });
          } catch (err) {
            Sentry.captureException(err);
            return undefined;
          }
        }, words)
        /* tslint:disable-next-line:no-any */
      ) as Array<AbstractExercise<any, any, any>>)
    ];
  }

  private createOptionsForSyllable(syllable: string) {
    // find correct replacements (doubled vowels, diphtongs or knownVowels)
    const replacementSet = this.createCorrectReplacementSet(syllable);
    if (!replacementSet) {
      return undefined;
    }

    // create a syllable option for each element in the replacement set
    const result = map(
      replacement =>
        syllable.replace(
          new RegExp(`(${join('|', replacementSet)})`, 'g'),
          replacement
        ),
      replacementSet
    );

    return contains(syllable, result) ? result : [...result, syllable];
  }

  private createCorrectReplacementSet(syllable: string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const knownVowels = intersection(vowels, this.letters);
    const longVowels = map(vowel => vowel + vowel, vowels);
    const knownLongVowels = map(vowel => vowel + vowel, knownVowels);
    const diphtongs = ['ie', 'ei', 'au', 'eu', 'äu'];
    const umlauts = ['ä', 'ö', 'ü'];

    // start with the sets containing strings of length two!
    const possibleReplacementSetsLowercase = [
      knownLongVowels,
      diphtongs,
      longVowels,
      umlauts,
      knownVowels,
      vowels
    ];
    const possibleReplacementSetsCapitalized = map(
      set => map(capitalizeFirstLetter, set),
      possibleReplacementSetsLowercase
    );
    return find(
      set => set.length > 0 && new RegExp(join('|', set), 'g').test(syllable),
      [
        ...possibleReplacementSetsCapitalized,
        ...possibleReplacementSetsLowercase
      ]
    );
  }
}
