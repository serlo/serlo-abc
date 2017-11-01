// Make distinct assets incompatible, see https://github.com/Microsoft/TypeScript/wiki/FAQ#how-do-i-prevent-two-types-from-being-structurally-compatible
export interface IImageAsset {
  _assetSound: any;
}

export interface ISoundAsset {
  _assetSound: any;
}

export interface IVideoAsset {
  _assetSound: any;
}
