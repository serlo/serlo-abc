'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import ExerciseLayout from '../components/ExerciseLayout';
import exercises from '../components/exercises';
import * as exerciseActions from '../actions/exerciseActions';
import { GREEN, RED } from '../styles/colors';

const exerciseWrapper = (exercise, state, actions) => {
  const Component = exercises[exercise.component];
  return (
    <Component
      selectAnswer={actions.selectAnswer}
      selectedAnswer={state.currentAnswer}
      exerciseComplete={exercise.complete}
      exerciseSuccess={exercise.success}
      {...exercise.props}
    />
  );
}

class ExerciseApp extends React.Component {
  render() {
    const { state, actions } = this.props;
    const section = state.course.sections[state.currentExercise.section];
    const chapter = section.chapters[state.currentExercise.chapter];
    const exercise = chapter.exercises[state.currentExercise.exercise];
    console.log(exercise);
    return (
      <ExerciseLayout
        course={state.course}
        currentAnswer={state.currentAnswer}
        currentExercise={state.currentExercise}
        nextExercise={actions.nextExercise}
        changeExercise={actions.changeExercise}
        submitExercise={actions.submitExercise}
      >
        {exerciseWrapper(exercise, state, actions)}
      </ExerciseLayout>
    );
  }
}

const mapStateToProps = state => ({
  state: state.exercise,
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(exerciseActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseApp);
