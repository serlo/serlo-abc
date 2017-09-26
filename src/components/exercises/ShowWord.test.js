import React from 'react';
import renderer from 'react-test-renderer';

import { getWordObject } from '../../helpers/words';
import ShowWord from './ShowWord';

it('renders without crashing', () => {
  const tree = renderer.create(
    <ShowWord word={getWordObject('ananas')} letter="A" />
  );
  expect(tree).toMatchSnapshot();
});
