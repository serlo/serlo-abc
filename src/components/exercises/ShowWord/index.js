import { InfoScreen } from '../../../../packages/entities/exercises';
import Word from '../../../word';
import Component from './ShowWord';

export const Exercise = InfoScreen.Exercise;
export const fixtures = InfoScreen.createFixtures([
  {
    name: 'Ananas',
    props: {
      word: new Word('ananas'),
      letter: 'A'
    }
  }
]);
export { Component };
