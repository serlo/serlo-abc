import React from 'react';
import { NativeRouter, withRouter } from 'react-router-native';
import { storiesOf } from '@kadira/react-native-storybook';

import Exercise from './Exercise';

class ExerciseStory extends React.Component {
  componentWillMount() {
    this.props.history.push('/exercise');
  }

  render() {
    return <Exercise />
  }
}

ExerciseStory = withRouter(ExerciseStory);

storiesOf('Exercise', module).add('Exercise Page', () => (
  <NativeRouter><ExerciseStory /></NativeRouter>
));
