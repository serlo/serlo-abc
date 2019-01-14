// Make distinct assets incompatible, see https://github.com/Microsoft/TypeScript/wiki/FAQ#how-do-i-prevent-two-types-from-being-structurally-compatible
import { ImageSourcePropType } from 'react-native';

export type ImageAsset = {
  // tslint:disable-next-line:no-any
  _assetImage: any;
} & ImageSourcePropType;

export interface VideoAsset {
  // tslint:disable-next-line:no-any
  _assetVideo: any;
}
