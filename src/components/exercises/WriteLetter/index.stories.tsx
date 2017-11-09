// @ts-ignore TODO: add declaration file
import { storiesOf } from '@storybook/react-native';

import * as WriteLetter from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/WriteLetter', module);

// @ts-ignore TODO:
createStoriesFromFixtures(story, WriteLetter);
