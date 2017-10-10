import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import Course from './components/screens/Course';
import Splash from './components/screens/Splash';

const App = () => (
  <NativeRouter>
    <View
      style={{
        flex: 1
      }}
    >
      <Route
        exact
        path="/"
        render={({ history }) => (
          <Splash next={() => history.push('/course')} />
        )}
      />
      <Route path="/course" component={Course} />
    </View>
  </NativeRouter>
);

export default App;
