import * as FindLetter from './FindLetter';
import * as IntroduceLetter from './IntroduceLetter';
import * as ShowLetter from './ShowLetter';

const exercises = {
  FindLetter,
  IntroduceLetter,
  ShowLetter
};

export default type => {
  return exercises[type];
};
