import { storiesOf } from '@storybook/react-native';
import * as R from 'ramda';
import React from 'react';
import { MemoryRouter } from 'react-router-native';

import Interactor from '../packages/entities-interactor';
import courses from '../packages/assets/courses.json';
import Storage from './storage/CourseStorage';
import ProgressStorage from './storage/ProgressStorage';
import App, { AppRoutes } from '.';

storiesOf('App', module).add('default', () => <App />);

const storage = new Storage(courses);
const progressStorage = new ProgressStorage();
const interactor = new Interactor(storage, progressStorage);

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

interactor.loadCourse('09438926-b170-4005-a6e8-5dd8fba83cde').then(() => {
  const course = interactor.getStructure();

  addStory(course, 0);
});
