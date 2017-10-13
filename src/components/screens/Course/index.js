import { flatten, map } from 'ramda';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import RoundTextButton from '../../common/RoundTextButton';
import courses from '../../../assets/courses.json';
import Interactor from '../../../entities-interactor';
import Storage from '../../../storage/CourseStorage';

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
        const course = this.interactor.getStructure();
        this.setState({ course });
      });
  }

  render() {
    const { course } = this.state;
    const { goToSection } = this.props;

    console.warn(goToSection);

    if (!course) {
      return null;
    }

    console.warn(JSON.stringify(course, null, 2));

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {flatten(
          map(
            chapter =>
              map(
                section => (
                  <RoundTextButton
                    text={section.title}
                    textStyle={{ fontSize: 18 }}
                    style={{
                      margin: 10,
                      marginTop: 0,
                      paddingLeft: 10,
                      paddingRight: 10
                    }}
                    key={section.id}
                    onPress={() => {
                      goToSection(section.id);
                    }}
                  />
                ),
                chapter.children
              ),
            course.children
          )
        )}
      </View>
    );
  }
}

export default Course;
