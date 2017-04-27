'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import ExerciseLayout from '../components/ExerciseLayout';
import exercises from '../components/exercises';
import * as exerciseActions from '../actions/exerciseActions';

const componentWrapper = (name, props) => {
  if (name === undefined) return (
    <Text style={{ padding: 20, paddingTop: 70 }}>
      Please select an Exercise
    </Text>
  );
  const Component = exercises[name];
  return <Component {...props} />;
}

class ExerciseApp extends React.Component {
  render() {
    const { state, actions, routes } = this.props;
    const exercise = state.exercises[state.currentExercise];
    return (
      <ExerciseLayout
        course={state.course}
        currentExercise={state.currentExercise}
        changeExercise={actions.changeExercise}
        nextExercise={actions.nextExercise}
      >
        {componentWrapper(exercise.component, exercise.props)}
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
