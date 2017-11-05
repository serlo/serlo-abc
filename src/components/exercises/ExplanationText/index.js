import { InfoScreenWithSounds } from '../../../../packages/entities/exercises';
import Component from './ExplanationText';

import loadSound from '../../../assets/sounds';

export const Exercise = InfoScreenWithSounds.Exercise;
export const fixtures = InfoScreenWithSounds.createFixtures([
  {
    name: 'Wiederholen Sie den Buchstaben.',
    props: {
      text: 'Wiederholen Sie den Buchstaben.',
      sound: loadSound['exercises_wiederholen_sie_den_buchstaben_a']()
    }
  }
]);
export { Component };
