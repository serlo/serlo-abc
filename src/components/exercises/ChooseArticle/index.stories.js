import { storiesOf } from '@storybook/react-native';

import * as ChooseArticle from '.';
import { createStoriesFromFixtures } from '../helpers';

const story = storiesOf('exercises/ChooseArticle', module);

createStoriesFromFixtures(story, ChooseArticle);
