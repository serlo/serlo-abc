import React from 'react';

import renderer from 'react-test-renderer';

jest.mock('expo', () => ({
  Video: 'Video'
}));

const TutorialVideo = require('./TutorialVideo').default;

it('renders without crashing', () => {
  const tree = renderer.create(
    <TutorialVideo video={require('../../assets/videos/placeholder.mp4')} />
  );
  expect(tree).toMatchSnapshot();
});
