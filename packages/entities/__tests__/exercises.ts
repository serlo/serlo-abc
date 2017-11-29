import { forEach, map, mapObjIndexed, sum, values } from 'ramda';

import { EntityFactory } from '..';
import { MockAssetResolver } from '../asset-resolver/mock-asset-resolver';
import {
  AbstractExercise,
  ExerciseFixture,
  Exercises,
  ExerciseTypes
} from '../exercises';

const runTests = <S, F>(
  assert: ((
    fixture: ExerciseFixture<S, F>,
    /* tslint:disable-next-line:no-any */
    exercise: AbstractExercise<any, S, F>
  ) => void)
) => {
  const resolver = new MockAssetResolver();
  const factory = new EntityFactory(resolver);

  const cases = values(
    mapObjIndexed(
      (
        E: {
          fixtures: Array<ExerciseFixture<S, F>>;
          /* tslint:disable-next-line:no-any */
          new (p: any): AbstractExercise<any, S, F>;
        },
        type
      ) => () => {
        forEach(fixture => {
          try {
            const exercise = factory.createExercise(
              type as ExerciseTypes,
              fixture.props
            );

            // Catch test failures so that we can pass a custom message
            assert(fixture, exercise);
          } catch (e) {
            throw new Error(`${type} › ${fixture.name}:\n${e.message}`);
          }
        }, E.fixtures);
      },
      Exercises
    )
  );

  // Execute the test runners
  forEach(runTestCases => runTestCases(), cases);

  // Check that each test case was run
  const numberOfAssertions = sum(
    values(
      map<
        { [type: string]: { fixtures: Array<ExerciseFixture<S, F>> } },
        { [type: string]: number }
      >(
        (E: { fixtures: Array<ExerciseFixture<S, F>> }) => E.fixtures.length,
        Exercises
      )
    )
  );
  expect.assertions(numberOfAssertions);
};

describe('exercises', () => {
  test('isCorrect(state)', () => {
    runTests(({ name, props, state, isCorrect }, exercise) =>
      expect(exercise.isCorrect(state)).toEqual(isCorrect)
    );
  });

  test('getFeedback(state)', () => {
    runTests(({ name, props, state, feedback }, exercise) =>
      expect(exercise.getFeedback(state)).toEqual(feedback)
    );
  });
});
