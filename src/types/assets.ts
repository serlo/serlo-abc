// Make distinct assets incompatible, see https://github.com/Microsoft/TypeScript/wiki/FAQ#how-do-i-prevent-two-types-from-being-structurally-compatible
export interface IImageAsset {
  // tslint:disable-next-line:no-any
  _assetSound: any;
}

export interface ISoundAsset {
  // tslint:disable-next-line:no-any
  _assetSound: any;
}

export interface IVideoAsset {
  // tslint:disable-next-line:no-any
  _assetSound: any;
}
