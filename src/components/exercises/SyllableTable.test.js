import React from 'react';

import SyllableTable from './SyllableTable';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const tree = renderer.create(
    <SyllableTable
      sound={require('../../assets/sounds/ne.mp3')}
      letters={['n', 's', 't']}
      vowels={['a', 'e', 'o']}
      indices={{ letter: 0, vowel: 1 }}
    />
  );
  expect(tree).toMatchSnapshot();
});
