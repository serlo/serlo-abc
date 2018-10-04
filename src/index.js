import { find, identity, map } from 'ramda';
import React, { Component } from 'react';
import { View } from 'react-native';
import { NativeRouter, Redirect, Route } from 'react-router-native';
import { Analytics, PageHit } from 'expo-analytics';

import { EntityFactory } from '../packages/entities';
import { CourseInteractorLoader } from '../packages/entities-interactor';
import courses from '../packages/assets/courses.json';
import { ExerciseComponents } from './components/exercises';
import Course from './components/screens/Course';
import Splash from './components/screens/Splash';
import { LoadSounds } from './components/helpers/Audio';
import { ExerciseGroup } from './components/helpers/exercise-group';
import { play, getSound } from './helpers/audio';
import Storage from './storage/CourseStorage';
import ProgressStorage from './storage/ProgressStorage';
import { PRIMARY } from './styles/colors';
import { AssetResolver } from './asset-resolver';

export class AppRoutes extends Component {
  constructor(props) {
    super(props);

    const storage = new Storage(courses);
    const progressStorage = new ProgressStorage();
    this.interactorLoader = new CourseInteractorLoader(
      storage,
      progressStorage
    );

    const resolver = new AssetResolver();
    this.entityFactory = new EntityFactory(resolver);
    this.analytics = new Analytics('UA-126536605-1');

    this.state = {
      course: null
    };
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
    this.interactorLoader
      .loadCourse('09438926-b170-4005-a6e8-5dd8fba83cde')
      .then(interactor => {
        this.interactor = interactor;
        const course = this.interactor.getStructure();
        this.setState({ course });
      });
    this.analytics
      .hit(new PageHit('Main'))
      .then(() => console.log('success'))
      .catch(e => console.error(e.message));
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

                return (
                  <Course
                    next={next && next.id}
                    getProgress={this.getProgress}
                    resetProgress={this.resetProgress}
                    course={this.state.course}
                    goToSection={id =>
                      history.push(`/node/${id}`, { level: 2 })
                    }
                  />
                );
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

                const newWords = this.interactor.getNewVocabulary(id);
                const words = this.interactor.getVocabulary(id);
                const letter = this.interactor.getNewLetter(id);
                const letters = this.interactor.getLetters(id);

                // Leaf
                const group = this.entityFactory.createExerciseGroup(
                  type,
                  newWords,
                  words,
                  letter,
                  letters,
                  props
                );

                if (!group) {
                  console.warn('no view found for type', type);
                  return null;
                }

                const done = () => {
                  this.markAsCorrect(id);

                  history.push(`/node/${entity.parent}`, {
                    level: level - 1
                  });
                };

                return (
                  <ExerciseGroup
                    createExerciseComponent={type => ExerciseComponents[type]}
                    group={group}
                    goToNav={() => history.push('/course')}
                    onCorrect={() => play(correctSound)}
                    onWrong={() => play(wrongSound)}
                    onDone={done}
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

export default () => (
  <NativeRouter>
    <AppRoutes />
  </NativeRouter>
);
