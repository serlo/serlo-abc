import React from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar } from 'react-native';
import { RoundTextButton } from '../components/Components';
import NavigationMenu from '../components/NavigationMenu';
import { WHITE, GREEN } from '../styles/colors';


const styles = StyleSheet.create({
  hoveringButton: {
    position: 'absolute',
    top: StatusBar.currentHeight + 15,
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
    color: WHITE,
  },
  chapterText: {
    fontSize: 16,
    fontWeight: "500",
    color: WHITE,
  },
  menuButton: {
    margin: 10,
  }
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
    const { course, changeExercise, nextExercise, currentExercise } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {this.props.children}

        <NavigationMenu
          visible={this.state.navigationMenuVisible}
          style={{ padding: 20, paddingTop: StatusBar.currentHeight + 60 }}
        >
          {course.sections.map((section, sectionIndex) => {
            let exerciseIndex = 0;
            return (
              <View key={`s_${sectionIndex}`}>
                <Text style={styles.sectionText}>Section {section.title}</Text>
                {section.chapters.map((chapter, chapterIndex) => (
                  <View key={`s_${sectionIndex}_c_${chapterIndex}`}>
                    <Text style={styles.chapterText}>Chapter {chapter.title}</Text>
                    {chapter.exercises.map((exercise) => {
                      const eIndex = exerciseIndex;
                      exerciseIndex += 1;
                      const menuButton = [styles.menuButton];
                      let onPress = () => changeExercise(eIndex);
                      if (currentExercise === eIndex) {
                        menuButton.push({ backgroundColor: GREEN });
                        onPress = () => {}
                      }
                      return (
                        <RoundTextButton
                          text={exercise.title}
                          style={menuButton}
                          key={`e_${eIndex}`}
                          onPress={onPress}
                        />
                      );;
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
