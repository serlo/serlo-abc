import 'react-native';
import React from 'react';
import App from '.';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
