import { addIndex, forEach, map, uniq } from 'ramda';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import AbstractExercise from '../../../packages/entities/exercises/AbstractExercise';
import { Fixtures } from '../../../packages/entities/exercises/helpers';
import loadSound from '../../assets/sounds';
// @ts-ignore: TODO: migrate to TypeScript
import { play } from '../../helpers/audio';
// @ts-ignore: TODO: migrate to TypeScript
import { LoadSounds } from '../helpers/Audio';
import Container from '../screens/Exercise';

const mapIndexed = addIndex(map);

const wrapExercise = <Props, State>(
  Exercise: new (props: Props) => AbstractExercise<Props, State>,
  Component: React.ComponentType<{
    showFeedback: boolean;
    state: State;
    setState: (state: State) => void;
  }>,
  props: Props,
  state?: State
  /* tslint:disable-next-line:no-any TODO: */
): ((props: any) => React.ReactElement<any>) => {
  const exercise = new Exercise(props);

  /* tslint:disable-next-line:no-any TODO: */
  return (additionalProps: any) => (
    <Container
      {...additionalProps}
      submitted={state}
      exercise={exercise}
      Component={Component}
    />
  );
};

const getPropsFromFixtures = <Props, State>(
  fixtures: Fixtures<Props, State>
): Props[] => uniq(map(({ props }) => props, fixtures));

interface IArgs<Props, State> {
  Exercise: new (props: Props) => AbstractExercise<Props, State>;
  Component: React.ComponentType<{
    showFeedback: boolean;
    state: State;
    setState: (state: State) => void;
  }>;
  fixtures: Fixtures<Props, State>;
}

export const createElementsFromFixtures = <Props, State>({
  Exercise,
  Component,
  fixtures
}: IArgs<Props, State>): Array<{
  name: string;
  /* tslint:disable-next-line:no-any TODO: */
  createElement: (props: any) => React.ReactElement<any>;
}> => [
  ...mapIndexed((props, index) => {
    const createElement = wrapExercise(Exercise, Component, props);

    return { name: `default ${index}`, createElement };
  }, getPropsFromFixtures(fixtures)),
  ...map(({ name, state, props }) => {
    const createElement = wrapExercise(Exercise, Component, props, state);

    return { name, createElement };
  }, fixtures)
];

export const createStoriesFromFixtures = <Props, State>(
  /* tslint:disable-next-line:no-any TODO: */
  story: any,
  args: IArgs<Props, State>
): void => {
  forEach(({ name, createElement }) => {
    story.add(name, () => (
      <LoadSounds
        sounds={[loadSound.correct(), loadSound.wrong()]}
        /* tslint:disable-next-line:no-any TODO: */
        render={([correctSound, wrongSound]: any[], soundsLoaded: boolean) =>
          soundsLoaded &&
          createElement({
            onCorrect: () => {
              play(correctSound);
            },
            onWrong: () => {
              play(wrongSound);
            }
          })
        }
      />
    ));
  }, createElementsFromFixtures(args));
};

const doNothing = () => {
  // do nothing
};

export const createTestsFromFixtures = <Props, State>(
  args: IArgs<Props, State>
): void => {
  describe('renders without crashing', () => {
    forEach(({ name, createElement }) => {
      describe(name, () => {
        const tree = renderer.create(
          createElement({
            onCorrect: doNothing,
            onWrong: doNothing
          })
        );
        expect(tree.toJSON()).toMatchSnapshot();
      });
    }, createElementsFromFixtures(args));
  });
};
