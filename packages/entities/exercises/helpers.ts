import { forEach } from 'ramda';

import AbstractExercise from './AbstractExercise';

export interface IFixture<Props, State> {
  name: string;
  props: Props;
  state: State;
  isCorrect: boolean;
}

export type Fixtures<Props, State> = Array<IFixture<Props, State>>;

export const createTestsFromFixtures = <Props, State>({
  Exercise,
  fixtures
}: {
  Exercise: new (props: Props) => AbstractExercise<Props, State>;
  fixtures: Fixtures<Props, State>;
}): void => {
  describe('isCorrect()', () => {
    forEach(({ name, props, state, isCorrect }) => {
      describe(name, () => {
        const exercise = new Exercise(props) as AbstractExercise<Props, State>;

        expect(exercise.isCorrect(state)).toEqual(isCorrect);
      });
    }, fixtures);
  });
};
