import { map, mergeAll } from 'ramda';
import React, { Component } from 'react';
import { View } from 'react-native';
import { NativeRouter, Redirect, Route } from 'react-router-native';

import courses from './assets/courses.json';
import getExercise from './components/exercises';
import Course from './components/screens/Course';
import Exercise from './components/screens/Exercise';
import Splash from './components/screens/Splash';
import { LoadSounds } from './components/helpers/Audio';
import loadFonts from './components/helpers/fonts';
import { play, getSound } from './helpers/audio';
import { getWordObject } from './helpers/words';
import Interactor from './entities-interactor';
import Storage from './storage/CourseStorage';
import { PRIMARY } from './styles/colors';

export class AppRoutes extends Component {
  constructor(props) {
    super(props);

    const storage = new Storage(courses);
    const progress = null; // TODO:
    this.interactor = new Interactor(storage, progress);

    this.state = { course: null };
  }

  getNextChild = id => {
    return this.interactor.getNextChild(id);
  };

  getNextSibling = id => {
    return this.interactor.getNextSibling(id);
  };

  findEntity = id => {
    return this.interactor.findEntity(id);
  };

  markAsCorrect = id => {
    return this.interactor.markAsCorrect(id);
  };

  markAsIncorrect = id => {
    return this.interactor.markAsIncorrect(id);
  };

  componentDidMount() {
    this.interactor
      .loadCourse('09438926-b170-4005-a6e8-5dd8fba83cde')
      .then(() => {
        const course = this.interactor.getStructure();
        this.setState({ course });
      });
  }

  render() {
    return (
      <LoadSounds
        sounds={[
          require('./assets/sounds/correct.mp3'),
          require('./assets/sounds/wrong.mp3')
        ]}
        render={([correctSound, wrongSound]) => (
          <View
            style={{
              flex: 1,
              backgroundColor: PRIMARY
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
              render={({ history }) => {
                if (!this.state.course) {
                  return null;
                }

                return (
                  <Course
                    course={this.state.course}
                    goToSection={id => history.push(`/section/${id}`)}
                  />
                );
              }}
            />
            <Route
              path="/section/:id"
              render={({ match }) => {
                if (!this.state.course) {
                  return null;
                }

                const exercise = this.getNextChild(match.params.id);

                if (exercise) {
                  return <Redirect to={`/exercise/${exercise.id}`} />;
                }

                const section = this.getNextSibling(match.params.id);

                if (section) {
                  return <Redirect to={`/section/${section.id}`} />;
                }

                return null;
              }}
            />
            <Route
              path="/exercise/:id"
              render={({ match, history }) => {
                const { id } = match.params;

                const entity = this.findEntity(id);

                if (!entity) {
                  return <Redirect to="/course" />;
                }

                const { type, props } = entity;

                const exerciseType = getExercise(type);

                if (!exerciseType) {
                  console.warn('no view found for type', type);
                  return null;
                }

                const exercise = new exerciseType.Exercise(
                  mergeAll([
                    props,
                    props.sound && { sound: getSound(props.sound) },
                    props.sounds && { sounds: map(getSound, props.sounds) },
                    props.word && { word: getWordObject(props.word) },
                    props.words && { words: map(getWordObject, props.words) }
                  ])
                );

                return (
                  <Exercise
                    exercise={exercise}
                    Component={exerciseType.Component}
                    goToNav={() => history.push('/course')}
                    onCorrect={() => {
                      play(correctSound).then(() => {
                        this.markAsCorrect(id);
                        history.push(`/section/${entity.parent}`);
                      });
                    }}
                    onWrong={() => {
                      play(wrongSound).then(() => {
                        this.markAsIncorrect(id);
                      });
                    }}
                  />
                );
              }}
            />
          </View>
        )}
      />
    );
  }
}

const App = () => (
  <NativeRouter>
    <AppRoutes />
  </NativeRouter>
);

export default loadFonts({
  norddruck: require('./assets/fonts/norddruck.ttf'),
  serlo: require('./assets/fonts/serlo.ttf')
})(App);
