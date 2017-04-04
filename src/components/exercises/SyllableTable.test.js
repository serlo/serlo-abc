import React from 'react';

import SyllableTable from './SyllableTable';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const tree = renderer.create(
    <SyllableTable
      sound={require('../../assets/sounds/ne.mp3')}
      syllables={['na', 'ne', 'no', 'sa', 'se', 'so', 'ta', 'te', 'to']}
      index={1}
    />
  );
  expect(tree).toMatchSnapshot();
});
