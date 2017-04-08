import React from 'react';

import FindLetter from './FindLetter';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const tree = renderer.create(
    <FindLetter
      image={require('../../assets/images/ananas.jpg')}
      sounds={[
        require('../../assets/sounds/ananas_short.mp3'),
        require('../../assets/sounds/ananas_long.mp3')
      ]}
      text="Ananas"
    />
  );
  expect(tree).toMatchSnapshot();
});
