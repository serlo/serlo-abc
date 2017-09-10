import React from 'react';
import renderer from 'react-test-renderer';

import ChooseArticle from './ChooseArticle';

it('renders without crashing', () => {
  const tree = renderer.create(
    <ChooseArticle
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
