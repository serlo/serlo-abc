import React from 'react';
import { storiesOf } from '@kadira/react-native-storybook';
// import { Router, Route, Actions, routerReducer } from 'react-native-redux-router';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Button, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import ExerciseApp from './containers/ExerciseApp';
import Splash from './components/exercises/Splash';
import App from '.';

// default
storiesOf('App', module).add('default', () => <App />);

// router demonstration
const reducer = combineReducers(reducers);
const store = createStore(reducer);

const BasicLayout = (props) => (
  <View style={{ flex: 1 }}>
    {props.children}
  </View>
)

class RouterStory extends React.Component {
  componentDidMount() {
    setTimeout(function () {
      Actions.exercise();
    }, 3000);
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar duration={0}>
          <Scene key="splash" component={Splash} />
          <Scene key="exercise" component={ExerciseApp} />
        </Scene>
      </Router>
    );
  }
}

storiesOf('App', module).add('router demonstration', () => (
  <Provider store={store}>
    <RouterStory />
  </Provider>
));
