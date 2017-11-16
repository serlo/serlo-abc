import { map } from 'ramda';

import { Fixtures } from '../helpers';
import { CanvasState } from './canvas.exercise';

export default <Props>(
  fixtures: Array<{ name: string; props: Props }>
): Fixtures<Props, CanvasState> =>
  map(
    fixture => ({
      isCorrect: true,
      state: true,
      ...fixture
    }),
    fixtures
  );
