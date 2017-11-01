import Word from '../../../word';
import { InfoScreen } from '../../../../packages/entities/exercises';
import Component from './IntroduceLetter';

export const Exercise = InfoScreen.Exercise;
export const fixtures = InfoScreen.createFixtures([
  {
    name: 'A',
    props: {
      words: [new Word('ananas'), new Word('apfel'), new Word('affe')],
      letter: 'Aa'
    }
  }
]);
export { Component };
