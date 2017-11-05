import React from 'react';

import { PlaySounds } from '../../../../packages/entities/exercises';
import Word from '../../../word';
import ShowWord from '../ShowWord/ShowWord';

const Component = props => <ShowWord {...props} repeat />;

export const Exercise = PlaySounds.Exercise;
export const fixtures = PlaySounds.createFixtures([
  {
    name: 'Ananas',
    props: {
      word: new Word('ananas'),
      letter: 'A'
    }
  }
]);
export { Component };
