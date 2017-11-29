import * as React from 'react';

import { InfoScreenWithSoundsState } from '../../../../packages/entities/exercises/info-screen-with-sounds.exercise';
import { TextCanvas } from '../../common/canvas';
import { PortraitScreenOrientation } from '../../helpers/screen-orientation';

export interface WriteLetterProps {
  letter: string;
  showFeedback: boolean;
  state: InfoScreenWithSoundsState;
  setState: (state: InfoScreenWithSoundsState) => void;
}

export const WriteLetter = ({ letter, setState }: WriteLetterProps) => (
  <PortraitScreenOrientation>
    <TextCanvas text={letter} onPanResponderEnd={() => setState(true)} />
  </PortraitScreenOrientation>
);
