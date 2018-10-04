import * as React from 'react';

import { TextCanvas } from '../common/canvas';
import { PortraitScreenOrientation } from '../helpers/screen-orientation';

export interface WriteLetterProps {
  letter: string;
  showFeedback: boolean;
  state: boolean;
  setState: (state: boolean) => void;
}

export const WriteLetter = ({ letter, setState }: WriteLetterProps) => (
  <PortraitScreenOrientation>
    <TextCanvas text={letter} onPanResponderEnd={() => setState(true)} />
  </PortraitScreenOrientation>
);
