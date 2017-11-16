// TODO: don't depend on React Native app
import Word from '../../../../src/word';
import { Fixtures } from '../helpers';
import { MissingTextProps, MissingTextState } from './MissingText';

const props: MissingTextProps[] = [
  {
    word: new Word('apfel'),
    text: ['A', 'p', 'f', 'e', 'l'],
    missing: 3,
    options: ['a', 'n', 'e']
  },
  {
    word: new Word('kiwi'),
    text: ['Das', 'ist', 'keine', 'Ananas'],
    missing: 2,
    options: ['keine', 'eine']
  },
  {
    video: require('./../../../../src/assets/videos/placeholder.mp4'),
    text: ['Ich', 'bin', 'Anna'],
    missing: 2,
    options: ['Nena', 'Anna']
  }
];

const fixtures: Fixtures<MissingTextProps, MissingTextState> = [
  {
    name: 'Missing Letter: correct selected',
    props: props[0],
    state: 2,
    isCorrect: true
  },
  {
    name: 'Missing Letter: wrong selected',
    props: props[0],
    state: 1,
    isCorrect: false
  },
  {
    name: 'Missing Word with Image: correct selected',
    props: props[1],
    state: 0,
    isCorrect: true
  },
  {
    name: 'Missing Word with Image: wrong selected',
    props: props[1],
    state: 1,
    isCorrect: false
  },
  {
    name: 'Missing Word with Video: correct selected',
    props: props[2],
    state: 1,
    isCorrect: true
  },
  {
    name: 'Missing Word with Video: wrong selected',
    props: props[2],
    state: 0,
    isCorrect: false
  }
];

export default fixtures;
