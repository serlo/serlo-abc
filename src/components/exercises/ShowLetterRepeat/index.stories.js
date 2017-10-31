import { storiesOf } from '@storybook/react-native';

import * as ShowLetterRepeat from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/ShowLetterRepeat', module);

createStoriesFromFixtures(story, ShowLetterRepeat);
