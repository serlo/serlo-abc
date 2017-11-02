import { map } from 'ramda';
import React from 'react';
import { View } from 'react-native';

import RoundIconButton from '../common/RoundIconButton';
import RoundTextButton from '../common/RoundTextButton';
import { Progress } from '../../../packages/entities-interactor/ISerializedProgress';
import { WHITE, GREEN, BLACK } from '../../styles/colors';

const Course = ({ course, goToSection, getProgress }) => {
  if (!course) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
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
              const { id } = section;
              const { progress } = getProgress(id);

              const props = {
                key: id,
                style: [
                  progress === Progress.Incorrect && {
                    backgroundColor: WHITE
                  },
                  progress === Progress.Correct && { backgroundColor: GREEN },
                  {
                    margin: 5,
                    marginTop: 0,
                    paddingLeft: 10,
                    paddingRight: 10,
                    width: 60,
                    height: 40
                  }
                ],
                color: progress === Progress.Incorrect ? BLACK : WHITE,
                textStyle: {
                  fontSize: 18,
                  color: progress === Progress.Incorrect ? BLACK : WHITE
                },
                onPress: () => {
                  goToSection(section.id);
                }
              };

              if (section.icon) {
                return <RoundIconButton name={section.icon} {...props} />;
              }

              if (section.title) {
                return <RoundTextButton text={section.title} {...props} />;
              }
            }, chapter.children)}
          </View>
        ),
        course.children
      )}
    </View>
  );
};

export default Course;
