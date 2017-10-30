import { getWordObject } from '../../helpers/words.js';
import { Fixtures } from '../helpers';
import { IProps, IState } from './ChooseArticle';

const fixtures: Fixtures<IProps, IState> = [
  {
    name: 'correct article ananas',
    props: {
      word: getWordObject('ananas')
    },
    state: 'die',
    isCorrect: true
  },
  {
    name: 'wrong article apfel',
    props: {
      word: getWordObject('apfel')
    },
    state: 'die',
    isCorrect: false
  }
];

export default fixtures;
