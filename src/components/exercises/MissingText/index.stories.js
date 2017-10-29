import { storiesOf } from '@storybook/react-native';

import * as MissingText from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/MissingText', module);

createStoriesFromFixtures(story, MissingText);
