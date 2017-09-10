import React from 'react';
import renderer from 'react-test-renderer';

import LetterRotated from './LetterRotated';

it('renders without crashing (difficulty level 1)', () => {
  const tree = renderer.create(
    <LetterRotated
      letters={['a', 'N', 'E']}
      rotated={[4]}
      angles={['50deg']}
      difficulty={0.1}
    />
  );
  expect(tree).toMatchSnapshot();
});

it('renders without crashing (difficulty level 2)', () => {
  const tree = renderer.create(
    <LetterRotated
      letters={['a', 'N', 'E', 's', 'T']}
      rotated={[4]}
      angles={['50deg']}
      difficulty={0.3}
    />
  );
  expect(tree).toMatchSnapshot();
});

it('renders without crashing (difficulty level 3)', () => {
  const tree = renderer.create(
    <LetterRotated
      letters={['a', 'N', 'E', 's', 'T']}
      rotated={[3, 4]}
      angles={['50deg', '-30deg']}
      difficulty={0.5}
    />
  );
  expect(tree).toMatchSnapshot();
});
