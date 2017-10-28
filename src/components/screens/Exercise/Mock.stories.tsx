/* tslint:disable:max-classes-per-file */
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { times } from 'ramda';
import * as React from 'react';
import { Picker, Text, View } from 'react-native';

import AbstractExercise from '../../../exercises/AbstractExercise';
import Exercise from './Mock';

class TrivialExercise extends AbstractExercise {
  public getInitialState() {
    return {};
  }

  public isCorrect() {
    return true;
  }
}

class AdditionExercise extends AbstractExercise<
  { a: number; b: number },
  number | null
> {
  public getInitialState() {
    return null;
  }

  public isCorrect(state: number | null) {
    if (!state) {
      return false;
    }

    return state === this.props.a + this.props.b;
  }
}

const TrivialExerciseView = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Trivial Exercise</Text>
  </View>
);

const AdditionExerciseView = ({ a, b, state, setState, showFeedback }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    {showFeedback && <Text>This is not correct :(</Text>}
    <Text>
      {a} + {b}
    </Text>
    <Text>=</Text>
    <Picker
      selectedValue={state}
      onValueChange={value => setState(value)}
      style={{
        width: '100%'
      }}
    >
      {times(i => {
        const label = String(i);

        return <Picker.Item key={label} label={label} value={i} />;
      }, 10)}
    </Picker>
  </View>
);

storiesOf('screens/Exercise/Mock', module)
  .add('exercise without input', () => (
    <Exercise
      exercise={new TrivialExercise({})}
      Component={TrivialExerciseView}
    />
  ))
  .add('exercise with input', () => {
    type ExerciseComponent = new () => Exercise<
      { a: number; b: number },
      number | null
    >;
    const ExerciseComponent = Exercise as ExerciseComponent;

    return (
      <ExerciseComponent
        exercise={new AdditionExercise({ a: 2, b: 3 })}
        Component={AdditionExerciseView}
      />
    );
  })
  .add('exercise with input (correctly solved)', () => {
    type ExerciseComponent = new () => Exercise<
      { a: number; b: number },
      number | null
    >;
    const ExerciseComponent = Exercise as ExerciseComponent;

    return (
      <ExerciseComponent
        submitted={5}
        exercise={new AdditionExercise({ a: 2, b: 3 })}
        Component={AdditionExerciseView}
      />
    );
  })
  .add('exercise with input (incorrectly solved)', () => {
    type ExerciseComponent = new () => Exercise<
      { a: number; b: number },
      number | null
    >;
    const ExerciseComponent = Exercise as ExerciseComponent;

    return (
      <ExerciseComponent
        submitted={4}
        exercise={new AdditionExercise({ a: 2, b: 3 })}
        Component={AdditionExerciseView}
      />
    );
  });
