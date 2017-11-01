import { Fixtures } from '../helpers';
import { IProps, IState } from './VideoQuestion';

const props: IProps = {
  video: require('./../../../../src/assets/videos/placeholder.mp4'),
  question: 'Wer ist eine Ananas?',
  answers: [
    'Ich bin eine Ananas',
    'Du bist eine Ananas',
    'Wir sind eine Ananas'
  ],
  correctIndex: 0
};

const fixtures: Fixtures<IProps, IState> = [
  {
    name: 'correct selected',
    props,
    state: 0,
    isCorrect: true
  },
  {
    name: 'wrong selected',
    props,
    state: 1,
    isCorrect: false
  }
];

export default fixtures;
