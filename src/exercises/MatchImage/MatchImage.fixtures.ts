import { getWordObject } from '../../helpers/words.js';
import { Fixtures } from '../helpers';
import { IProps, IState } from './MatchImage';

const props: IProps = {
  words: [
    getWordObject('affe'),
    getWordObject('esel'),
    getWordObject('apfel'),
    getWordObject('nase')
  ],
  correctIndex: 1
};

const fixtures: Fixtures<IProps, IState> = [
  {
    name: 'correct selected',
    props,
    state: 1,
    isCorrect: true
  },
  {
    name: 'wrong selected',
    props,
    state: 2,
    isCorrect: false
  }
];

export default fixtures;
