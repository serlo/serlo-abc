import { find, identity, map, mergeAll } from 'ramda';
import React, { Component } from 'react';
import { View } from 'react-native';
import { NativeRouter, Redirect, Route } from 'react-router-native';

import Interactor from '../packages/entities-interactor';
import courses from './assets/courses.json';
import getExercise from './components/exercises';
import Course from './components/screens/Course';
import Exercise from './components/screens/Exercise';
import Splash from './components/screens/Splash';
import { LoadSounds } from './components/helpers/Audio';
import loadFonts from './components/helpers/fonts';
import { play, getSound } from './helpers/audio';
import Storage from './storage/CourseStorage';
import ProgressStorage from './storage/ProgressStorage';
import { PRIMARY } from './styles/colors';
import Word from './word';

import loadVideo from './assets/videos';

export const getVideo = id => {
  const load = loadVideo[id];
  return load && load();
};

export class AppRoutes extends Component {
  constructor(props) {
    super(props);

    const storage = new Storage(courses);
    const progressStorage = new ProgressStorage();
    this.interactor = new Interactor(storage, progressStorage);

    this.state = { course: null };
  }

  getNextChild = id => {
    return this.interactor.getNextChild(id);
  };

  getNextSibling = id => {
    return this.interactor.getNextSibling(id);
  };

  getProgress = id => {
    return this.interactor.getProgress(id);
  };

  resetProgress = () => {
    return this.interactor.resetProgress();
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

  goUp = (id, level) => {
    if (level <= 2) {
      return <Redirect to="/course" />;
    }

    return (
      <Redirect
        to={{
          pathname: `/node/${id}`,
          state: { level: level - 1 }
        }}
      />
    );
  };

  goDown = (id, level) => {
    return (
      <Redirect
        to={{
          pathname: `/node/${id}`,
          state: { level: level + 1 }
        }}
      />
    );
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
        sounds={[getSound('correct'), getSound('wrong')]}
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

                const nexts = map(
                  ({ id }) => this.getNextChild(id),
                  this.state.course.children
                );
                const next = find(identity, nexts);

                return [
                  <Course
                    next={next && next.id}
                    key="course"
                    getProgress={this.getProgress}
                    resetProgress={this.resetProgress}
                    course={this.state.course}
                    goToSection={id =>
                      history.push(`/node/${id}`, { level: 2 })
                    }
                  />
                ];
              }}
            />
            <Route
              path="/node/:id"
              render={({ location, match, history }) => {
                const { id } = match.params;
                const { level } = location.state;

                if (!this.state.course) {
                  return null;
                }

                const entity = this.findEntity(id);

                if (!entity) {
                  console.warn('Entity with id', id, 'does not exist');
                  return <Redirect to="/course" />;
                }

                const { type, props } = entity;

                if (!type) {
                  // Internal node
                  const next = this.getNextChild(id);

                  if (!next) {
                    this.markAsCorrect(id);
                    return this.goUp(entity.parent, level);
                  }

                  return this.goDown(next.id, level);
                }

                // Leaf
                const exerciseType = getExercise(type);

                if (!exerciseType) {
                  console.warn('no view found for type', type);
                  return null;
                }

                const exercise = new exerciseType.Exercise(
                  mergeAll([
                    props,
                    props.video && { video: getVideo(props.video) },
                    props.sound && { sound: getSound(props.sound) },
                    props.sounds && { sounds: map(getSound, props.sounds) },
                    props.word && { word: new Word(props.word) },
                    props.words && {
                      words: map(word => new Word(word), props.words)
                    }
                  ])
                );

                let firstAttempt = true;

                const handleCorrect = () => {
                  play(correctSound).then(() => {
                    if (firstAttempt) {
                      this.markAsCorrect(id);
                    }

                    history.push(`/node/${entity.parent}`, {
                      level: level - 1
                    });
                  });
                };

                const handleWrong = () => {
                  if (firstAttempt) {
                    this.markAsIncorrect(id);
                  }

                  firstAttempt = false;

                  play(wrongSound);
                };

                return (
                  <Exercise
                    exercise={exercise}
                    Component={exerciseType.Component}
                    goToNav={() => history.push('/course')}
                    onCorrect={handleCorrect}
                    onWrong={handleWrong}
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
