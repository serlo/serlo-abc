import React from 'react';

import { RepeatSound } from '../../../../packages/entities/exercises';
import ShowLetter from '../ShowLetter/ShowLetter';

const Component = props => <ShowLetter {...props} isRepeat />;

export const Exercise = RepeatSound.Exercise;
export const fixtures = RepeatSound.createFixtures([
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
