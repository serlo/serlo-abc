import * as React from 'react';

import { TextCanvas } from '../common/canvas';
import {
  LandscapeScreenOrientation,
  PortraitScreenOrientation
} from '../helpers/screen-orientation';

export interface WriteLetterProps {
  letter: string;
  showFeedback: boolean;
  state: boolean;
  setState: (state: boolean) => void;
}

export const WriteLetter = ({ letter, setState }: WriteLetterProps) => {
  const Container =
    letter.length === 1
      ? PortraitScreenOrientation
      : LandscapeScreenOrientation;

  return (
    <Container>
      <TextCanvas text={letter} onPanResponderEnd={() => setState(true)} />
    </Container>
  );
};
