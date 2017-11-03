import React from 'react';

import { RepeatSound } from '../../../../packages/entities/exercises';
import loadSound from '../../../assets/sounds';
import ShowLetter from '../ShowLetter/ShowLetter';

const Component = props => <ShowLetter {...props} isRepeat />;

export const Exercise = RepeatSound.Exercise;
export const fixtures = RepeatSound.createFixtures([
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
