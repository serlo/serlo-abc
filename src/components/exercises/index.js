import * as ExplanationText from './ExplanationText';
import * as FindLetter from './FindLetter';
import * as IntroduceLetter from './IntroduceLetter';
import * as ShowLetter from './ShowLetter';
import * as ShowLetterRepeat from './ShowLetterRepeat';
import * as ShowWord from './ShowWord';
import * as ShowWordRepeat from './ShowWordRepeat';

const exercises = {
  ExplanationText,
  FindLetter,
  IntroduceLetter,
  ShowLetter,
  ShowLetterRepeat,
  ShowWord,
  ShowWordRepeat
};

export default type => {
  return exercises[type];
};
