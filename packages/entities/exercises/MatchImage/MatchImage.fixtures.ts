// TODO: don't depend on React Native app
import Word from '../../../../src/word';
import { Fixtures } from '../helpers';
import { IProps, IState } from './MatchImage';

const props: IProps = {
  words: [
    new Word('affe'),
    new Word('esel'),
    new Word('apfel'),
    new Word('nase')
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
