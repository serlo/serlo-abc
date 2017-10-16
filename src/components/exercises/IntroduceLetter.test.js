import React from 'react';
import renderer from 'react-test-renderer';

import { getWordObject } from '../../helpers/words';
import IntroduceLetter from './IntroduceLetter';

it('renders without crashing', () => {
  const tree = renderer.create(
    <IntroduceLetter
      words={[
        getWordObject('ananas'),
        getWordObject('apfel'),
        getWordObject('affe')
      ]}
      letter="Aa"
    />
  );
  expect(tree).toMatchSnapshot();
});
