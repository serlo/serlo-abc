import { InfoScreen } from '../../../exercises';
import Component from './ExplanationText';

export const Exercise = InfoScreen.Exercise;
export const fixtures = InfoScreen.createFixtures([
  {
    name: 'Wiederholen Sie den Buchstaben.',
    props: {
      text: 'Wiederholen Sie den Buchstaben.',
      sound: require('../../../assets/sounds/exercises/wiederholen_sie_den_buchstaben_a.mp3')
    }
  }
]);
export { Component };
