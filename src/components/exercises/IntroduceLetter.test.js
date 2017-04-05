import React from 'react';

import IntroduceLetter from './IntroduceLetter';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const tree = renderer.create(
    <IntroduceLetter
      images={[
        require('../assets/images/ananas.jpg'),
        require('../assets/images/apfel.jpg'),
        require('../assets/images/affe.jpg')
      ]}
      letter="Aa"
    />
  );
  expect(tree).toMatchSnapshot();
});
