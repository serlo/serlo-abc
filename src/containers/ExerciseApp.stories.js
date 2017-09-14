import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { AsyncStorage, Text } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from '../reducers';
import ExerciseApp from './ExerciseApp';

const reducer = combineReducers(reducers);
const store = createStore(reducer, undefined, autoRehydrate());

storiesOf('exercises', module)
  .add('Exercise Page (uses Redux)', () => {
    persistStore(store, { storage: AsyncStorage });
    return (
      <Provider store={store}>
        <ExerciseApp />
      </Provider>
    );
  })
  .add('Purge Redux Store', () => {
    persistStore(store, { storage: AsyncStorage }).purge();
    return <Text>Redux Store Purged</Text>;
  });
