import React from 'react';
import renderer from 'react-test-renderer';

import { getWordObject } from '../../helpers/words';
import FindLetter from './FindLetter';

it('renders without crashing', () => {
  const tree = renderer.create(<FindLetter word={getWordObject('ananas')} />);
  expect(tree).toMatchSnapshot();
});
