import React from 'react';

import { RepeatSound } from '../../../exercises';
import { getWordObject } from '../../../helpers/words';
import ShowWord from '../ShowWord/ShowWord';

const Component = props => <ShowWord {...props} isRepeat />;

export const Exercise = RepeatSound.Exercise;
export const fixtures = RepeatSound.createFixtures([
  {
    name: 'Ananas',
    props: {
      word: getWordObject('ananas'),
      letter: 'A'
    }
  }
]);
export { Component };
