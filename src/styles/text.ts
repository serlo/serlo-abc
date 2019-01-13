import { TextStyle } from 'react-native';
import { WHITE } from './colors';

export const FONT_FAMILY: TextStyle = {
  fontFamily: 'norddruck'
};

export const DEFAULT: TextStyle = {
  ...FONT_FAMILY,
  color: WHITE,
  fontSize: 35,
  textAlign: 'center'
};

export const SMALL: TextStyle = {
  ...FONT_FAMILY,
  color: WHITE,
  fontSize: 22,
  textAlign: 'left'
};
