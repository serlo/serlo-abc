import { IImageAsset } from '../types/assets';

const images: { [id: string]: () => IImageAsset } = {
  play: () => require('./images/play.png'),
  repeat: () => require('./images/repeat.png'),
  serlo: () => require('./images/serlo.png'),
  speaker: () => require('./images/speaker.png')
};

export default images;
