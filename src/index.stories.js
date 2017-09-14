import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, View, Text } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import ExerciseApp from './containers/ExerciseApp';
import Splash from './components/exercises/Splash';
import App from '.';

// default
storiesOf('App', module).add('default', () => <App />);

// router demonstration
const PageOne = () =>
  <View style={{ flex: 1, paddingTop: 30 }}>
    <Text>Page One</Text>
    <Button title="Go to Page Two" onPress={Actions.pageTwo} />
  </View>;

const PageTwo = () =>
  <View style={{ flex: 1, paddingTop: 30 }}>
    <Text>Page Two</Text>
    <Button title="Go to Page One" onPress={Actions.pageOne} />
  </View>;

class RouterStory extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar duration={0}>
          <Scene key="pageOne" component={PageOne} />
          <Scene key="pageTwo" component={PageTwo} />
        </Scene>
      </Router>
    );
  }
}

storiesOf('App', module).add('router demonstration', () => <RouterStory />);
