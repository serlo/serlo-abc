import React from 'react';
import { Router, Route, routerReducer } from 'react-native-redux-router';
import { storiesOf } from '@kadira/react-native-storybook';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../reducers';
import ExerciseApp from './ExerciseApp';

const reducer = combineReducers({ routerReducer, ...reducers });
const store = createStore(reducer);

class ExerciseStory extends React.Component {
  render() {
    return (
      <Router>
        <Route name="exercise" component={ExerciseApp} initial />
      </Router>
    );
  }
}

storiesOf('Exercise', module).add('Exercise Page (uses Redux)', () => (
  <Provider store={store}>
    <ExerciseStory />
  </Provider>
));
