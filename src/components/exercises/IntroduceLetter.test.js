import React from 'react';
import renderer from 'react-test-renderer';

import IntroduceLetter from './IntroduceLetter';

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
