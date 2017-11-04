import { storiesOf } from '@storybook/react-native';

import * as HasPhoneme from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/HasPhoneme', module);

createStoriesFromFixtures(story, HasPhoneme);
