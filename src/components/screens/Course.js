import { map } from 'ramda';
import React from 'react';
import { View } from 'react-native';

import RoundIconButton from '../common/RoundIconButton';
import RoundTextButton from '../common/RoundTextButton';

const Course = ({ course, goToSection }) => {
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
};

export default Course;
