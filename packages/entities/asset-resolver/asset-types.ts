// Make distinct assets incompatible, see https://github.com/Microsoft/TypeScript/wiki/FAQ#how-do-i-prevent-two-types-from-being-structurally-compatible
export interface ImageAsset {
  // tslint:disable-next-line:no-any
  _assetImage: any;
}

export interface VideoAsset {
  // tslint:disable-next-line:no-any
  _assetVideo: any;
}
