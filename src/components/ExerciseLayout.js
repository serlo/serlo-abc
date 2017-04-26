import React from 'react';
import { View, ScrollView, Text, StyleSheet, Button } from 'react-native';
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

  componentWillReceiveProps(nextProps) {
    this.setState({
      navigationMenuVisible: false,
    });
  }

  toggleNavigationMenu = () => {
    this.setState({
      navigationMenuVisible: !this.state.navigationMenuVisible,
    });
  }

  render () {
    const { course, changeExercise, nextExercise } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {this.props.children}

        <NavigationMenu
          visible={this.state.navigationMenuVisible}
          style={{ padding: 20, paddingTop: 70 }}
        >
          {course.sections.map((section, sectionIndex) => {
            let exerciseIndex = 0;
            return (
              <View key={`section-${sectionIndex}`}>
                <Text style={styles.sectionText}>Section {section.title}</Text>
                {section.chapters.map((chapter, chapterIndex) => (
                  <View key={`chapter-${chapterIndex}`}>
                    <Text style={styles.chapterText}>Chapter {chapter.title}</Text>
                    {chapter.exercises.map((exercise, exerciseIndex) => {
                      exerciseIndex += 1;
                      return (
                        <Button
                          title={exercise.title}
                          color={'white'}
                          key={`exercise-${exerciseIndex}`}
                          onPress={() => changeExercise(exerciseIndex - 1)}
                        />
                      );
                    })}
                  </View>
                ))}
              </View>
            );
          })}
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
            onPress={() => nextExercise()}
          />
        </View>
      </View>
    );
  }
}

export default ExerciseLayout;
