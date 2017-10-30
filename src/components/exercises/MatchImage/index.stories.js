import { storiesOf } from '@storybook/react-native';

import * as MatchImage from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/MatchImage', module);

createStoriesFromFixtures(story, MatchImage);
