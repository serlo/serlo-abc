import * as React from 'react';

import { IState } from '../../../../packages/entities/exercises/InfoScreenWithSounds/InfoScreenWithSounds';
import { TextCanvas } from '../../common/canvas';
import { PortraitScreenOrientation } from '../../helpers/screen-orientation';

export interface WriteLetterProps {
  letter: string;
  showFeedback: boolean;
  state: IState;
  setState: (state: IState) => void;
}

export const WriteLetter = ({ letter }: WriteLetterProps) => (
  <PortraitScreenOrientation>
    <TextCanvas text={letter} />
  </PortraitScreenOrientation>
);
