import React, { Component } from 'react';
import { Text, View } from 'react-native';

import courses from '../../assets/courses.json';
import Interactor from '../../entities-interactor';
import Storage from '../../storage/CourseStorage';

class Course extends Component {
  constructor(props) {
    super(props);

    const storage = new Storage(courses);
    const progress = null; // TODO:
    this.interactor = new Interactor(storage, progress);
  }

  componentDidMount() {
    this.interactor
      .loadCourse('09438926-b170-4005-a6e8-5dd8fba83cde')
      .then(() => {
        console.warn('loaded');
      });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is a course</Text>
      </View>
    );
  }
}

export default Course;
