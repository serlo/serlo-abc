import { AbstractAssetResolver } from './abstract-asset-resolver';

export class MockAssetResolver extends AbstractAssetResolver {
  public getImage(id: string) {
    return { _assetImage: id };
  }

  public getSound(id: string) {
    return { _assetSound: id };
  }

  public getVideo(id: string) {
    return { _assetVideo: id };
  }
}
