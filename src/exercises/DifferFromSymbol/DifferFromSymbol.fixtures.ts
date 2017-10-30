import { Fixtures } from '../helpers';
import { IProps, IState } from './DifferFromSymbol';

const props: IProps = {
  symbols: ['X', 'X', 'X', 'X', 'M'],
  correctIndex: 4
};

const fixtures: Fixtures<IProps, IState> = [
  {
    name: 'm right',
    props,
    state: 4,
    isCorrect: true
  },
  {
    name: 'm wrong',
    props,
    state: 2,
    isCorrect: false
  }
];

export default fixtures;
