import { storiesOf } from '@storybook/react-native';
import * as R from 'ramda';
import React from 'react';
import { Text, View } from 'react-native';
import { MemoryRouter } from 'react-router-native';

import { CourseInteractorLoader } from '../packages/entities-interactor';
import courses from '../packages/assets/courses.json';
import Storage from './storage/CourseStorage';
import ProgressStorage from './storage/ProgressStorage';
import App, { AppRoutes } from '.';
import { DataPolicy } from './components/screens/DataPolicy';
import {
  ConsentStatus,
  default as DataPolicyConsentStorage
} from './storage/DataPolicyConsentStorage';

storiesOf('App', module).add('default', () => <App />);

const storage = new Storage(courses);
const progressStorage = new ProgressStorage();
const interactorLoader = new CourseInteractorLoader(storage, progressStorage);

const course = storiesOf('Course', module);

const addStory = (entity, level) => {
  const shortId = entity.id.substr(0, 7);

  course.add(
    `${R.times(i => '›', level).join('')} ${entity.title ||
      shortId} ${entity.type || ''}`,
    () => (
      <MemoryRouter
        initialEntries={[
          {
            pathname: level === 0 ? '/course' : `/node/${entity.id}`,
            state: { level }
          }
        ]}
        initialIndex={0}
      >
        <AppRoutes />
      </MemoryRouter>
    )
  );

  if (entity.children) {
    entity.children.forEach(child => addStory(child, level + 1));
  }
};

interactorLoader
  .loadCourse('09438926-b170-4005-a6e8-5dd8fba83cde')
  .then(interactor => {
    const course = interactor.getStructure();

    addStory(course, 0);
  });

storiesOf('PolicyManager', module)
  .add('Reset / Set status', () => {
    new DataPolicyConsentStorage().setConsent(null);
    return <DataPolicyStorybookComponent />;
  })
  .add('Older version accepted', () => {
    new DataPolicyConsentStorage().setConsent({
      version: '2000-01-01',
      consent: ConsentStatus.Accepted
    });
    return <DataPolicyStorybookComponent />;
  });

const DataPolicyStorybookComponent = () => (
  <DataPolicy
    render={accepted => (
      <View
        style={{
          top: 50
        }}
      >
        <Text>
          That should be saved now. You {accepted ? 'accepted' : 'declined'} the
          policy.
        </Text>
      </View>
    )}
  />
);
