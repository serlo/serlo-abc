'use strict';

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Exercise from '../pages/Exercise';
import * as exerciseActions from '../actions/exerciseActions';


class ExerciseApp extends React.Component {
  render() {
    const { state, actions } = this.props;
    return (
      <Exercise course={state.course} />
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
