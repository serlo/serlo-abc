import React from 'react';
import renderer from 'react-test-renderer';

import VideoQuestion from './VideoQuestion';

jest.mock('expo', () => ({
  Video: 'Video'
}));

it('renders without crashing', () => {
  const tree = renderer.create(
    <VideoQuestion
      video={require('../../assets/videos/placeholder.mp4')}
      question="Wer ist eine Ananas?"
      answers={[
        'Ich bin eine Ananas',
        'Du bist eine Ananas',
        'Wir sind eine Ananas'
      ]}
    />
  );
  expect(tree).toMatchSnapshot();
});
