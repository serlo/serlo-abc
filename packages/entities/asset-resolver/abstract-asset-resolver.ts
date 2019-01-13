import { Audio } from 'expo';
import { Maybe } from '../../maybe';

import * as AssetTypes from './asset-types';

export abstract class AbstractAssetResolver {
  public abstract getImage(id: string): Maybe<AssetTypes.ImageAsset>;
  public abstract getSound(id: string): Maybe<Audio.Sound>;
  public abstract getVideo(id: string): Maybe<AssetTypes.VideoAsset>;
}
