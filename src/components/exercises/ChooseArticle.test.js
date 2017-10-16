import React from 'react';
import renderer from 'react-test-renderer';

import { getWordObject } from '../../helpers/words';
import ChooseArticle from './ChooseArticle';

it('renders without crashing', () => {
  const tree = renderer.create(
    <ChooseArticle word={getWordObject('ananas')} />
  );
  expect(tree).toMatchSnapshot();
});
