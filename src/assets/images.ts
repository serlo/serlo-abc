import { AssetTypes } from '../../packages/entities';

const images: { [id: string]: () => AssetTypes.ImageAsset } = {
  play: () => require('./images/play.png'),
  repeat: () => require('./images/repeat.png'),
  serlo: () => require('./images/serlo.png'),
  speaker: () => require('./images/speaker.png')
};

export default images;
