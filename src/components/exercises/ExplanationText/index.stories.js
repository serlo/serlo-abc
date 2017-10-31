import { storiesOf } from '@storybook/react-native';

import * as ExplanationText from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/ExplanationText', module);

createStoriesFromFixtures(story, ExplanationText);
