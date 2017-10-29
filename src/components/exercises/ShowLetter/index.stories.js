import { storiesOf } from '@storybook/react-native';

import * as ShowLetter from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/ShowLetter', module);

createStoriesFromFixtures(story, ShowLetter);
