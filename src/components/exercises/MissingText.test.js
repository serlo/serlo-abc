import React from 'react';
import renderer from 'react-test-renderer';

import { getWordObject } from '../../helpers/words';
import MissingLetter from './MissingText';

it('renders without crashing', () => {
  const tree = renderer.create(
    <MissingLetter
      word={getWordObject('apfel')}
      text={['A', 'p', 'f', 'e', 'l']}
      missing={3}
      options={['a', 'n', 'e']}
    />
  );
  expect(tree).toMatchSnapshot();
});
