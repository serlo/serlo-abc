import { Fixtures } from '../helpers';
import { IProps, IState } from './LetterRotated';

const props: IProps[] = [
  {
    letters: ['a', 'N', 'E'],
    rotated: [2],
    angles: ['50deg'],
    difficulty: 0.1
  },
  {
    letters: ['a', 'N', 'E', 's', 'T'],
    rotated: [2],
    angles: ['50deg'],
    difficulty: 0.3
  },
  {
    letters: ['a', 'N', 'E', 's', 'T'],
    rotated: [2, 3],
    angles: ['50deg', '-30deg'],
    difficulty: 0.5
  }
];

const fixtures: Fixtures<IProps, IState> = [
  {
    name: 'difficulty level 1 wrong',
    props: props[0],
    state: [true, false, false, false, false],
    isCorrect: false
  },
  {
    name: 'difficulty level 1 correct',
    props: props[0],
    state: [false, false, true, false, false],
    isCorrect: true
  },
  {
    name: 'difficulty level 2 wrong',
    props: props[1],
    state: [true, false, false, false, false],
    isCorrect: false
  },
  {
    name: 'difficulty level 2 correct',
    props: props[1],
    state: [false, false, true, false, false],
    isCorrect: true
  },
  {
    name: 'difficulty level 3 one wrong',
    props: props[2],
    state: [true, false, true, true, false],
    isCorrect: false
  },
  {
    name: 'difficulty level 3 one correct missing',
    props: props[2],
    state: [false, false, true, false, false],
    isCorrect: false
  },
  {
    name: 'difficulty level 3 correct',
    props: props[2],
    state: [false, false, true, true, false],
    isCorrect: true
  }
];

export default fixtures;
