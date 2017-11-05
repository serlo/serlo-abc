import { InfoScreenWithSounds } from '../../../../packages/entities/exercises';
import loadSound from '../../../assets/sounds';
import Component from './ShowLetter';

export const Exercise = InfoScreenWithSounds.Exercise;
export const fixtures = InfoScreenWithSounds.createFixtures([
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
