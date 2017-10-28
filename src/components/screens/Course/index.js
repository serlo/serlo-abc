import { map } from 'ramda';
import React, { Component } from 'react';
import { View } from 'react-native';

import { PRIMARY } from '../../../styles/colors';
import courses from '../../../assets/courses.json';
import Interactor from '../../../entities-interactor';
import Storage from '../../../storage/CourseStorage';
import RoundIconButton from '../../common/RoundIconButton';
import RoundTextButton from '../../common/RoundTextButton';

class Course extends Component {
  constructor(props) {
    super(props);

    const storage = new Storage(courses);
    const progress = null; // TODO:
    this.interactor = new Interactor(storage, progress);

    this.state = { course: null };
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

    if (!course) {
      return null;
    }

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: PRIMARY,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {map(
          chapter => (
            <View
              key={chapter.id}
              style={{
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 10
              }}
            >
              {map(section => {
                const props = {
                  key: section.id,
                  style: {
                    margin: 5,
                    marginTop: 0,
                    paddingLeft: 10,
                    paddingRight: 10,
                    width: 60,
                    height: 40
                  },
                  onPress: () => {
                    goToSection(section.id);
                  }
                };

                if (section.icon) {
                  return <RoundIconButton name={section.icon} {...props} />;
                }

                if (section.title) {
                  return (
                    <RoundTextButton
                      text={section.title}
                      textStyle={{ fontSize: 18 }}
                      {...props}
                    />
                  );
                }
              }, chapter.children)}
            </View>
          ),
          course.children
        )}
      </View>
    );
  }
}

export default Course;
