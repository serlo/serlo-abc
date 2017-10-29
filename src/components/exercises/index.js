import * as FindLetter from './FindLetter';
import * as IntroduceLetter from './IntroduceLetter';

const exercises = {
  FindLetter,
  IntroduceLetter
};

export default type => {
  return exercises[type];
};
