import { getWordObject } from '../../helpers/words.js';
import { Fixtures } from '../helpers';
import { IProps, IState } from './HearWord';

const props: IProps = {
  words: [getWordObject('apfel'), getWordObject('nase'), getWordObject('ball')],
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
