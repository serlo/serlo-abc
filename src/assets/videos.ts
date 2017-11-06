import { IVideoAsset } from '../types/assets';

const videos: { [id: string]: () => IVideoAsset } = {
  explanation_show_letter: () =>
    require('./videos/explanation_show_letter.mp4'),
  explanation_show_word: () => require('./videos/explanation_show_word.mp4'),
  praise1: () => require('./videos/praise1.mp4'),
  praise2: () => require('./videos/praise2.mp4'),
  praise3: () => require('./videos/praise3.mp4'),
  praise4: () => require('./videos/praise4.mp4'),
  praise5: () => require('./videos/praise5.mp4'),
  praise6: () => require('./videos/praise6.mp4'),
  praise7: () => require('./videos/praise7.mp4'),
  praise8: () => require('./videos/praise8.mp4'),
  praise9: () => require('./videos/praise9.mp4'),
  praise10: () => require('./videos/praise10.mp4'),
  praise11: () => require('./videos/praise11.mp4'),
  praise12: () => require('./videos/praise12.mp4'),
  video_ane: () => require('./videos/video_ane.mp4')
};

export default videos;
