import { forEach, map, uniq } from 'ramda';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Fixtures } from '../../../packages/entities/exercises/helpers';
// @ts-ignore: TODO: migrate to TypeScript
import { play } from '../../helpers/audio';
// @ts-ignore: TODO: migrate to TypeScript
import { LoadSounds } from '../helpers/Audio';
import Container from '../screens/Exercise';

const wrapExercise = <Props, State>(
  Exercise: any,
  Component: any,
  props: Props,
  state?: State
): ((props: any) => React.ReactElement<any>) => {
  const exercise = new Exercise(props);

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
  Exercise: any; // TODO:
  Component: any; // TODO:,
  fixtures: Fixtures<Props, State>;
}

export const createElementsFromFixtures = <Props, State>({
  Exercise,
  Component,
  fixtures
}: IArgs<Props, State>): Array<{
  name: string;
  createElement: (props: any) => React.ReactElement<any>;
}> => [
  // TODO:
  ...map(props => {
    const createElement = wrapExercise(Exercise, Component, props);

    return { name: 'default', createElement };
  }, getPropsFromFixtures(fixtures)),
  ...map(({ name, state, props }) => {
    const createElement = wrapExercise(Exercise, Component, props, state);

    return { name, createElement };
  }, fixtures)
];

export const createStoriesFromFixtures = <Props, State>(
  story: any,
  args: IArgs<Props, State>
): void => {
  forEach(({ name, createElement }) => {
    story.add(name, () => (
      <LoadSounds
        sounds={[
          require('../../assets/sounds/correct.mp3'),
          require('../../assets/sounds/wrong.mp3')
        ]}
        render={([correctSound, wrongSound]: any[], soundsLoaded: boolean) =>
          soundsLoaded &&
          createElement({
            onCorrect: () => {
              play(correctSound);
            },
            onWrong: () => {
              play(wrongSound);
            }
          })}
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
