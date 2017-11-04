import Word from '../../../../src/word';
import { Fixtures } from '../helpers';
import { IProps, IState } from './HasPhoneme';

const props: IProps = {
  word: new Word('gabel'),
  phoneme: 'B'
};

const fixtures: Fixtures<IProps, IState> = [
  {
    name: 'affirmative choice',
    props,
    state: { containsPhoneme: true, soundsPlayed: true },
    isCorrect: true
  },
  {
    name: 'negative choice',
    state: { containsPhoneme: false, soundsPlayed: true },
    props,
    isCorrect: false
  }
];

export default fixtures;
