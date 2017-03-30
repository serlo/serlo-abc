import React from 'react';

import ShowWord from './ShowWord';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const tree = renderer.create(
    <ShowWord
      image={require('../../assets/images/ananas.jpg')}
      sounds={[
        require('../../assets/sounds/ananas_long.mp3'),
        require('../../assets/sounds/ananas_short.mp3')
      ]}
      text="Ananas"
      letter="A"
    />
  );
  expect(tree).toMatchSnapshot();
});
