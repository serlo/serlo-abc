import React from 'react';

import LetterRotated from './LetterRotated';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const tree = renderer.create(
    <LetterRotated
      letters={['a', 'N', 'E', 's', 'T']}
      rotated={4}
      angle="50deg"
    />
  );
  expect(tree).toMatchSnapshot();
});
