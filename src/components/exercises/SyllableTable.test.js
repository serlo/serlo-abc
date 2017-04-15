import React from 'react';

import SyllableTable from './SyllableTable';

import renderer from 'react-test-renderer';

it('renders without crashing (3x3)', () => {
  const tree = renderer.create(
    <SyllableTable
      sound={require('../../assets/sounds/ne.mp3')}
      letters={['n', 's', 't']}
      vowels={['a', 'e', 'o']}
      letterIndex={0}
      vowelIndex={1}
    />
  );
  expect(tree).toMatchSnapshot();
});

it('renders without crashing (5x4)', () => {
  const tree = renderer.create(
    <SyllableTable
      sound={require('../../assets/sounds/ha.mp3')}
      letters={['h', 'n', 'r', 's', 't']}
      vowels={['a', 'e', 'i', 'o']}
      letterIndex={0}
      vowelIndex={0}
    />
  );
  expect(tree).toMatchSnapshot();
});
