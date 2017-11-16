// TODO: don't depend on React Native app
import Word from '../../../../src/word';
import { Fixtures } from '../helpers';
import { FindLetterProps, FindLetterState } from './FindLetter';

const props: FindLetterProps = {
  word: new Word('ananas'),
  letter: 'A'
};

const fixtures: Fixtures<FindLetterProps, FindLetterState> = [
  {
    name: 'all correct letters',
    props,
    state: [true, false, true, false, true, false],
    isCorrect: true
  },
  {
    name: 'one wrong letter',
    state: [true, true, true, false, true, false],
    props,
    isCorrect: false
  },
  {
    name: 'some but not all correct letters',
    state: [true, false, false, false, true, false],
    props,
    isCorrect: false
  }
];

export default fixtures;
