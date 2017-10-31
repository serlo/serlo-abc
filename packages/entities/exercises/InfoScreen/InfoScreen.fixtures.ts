import { map } from 'ramda';

import { Fixtures } from '../helpers';
import { IState } from './InfoScreen';

export default <Props>(
  fixtures: Array<{ name: string; props: Props }>
): Fixtures<Props, IState> =>
  map(
    fixture => ({
      isCorrect: true,
      state: null,
      ...fixture
    }),
    fixtures
  );
