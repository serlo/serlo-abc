import React from 'react';
import { Text, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import Course from './components/screens/Course';
import Splash from './components/screens/Splash';

import loadFonts from '../src/components/helpers/fonts';

const Section = ({ match }) => {
  return <Text>Section {match.params.id}!</Text>;
};

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
      <Route
        path="/course"
        render={({ history }) => (
          <Course goToSection={id => history.push(`/section/${id}`)} />
        )}
      />
      <Route path="/section/:id" component={Section} />
    </View>
  </NativeRouter>
);

export default loadFonts({
  norddruck: require('../src/assets/fonts/norddruck.ttf'),
  serlo: require('../src/assets/fonts/serlo.ttf')
})(App);
