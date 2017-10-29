import { storiesOf } from '@storybook/react-native';

import * as HearWord from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/HearWord', module);

createStoriesFromFixtures(story, HearWord);
