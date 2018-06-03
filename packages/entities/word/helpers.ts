import * as R from 'ramda';

import { sample } from '../../sample/index';

export const capitalizeFirstLetter = (word: string): string => {
  return R.addIndex<string, string>(R.map)(
    (char, index) => (index === 0 ? char.toUpperCase() : char),
    word.split('')
  ).join('');
};

export const startsWith = (letter: string) => (word: string): boolean => {
  return word.startsWith(letter);
};

export const includes = (letter: string) => (word: string): boolean => {
  return word.includes(letter);
};

export const sampleForletter = (letter: string) => (
  collection: string[],
  count: number,
  replacement = false
): string[] => {
  const suitableWords = R.filter(startsWith(letter), collection);

  let words = sample<string>(suitableWords, count, replacement);
  words = [
    ...words,
    ...sample<string>(
      R.filter(
        word => !startsWith(letter)(word) && includes(letter)(word),
        collection
      ),
      count - words.length
    )
  ];
  words = [
    ...words,
    ...sample<string>(
      R.filter(
        word => !startsWith(letter)(word) && !includes(letter)(word),
        collection
      ),
      count - words.length
    )
  ];

  return words;
};
