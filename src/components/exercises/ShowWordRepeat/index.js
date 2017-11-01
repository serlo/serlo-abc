import React from 'react';

import { RepeatSound } from '../../../../packages/entities/exercises';
import Word from '../../../word';
import ShowWord from '../ShowWord/ShowWord';

const Component = props => <ShowWord {...props} isRepeat />;

export const Exercise = RepeatSound.Exercise;
export const fixtures = RepeatSound.createFixtures([
  {
    name: 'Ananas',
    props: {
      word: new Word('ananas'),
      letter: 'A'
    }
  }
]);
export { Component };
