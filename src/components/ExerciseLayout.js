import React from 'react';
import { View, ScrollView, Text, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-redux-router';
import { RoundTextButton } from '../components/Components';
import NavigationMenu from '../components/NavigationMenu';


const styles = StyleSheet.create({
  hoveringButton: {
    position: 'absolute',
    top: 25,
  },
  left: {
    left: 10,
  },
  right: {
    right: 10,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: "600",
    color: 'white',
  },
  chapterText: {
    fontSize: 16,
    fontWeight: "500",
    color: 'white',
  },
});

class ExerciseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextExercise: '/test',
      navigationMenuVisible: false,
    };
  }

  toggleNavigationMenu = () => {
    this.setState({
      navigationMenuVisible: !this.state.navigationMenuVisible,
    });
  }

  render () {
    const { course } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {this.props.children}

        <NavigationMenu
          visible={this.state.navigationMenuVisible}
          style={{ padding: 20, paddingTop: 70 }}
        >
          {course.sections.map((section, sectionIndex) => (
            <View key={`section-${sectionIndex}`}>
              <Text style={styles.sectionText}>Section {section.title}</Text>
              {section.chapters.map((chapter, chapterIndex) => (
                <View key={`chapter-${chapterIndex}`}>
                  <Text style={styles.chapterText}>Chapter {chapter.title}</Text>
                  {chapter.exercises.map((exercise, exerciseIndex) => {
                    const name = exercise.component;
                    const props = JSON.stringify(exercise.props);
                    return (
                      <Button
                        title={exercise.title}
                        color={'white'}
                        key={`exercise-${exerciseIndex}`}
                        onPress={() => {
                          Actions.exercise({
                            exerciseComponent: exercise.component,
                            exerciseProps: exercise.props,
                          });
                        }}
                      />
                    );
                  })}
                </View>
              ))}
            </View>
          ))}
        </NavigationMenu>

        <View style={[styles.hoveringButton, styles.left]}>
          <RoundTextButton
            size={30}
            textStyle={{ fontSize: 15 }}
            text="☰"
            onPress={this.toggleNavigationMenu}
          />
        </View>
        <View style={[styles.hoveringButton, styles.right]}>
          <RoundTextButton
            title={exercise.title}
            size={30}
            textStyle={{ fontSize: 15 }}
            text="➔"
            onPress={() => Actions.exercise()}
          />
        </View>
      </View>
    );
  }
}

export default ExerciseLayout;
