import { storiesOf } from '@storybook/react-native';

import * as VideoQuestion from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/VideoQuestion', module);

createStoriesFromFixtures(story, VideoQuestion);
