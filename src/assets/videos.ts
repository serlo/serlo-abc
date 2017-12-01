import { AssetTypes } from '../../packages/entities/asset-resolver';

const videos: { [id: string]: () => AssetTypes.VideoAsset } = {
  explanation_show_letter_hd: () =>
    require('./videos/explanation_show_letter.hd.mp4'),
  explanation_show_word_hd: () =>
    require('./videos/explanation_show_word.hd.mp4'),
  explanation_write_letter_hd: () =>
    require('./videos/explanation_write_letter.hd.mp4'),
  praise1_hd: () => require('./videos/praise1.hd.mp4'),
  praise2_hd: () => require('./videos/praise2.hd.mp4'),
  praise3_hd: () => require('./videos/praise3.hd.mp4'),
  praise4_hd: () => require('./videos/praise4.hd.mp4'),
  praise5_hd: () => require('./videos/praise5.hd.mp4'),
  praise6_hd: () => require('./videos/praise6.hd.mp4'),
  praise7_hd: () => require('./videos/praise7.hd.mp4'),
  praise8_hd: () => require('./videos/praise8.hd.mp4'),
  praise9_hd: () => require('./videos/praise9.hd.mp4'),
  praise10_hd: () => require('./videos/praise10.hd.mp4'),
  praise11_hd: () => require('./videos/praise11.hd.mp4'),
  praise12_hd: () => require('./videos/praise12.hd.mp4'),
  explanation_show_letter_sd: () =>
    require('./videos/explanation_show_letter.sd.mp4'),
  explanation_show_word_sd: () =>
    require('./videos/explanation_show_word.sd.mp4'),
  explanation_write_letter_sd: () =>
    require('./videos/explanation_write_letter.sd.mp4'),
  praise1_sd: () => require('./videos/praise1.sd.mp4'),
  praise2_sd: () => require('./videos/praise2.sd.mp4'),
  praise3_sd: () => require('./videos/praise3.sd.mp4'),
  praise4_sd: () => require('./videos/praise4.sd.mp4'),
  praise5_sd: () => require('./videos/praise5.sd.mp4'),
  praise6_sd: () => require('./videos/praise6.sd.mp4'),
  praise7_sd: () => require('./videos/praise7.sd.mp4'),
  praise8_sd: () => require('./videos/praise8.sd.mp4'),
  praise9_sd: () => require('./videos/praise9.sd.mp4'),
  praise10_sd: () => require('./videos/praise10.sd.mp4'),
  praise11_sd: () => require('./videos/praise11.sd.mp4'),
  praise12_sd: () => require('./videos/praise12.sd.mp4')
};

export default videos;
