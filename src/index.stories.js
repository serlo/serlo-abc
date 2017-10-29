import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { MemoryRouter } from 'react-router-native';

import App, { AppRoutes } from '.';

storiesOf('App', module).add('default', () => <App />);

storiesOf('screens', module).add('Splash', () => (
  <MemoryRouter initialEntries={['/']} initialIndex={0}>
    <AppRoutes />
  </MemoryRouter>
));

storiesOf('screens', module).add('Course', () => (
  <MemoryRouter initialEntries={['/', '/course']} initialIndex={1}>
    <AppRoutes />
  </MemoryRouter>
));

storiesOf('screens', module).add('Section', () => (
  <MemoryRouter
    initialEntries={[
      '/',
      '/course',
      '/section/b3e14abb-ce08-41c4-bc3f-3c1a86998f51'
    ]}
    initialIndex={2}
  >
    <AppRoutes />
  </MemoryRouter>
));
