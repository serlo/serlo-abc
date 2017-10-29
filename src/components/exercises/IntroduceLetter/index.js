import { getWordObject } from '../../../helpers/words';
import { InfoScreen } from '../../../exercises';
import Component from './IntroduceLetter';

export const Exercise = InfoScreen.Exercise;
export const fixtures = InfoScreen.createFixtures([
  {
    name: 'A',
    props: {
      words: [
        getWordObject('ananas'),
        getWordObject('apfel'),
        getWordObject('affe')
      ],
      letter: 'Aa'
    }
  }
]);
export { Component };
