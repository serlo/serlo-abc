import { StyleProp, TextStyle } from 'react-native';
import { WHITE } from './colors';

export const FONT_FAMILY: StyleProp<TextStyle> = {
  fontFamily: 'norddruck'
};

export const DEFAULT: StyleProp<TextStyle> = {
  ...FONT_FAMILY,
  color: WHITE,
  fontSize: 35,
  textAlign: 'center'
};

export const SMALL: StyleProp<TextStyle> = {
  ...FONT_FAMILY,
  color: WHITE,
  fontSize: 25,
  textAlign: 'left'
};
