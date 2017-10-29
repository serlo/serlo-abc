import { storiesOf } from '@storybook/react-native';

import * as IntroduceLetter from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/IntroduceLetter', module);

createStoriesFromFixtures(story, IntroduceLetter);
