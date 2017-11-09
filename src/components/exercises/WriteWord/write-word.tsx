import * as React from 'react';

import { IState } from '../../../../packages/entities/exercises/InfoScreenWithSounds/InfoScreenWithSounds';
import { TextCanvas } from '../../common/canvas';
import { LandscapeScreenOrientation } from '../../helpers/screen-orientation';

export interface WriteWordProps {
  word: string;
  showFeedback: boolean;
  state: IState;
  setState: (state: IState) => void;
}

export const WriteWord = ({ word }: WriteWordProps) => (
  <LandscapeScreenOrientation>
    <TextCanvas text={word} />
  </LandscapeScreenOrientation>
);
