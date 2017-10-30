import React from 'react';
import renderer from 'react-test-renderer';

import { AppRoutes } from '.';

jest.mock('react-router-native', () => ({
  NativeRouter: 'NativeRouter',
  Route: 'Route'
}));

it('renders without crashing', () => {
  const tree = renderer.create(<AppRoutes />);
  expect(tree).toMatchSnapshot();
});
