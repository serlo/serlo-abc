import React from 'react';

import { PlaySounds } from '../../../../packages/entities/exercises';
import loadSound from '../../../assets/sounds';
import ShowLetter from '../ShowLetter/ShowLetter';

const Component = props => <ShowLetter {...props} repeat />;

export const Exercise = PlaySounds.Exercise;
export const fixtures = PlaySounds.createFixtures([
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
