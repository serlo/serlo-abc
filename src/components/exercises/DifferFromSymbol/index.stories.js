import { storiesOf } from '@storybook/react-native';

import * as DifferFromSymbol from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/DifferFromSymbol', module);

createStoriesFromFixtures(story, DifferFromSymbol);
