import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { getWordObject } from '../../helpers/words';
import ShowWord from './ShowWord';

storiesOf('exercises/ShowWord', module)
  .add('Ananas', () => <ShowWord word={getWordObject('ananas')} letter="A" />)
  .add('Affe', () => <ShowWord word={getWordObject('affe')} letter="A" />);
