import * as ExplanationText from './ExplanationText';
import * as FindLetter from './FindLetter';
import * as IntroduceLetter from './IntroduceLetter';
import * as ShowLetter from './ShowLetter';
import * as ShowWord from './ShowWord';

const exercises = {
  ExplanationText,
  FindLetter,
  IntroduceLetter,
  ShowLetter,
  ShowWord
};

export default type => {
  return exercises[type];
};
