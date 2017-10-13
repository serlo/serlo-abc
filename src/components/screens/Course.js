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

    this.state = {
      course: null
    };
  }

  componentDidMount() {
    this.interactor
      .loadCourse('09438926-b170-4005-a6e8-5dd8fba83cde')
      .then(() => {
        this.interactor.getStructure(course => {
          this.setState({ course });
        });
      });
  }

  render() {
    const { course } = this.state;

    if (!course) {
      return null;
    }

    console.warn(course);

    // TODO: move UI component out of here.
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is the course with id {course.id}</Text>
      </View>
    );
  }
}

export default Course;
