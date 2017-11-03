import { InfoScreen } from '../../../../packages/entities/exercises';
import loadSound from '../../../assets/sounds';
import Component from './ShowLetter';

export const Exercise = InfoScreen.Exercise;
export const fixtures = InfoScreen.createFixtures([
  {
    name: 'A',
    props: {
      letter: 'A',
      sound: loadSound.a()
    }
  },
  {
    name: 'a',
    props: {
      letter: 'a',
      sound: loadSound.a()
    }
  }
]);
export { Component };
