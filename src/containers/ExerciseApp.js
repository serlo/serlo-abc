'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Exercise from '../pages/Exercise';
import * as exerciseActions from '../actions/exerciseActions';


class ExerciseApp extends React.Component {
  render() {
    console.log('ExerciseApp', this.props);
    const { state, actions, exerciseComponent, exerciseProps } = this.props;
    return (
      <Exercise
        course={state.course}
        exerciseComponent={exerciseComponent}
        exerciseProps={exerciseProps}
      />
    );
  }
}

const mapStateToProps = state => ({
  state: state.exercise,
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(exerciseActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseApp);
