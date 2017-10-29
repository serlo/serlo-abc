import { InfoScreen } from '../../../exercises';
import { getWordObject } from '../../../helpers/words';
import Component from './ShowWord';

export const Exercise = InfoScreen.Exercise;
export const fixtures = InfoScreen.createFixtures([
  {
    name: 'Ananas',
    props: {
      word: getWordObject('ananas'),
      letter: 'A'
    }
  }
]);
export { Component };
