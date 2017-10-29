import { InfoScreen } from '../../../exercises';
import Component from './ShowLetter';

export const Exercise = InfoScreen.Exercise;
export const fixtures = InfoScreen.createFixtures([
  {
    name: 'A',
    props: {
      letter: 'A',
      sound: require('../../../assets/sounds/a.mp3')
    }
  },
  {
    name: 'a',
    props: {
      letter: 'a',
      sound: require('../../../assets/sounds/a.mp3')
    }
  }
]);
export { Component };
