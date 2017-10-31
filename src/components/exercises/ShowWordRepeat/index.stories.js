import { storiesOf } from '@storybook/react-native';

import * as ShowWordRepeat from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/ShowWordRepeat', module);

createStoriesFromFixtures(story, ShowWordRepeat);
