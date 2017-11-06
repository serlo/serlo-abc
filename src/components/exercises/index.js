import * as ExplanationText from './ExplanationText';
import * as FindLetter from './FindLetter';
import * as IntroduceLetter from './IntroduceLetter';
import * as ShowLetter from './ShowLetter';
import * as ShowLetterRepeat from './ShowLetterRepeat';
import * as ShowWord from './ShowWord';
import * as ShowWordRepeat from './ShowWordRepeat';
import * as TutorialVideo from './TutorialVideo';
import * as PraiseVideo from './PraiseVideo';
import * as MatchImage from './MatchImage';

const exercises = {
  ExplanationText,
  FindLetter,
  IntroduceLetter,
  ShowLetter,
  ShowLetterRepeat,
  ShowWord,
  ShowWordRepeat,
  TutorialVideo,
  PraiseVideo,
  MatchImage
};

export default type => {
  return exercises[type];
};
