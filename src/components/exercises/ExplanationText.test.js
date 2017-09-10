import React from 'react';
import renderer from 'react-test-renderer';

import ExplanationText from './ExplanationText';

it('renders without crashing', () => {
  const tree = renderer.create(
    <ExplanationText
      text="Wiederholen Sie den Buchstaben."
      sound={require('../../assets/sounds/exercises/wiederholen_sie_den_buchstaben_a.mp3')}
    />
  );
  expect(tree).toMatchSnapshot();
});
