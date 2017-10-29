import { storiesOf } from '@storybook/react-native';

import * as FindLetter from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/FindLetter', module);

createStoriesFromFixtures(story, FindLetter);
