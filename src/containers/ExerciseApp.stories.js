import React from 'react';
import { NativeRouter, withRouter } from 'react-router-native';
import { storiesOf } from '@kadira/react-native-storybook';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../reducers';
import ExerciseApp from './ExerciseApp';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

class ExerciseStory extends React.Component {
  componentWillMount() {
    this.props.history.push('/exercise');
  }

  render() {
    return <ExerciseApp />
  }
}
ExerciseStory = withRouter(ExerciseStory);

storiesOf('Exercise', module).add('Exercise Page (uses Redux)', () => (
  <Provider store={store}>
    <NativeRouter>
      <ExerciseStory />
    </NativeRouter>
  </Provider>
));
