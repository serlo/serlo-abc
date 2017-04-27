import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';
import { AsyncStorage } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from '../reducers';
import ExerciseApp from './ExerciseApp';

const reducer = combineReducers(reducers);
const store = createStore(reducer, undefined, autoRehydrate());
persistStore(store, { storage: AsyncStorage });

storiesOf('exercises', module).add('Exercise Page (uses Redux)', () => (
  <Provider store={store}>
    <ExerciseApp />
  </Provider>
));
