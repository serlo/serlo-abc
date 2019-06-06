import { Audio } from 'expo-av';

import { AbstractAssetResolver } from './abstract-asset-resolver';

export class MockAssetResolver extends AbstractAssetResolver {
  public getImage(id: string) {
    return { _assetImage: id };
  }

  public getSound(id: string) {
    return new Audio.Sound();
  }

  public getVideo(id: string) {
    return { _assetVideo: id };
  }
}
