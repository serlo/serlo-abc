/* tslint:disable:max-classes-per-file */
import * as R from 'ramda';

import { EntityFactory } from '..';
import { MockAssetResolver } from '../asset-resolver/mock-asset-resolver';
import { AbstractExerciseGroup } from '../exercise-groups';
import { AbstractExercise } from '../exercises';

describe('exercise-groups', () => {
  const resolver = new MockAssetResolver();
  const factory = new EntityFactory(resolver);

  describe('TrivialExerciseGroup', () => {
    let group: AbstractExerciseGroup;

    class TrivialExercise extends AbstractExercise<
      { index: number },
      boolean,
      void
    > {
      public getInitialState() {
        return false;
      }

      public getFeedback(state: boolean) {
        return;
      }

      public isCorrect(state: boolean) {
        return state;
      }
    }

    class TrivialExerciseGroup extends AbstractExerciseGroup {
      public generateExercises() {
        return R.times(index => new TrivialExercise({ index }), 10);
      }
    }

    beforeEach(() => {
      group = new TrivialExerciseGroup(factory.createExercise, [], []);
    });

    it('generates its exercises if no progress is passed', () => {
      expect(group.getRemainingExercises().length).toEqual(10);
    });

    it('getCurrentExercise() returns the current exercise', () => {
      const exercise = group.getCurrentExercise();

      expect(exercise).toBeDefined();
      expect(exercise && exercise.props.index).toEqual(0);
    });

    it('submitting a correct solution removes the current exercise and moves to the next exercise', () => {
      group.submit(true);

      expect(group.getRemainingExercises().length).toEqual(9);

      const exercise = group.getCurrentExercise();

      expect(exercise).toBeDefined();
      expect(exercise && exercise.props.index).toEqual(1);
    });

    it('submitting a correct solution removes the current exercise and moves to the next exercise', () => {
      group.submit(true);
      group.submit(true);

      expect(group.getRemainingExercises().length).toEqual(8);

      const exercise = group.getCurrentExercise();

      expect(exercise).toBeDefined();
      expect(exercise && exercise.props.index).toEqual(2);
    });

    it('submitting a correct solution after submitting a wrong solution enqueus the exercise again', () => {
      group.submit(false);
      group.submit(true);

      const exercises = group.getRemainingExercises();
      expect(exercises.length).toEqual(10);

      const lastExercise = R.last(exercises);
      expect(lastExercise && lastExercise.props.index).toEqual(0);
    });

    it('submitting a correct solution after submitting a wrong solution enqueus the exercise again', () => {
      group.submit(false);
      group.submit(true);
      group.submit(true);

      const exercises = group.getRemainingExercises();
      expect(exercises.length).toEqual(9);

      const lastExercise = R.last(exercises);
      expect(lastExercise && lastExercise.props.index).toEqual(0);
    });

    it('moves to the next exercise after submitting a wrong solution three times', () => {
      group.submit(false);
      group.submit(false);
      group.submit(false);

      const exercises = group.getRemainingExercises();
      expect(exercises.length).toEqual(10);

      const lastExercise = R.last(exercises);
      expect(lastExercise && lastExercise.props.index).toEqual(0);
    });
  });
});
