import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { getWordObject } from '../../helpers/words';
import ChooseArticle from './ChooseArticle';

storiesOf('exercises/ChooseArticle', module)
  .add('Ananas', () => <ChooseArticle word={getWordObject('ananas')} />)
  .add('Apfel', () => <ChooseArticle word={getWordObject('apfel')} />);
