import ExplanationText from './ExplanationText/ExplanationText';
import FindLetter from './FindLetter/FindLetter';
import IntroduceLetter from './IntroduceLetter/IntroduceLetter';
import ShowLetter from './ShowLetter/ShowLetter';
import ShowWord from './ShowWord/ShowWord';
// import * as ShowWordRepeat from './ShowWordRepeat';
import TutorialVideo from './TutorialVideo/TutorialVideo';
import PraiseVideo from './PraiseVideo/PraiseVideo';
import MatchImage from './MatchImage/MatchImage';
import { WriteLetter } from './WriteLetter/write-letter';
// import * as WriteWord from './WriteWord';

// const exercises = {
//   ExplanationText,
//   FindLetter,
//   IntroduceLetter,
//   MatchImage,
//   PraiseVideo,
//   ShowLetter,
//   ShowLetterRepeat,
//   ShowWord,
//   ShowWordRepeat,
//   TutorialVideo,
//   WriteLetter,
//   WriteWord
// };

// export default type => {
//   return exercises[type];
// };

export const ExerciseComponents = {
  ExplanationText,
  FindLetter,
  IntroduceLetter,
  MatchImage,
  PraiseVideo,
  ShowLetter,
  ShowWord,
  TutorialVideo,
  WriteLetter
};
