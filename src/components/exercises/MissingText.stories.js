import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { getWordObject } from '../../helpers/words';
import MissingText from './MissingText';

storiesOf('exercises/MissingLetter', module)
  .add('Apfel', () => (
    <MissingText
      word={getWordObject('apfel')}
      text={['A', 'p', 'f', 'e', 'l']}
      missing={3}
      options={['a', 'n', 'e']}
    />
  ))
  .add('Missing word with picture', () => (
    <MissingText
      word={getWordObject('kiwi')}
      text={['Das', 'ist', 'keine', 'Ananas']}
      missing={2}
      options={['keine', 'eine']}
    />
  ))
  .add('Missing word with video', () => (
    <MissingText
      video={require('../../assets/videos/placeholder.mp4')}
      text={['Ich', 'bin', 'Anna']}
      missing={2}
      options={['Nena', 'Anna']}
    />
  ));
