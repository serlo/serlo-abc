import { storiesOf } from '@storybook/react-native';

import * as LetterRotated from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/LetterRotated', module);

createStoriesFromFixtures(story, LetterRotated);
