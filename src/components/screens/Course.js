import { map } from 'ramda';
import React from 'react';
import { View, Dimensions } from 'react-native';

import RoundIconButton from '../common/RoundIconButton';
import RoundTextButton from '../common/RoundTextButton';
import { Progress } from '../../../packages/entities-interactor/ISerializedProgress';
import { WHITE, GREEN, BLACK } from '../../styles/colors';

const Course = ({ course, goToSection, getProgress }) => {
  if (!course) {
    return null;
  }
  const { width } = Dimensions.get('window');
  const scale = width / 360;

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
              marginTop: 10 * scale,
              marginBottom: 10 * scale
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
                    margin: 5 * scale,
                    marginTop: 0,
                    paddingLeft: 10 * scale,
                    paddingRight: 10 * scale,
                    width: 60 * scale,
                    height: 40 * scale
                  }
                ],
                color: progress === Progress.Incorrect ? BLACK : WHITE,
                textStyle: {
                  fontSize: 18 * scale,
                  color: progress === Progress.Incorrect ? BLACK : WHITE
                },
                onPress: () => {
                  goToSection(section.id);
                }
              };

              if (section.icon) {
                return (
                  <RoundIconButton
                    name={section.icon}
                    {...props}
                    size={30 * scale}
                  />
                );
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
