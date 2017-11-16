// @ts-ignore TODO: add declaration file
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';

// @ts-ignore TODO: add declaration file
import getExercise from '../exercises';
import { ExerciseInstruction } from './ExerciseInstruction';

storiesOf('screens/ExerciseInstruction', module).add('FindLetter', () => {
  const FindLetter = getExercise('FindLetter');

  const exercise = new FindLetter.Exercise(FindLetter.fixtures[0].props);

  return (
    <ExerciseInstruction exercise={exercise} Component={FindLetter.Component} />
  );
});
