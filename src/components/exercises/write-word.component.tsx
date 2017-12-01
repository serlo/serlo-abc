import * as React from 'react';

import { TextCanvas } from '../common/canvas';
import { LandscapeScreenOrientation } from '../helpers/screen-orientation';

export interface WriteWordProps {
  word: string;
  showFeedback: boolean;
  state: boolean;
  setState: (state: boolean) => void;
}

export const WriteWord = ({ word, setState }: WriteWordProps) => (
  <LandscapeScreenOrientation>
    <TextCanvas text={word} onPanResponderEnd={() => setState(true)} />
  </LandscapeScreenOrientation>
);
