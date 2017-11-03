import React from 'react';
import renderer from 'react-test-renderer';

import loadSound from '../../assets/sounds';
import SyllableTable from './SyllableTable';

it('renders without crashing (3x3)', () => {
  const tree = renderer.create(
    <SyllableTable
      sound={loadSound.ne()}
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
      sound={loadSound.ha()}
      letters={['h', 'n', 'r', 's', 't']}
      vowels={['a', 'e', 'i', 'o']}
      letterIndex={0}
      vowelIndex={0}
    />
  );
  expect(tree).toMatchSnapshot();
});
