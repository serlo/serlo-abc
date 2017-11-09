// @ts-ignore TODO: add declaration file
import { storiesOf } from '@storybook/react-native';

import * as WriteWord from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/WriteWord', module);

// @ts-ignore TODO:
createStoriesFromFixtures(story, WriteWord);
