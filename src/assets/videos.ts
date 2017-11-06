import { IVideoAsset } from '../types/assets';

const videos: { [id: string]: () => IVideoAsset } = {
  explanation_show_letter: () =>
    require('./videos/explanation_show_letter.mp4'),
  explanation_show_word: () => require('./videos/explanation_show_word.mp4'),
  praise1: () => require('./videos/praise1.mp4')
};

export default videos;
