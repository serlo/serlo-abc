import { storiesOf } from '@storybook/react-native';

import * as ShowWord from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/ShowWord', module);

createStoriesFromFixtures(story, ShowWord);
