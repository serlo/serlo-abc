import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { getWordObject } from '../../helpers/words';
import FindLetter from './FindLetter';

storiesOf('exercises/FindLetter', module)
  .add('Ananas', () => <FindLetter word={getWordObject('ananas')} />)
  .add('Apfel', () => <FindLetter word={getWordObject('apfel')} />);
