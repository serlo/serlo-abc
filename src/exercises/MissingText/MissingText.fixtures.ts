import { getWordObject } from '../../helpers/words.js';
import { Fixtures } from '../helpers';
import { IProps, IState } from './MissingText';

const props: IProps[] = [
  {
    word: getWordObject('apfel'),
    text: ['A', 'p', 'f', 'e', 'l'],
    missing: 3,
    options: ['a', 'n', 'e']
  },
  {
    word: getWordObject('kiwi'),
    text: ['Das', 'ist', 'keine', 'Ananas'],
    missing: 2,
    options: ['keine', 'eine']
  },
  {
    video: require('../../assets/videos/placeholder.mp4'),
    text: ['Ich', 'bin', 'Anna'],
    missing: 2,
    options: ['Nena', 'Anna']
  }
];

const fixtures: Fixtures<IProps, IState> = [
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
