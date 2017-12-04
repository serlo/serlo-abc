import * as React from 'react';

import { TextCanvas } from '../common/canvas';
import { LandscapeScreenOrientation } from '../helpers/screen-orientation';

export interface WriteWordProps {
  text: string;
  showFeedback: boolean;
  state: boolean;
  setState: (state: boolean) => void;
}

export const WriteWord = ({ text, setState }: WriteWordProps) => (
  <LandscapeScreenOrientation>
    <TextCanvas text={text} onPanResponderEnd={() => setState(true)} />
  </LandscapeScreenOrientation>
);
