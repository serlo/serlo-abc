import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../reducers';
import ExerciseApp from './ExerciseApp';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

storiesOf('exercises', module).add('Exercise Page (uses Redux)', () => (
  <Provider store={store}>
    <ExerciseApp />
  </Provider>
));
