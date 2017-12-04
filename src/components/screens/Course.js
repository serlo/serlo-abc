import { Entypo, Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import { map } from 'ramda';
import React, { Component } from 'react';
import { Button, StyleSheet, View, ScrollView, Text } from 'react-native';

import { version } from '../../../package.json';
import { RoundIconButton } from '../common/buttons';
import RoundTextButton from '../common/RoundTextButton';
import { Progress } from '../../../packages/entities-interactor/ISerializedProgress';
import { GREEN, WHITE } from '../../styles/colors';
import { FONT_FAMILY } from '../../styles/text';
import { WithDimensions } from '../helpers/dimensions';
import { PortraitScreenOrientation } from '../helpers/screen-orientation';

const styles = StyleSheet.create({
  hoveringButton: {
    position: 'absolute'
  },
  top: {
    top: Constants.statusBarHeight + 15
  },
  bottom: {
    bottom: 15
  },
  left: {
    left: 15
  },
  right: {
    right: 15
  }
});

class Course extends Component {
  render() {
    const {
      course,
      goToSection,
      getProgress,
      next,
      resetProgress
    } = this.props;

    if (!course) {
      return null;
    }

    return (
      <WithDimensions
        render={({ width }) => {
          const scale = width / 360;

          return (
            <PortraitScreenOrientation>
              <ScrollView
                contentContainerStyle={{
                  paddingTop: 100,
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
                            id === next && {
                              borderColor: GREEN,
                              borderWidth: 5
                            },
                            progress === Progress.Correct && {
                              backgroundColor: GREEN
                            },
                            {
                              margin: 5 * scale,
                              marginTop: 0,
                              paddingLeft: 10 * scale,
                              paddingRight: 10 * scale,
                              width: 60 * scale,
                              height: 40 * scale
                            }
                          ],
                          textStyle: {
                            fontSize: 18 * scale
                          },
                          onPress: () => {
                            goToSection(section.id);
                          }
                        };

                        if (section.icon) {
                          return (
                            <RoundIconButton
                              IconComponent={Ionicons}
                              name={section.icon}
                              {...props}
                              size={30 * scale}
                            />
                          );
                        }

                        if (section.title) {
                          return (
                            <RoundTextButton text={section.title} {...props} />
                          );
                        }
                      }, chapter.children)}
                    </View>
                  ),
                  course.children
                )}
                <Text style={[{ color: WHITE }, FONT_FAMILY]}>
                  Versionsnummer: {version}
                </Text>
                {__DEV__ && (
                  <Button
                    onPress={() => {
                      resetProgress();
                    }}
                    title="Reset progress"
                  />
                )}
                {next && (
                  <View
                    style={[styles.hoveringButton, styles.top, styles.right]}
                  >
                    <RoundIconButton
                      onPress={() => goToSection(next)}
                      IconComponent={Entypo}
                      name="chevron-right"
                      size={25}
                    />
                  </View>
                )}
              </ScrollView>
            </PortraitScreenOrientation>
          );
        }}
      />
    );
  }
}

export default Course;
