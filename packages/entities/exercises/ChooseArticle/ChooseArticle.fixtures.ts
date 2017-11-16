// TODO: don't depend on React Native app
import Word from '../../../../src/word';
import { Fixtures } from '../helpers';
import { ChooseArticleProps, ChooseArticleState } from './ChooseArticle';

const fixtures: Fixtures<ChooseArticleProps, ChooseArticleState> = [
  {
    name: 'correct article ananas',
    props: {
      word: new Word('ananas')
    },
    state: 'die',
    isCorrect: true
  },
  {
    name: 'wrong article apfel',
    props: {
      word: new Word('apfel')
    },
    state: 'die',
    isCorrect: false
  }
];

export default fixtures;
