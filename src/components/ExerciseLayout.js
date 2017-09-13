import React from 'react';
import { View, ScrollView, Text, StyleSheet, Alert } from 'react-native';
import { RoundTextButton } from '../components/Components';
import NavigationMenu from '../components/NavigationMenu';
import { WHITE, PRIMARY_STRONG, GREEN, RED } from '../styles/colors';

const styles = StyleSheet.create({
  hoveringButton: {
    position: 'absolute'
  },
  top: {
    top: 30
  },
  bottom: {
    bottom: 10
  },
  left: {
    left: 10
  },
  right: {
    right: 10
  },
  sectionText: {
    fontSize: 18,
    fontWeight: '600',
    color: WHITE
  },
  chapterText: {
    fontSize: 16,
    fontWeight: '500',
    color: WHITE,
    marginBottom: 10
  },
  menuButton: {
    margin: 10,
    marginTop: 0
  }
});

class ExerciseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextExercise: '/test',
      navigationMenuVisible: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.children !== nextProps.children) {
      this.setState({
        navigationMenuVisible: false
      });
    }
  }

  toggleNavigationMenu = () => {
    this.setState({
      navigationMenuVisible: !this.state.navigationMenuVisible
    });
  };

  submitExercise = () => {
    if (this.props.currentAnswer === null) {
      Alert.alert('Please select an answer first');
    } else {
      this.props.submitExercise();
      setTimeout(() => {
        this.props.nextExercise();
      }, 1000);
    }
  };

  render() {
    const {
      course,
      changeExercise,
      nextExercise,
      currentExercise
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {this.props.children}

        <View style={[styles.hoveringButton, styles.bottom, styles.right]}>
          <RoundTextButton
            textStyle={{ fontSize: 18 }}
            text="Submit"
            onPress={this.submitExercise}
          />
        </View>

        <NavigationMenu
          visible={this.state.navigationMenuVisible}
          style={{ padding: 20, paddingTop: 80 }}
        >
          {course.sections.map((section, sIndex) =>
            <View key={`s_${sIndex}`}>
              <Text style={styles.sectionText}>
                Section {section.title}
              </Text>
              {section.chapters.map((chapter, cIndex) =>
                <View key={`s_${sIndex}_c_${cIndex}`}>
                  <Text style={styles.chapterText}>
                    Chapter {chapter.title}
                  </Text>
                  {chapter.exercises.map((exercise, eIndex) => {
                    const menuButton = [styles.menuButton];
                    let onPress = () => changeExercise(sIndex, cIndex, eIndex);
                    if (exercise.complete) {
                      menuButton.push({
                        backgroundColor: exercise.success ? GREEN : RED
                      });
                    }
                    if (
                      currentExercise.section === sIndex &&
                      currentExercise.chapter === cIndex &&
                      currentExercise.exercise === eIndex
                    ) {
                      menuButton.push({ backgroundColor: PRIMARY_STRONG });
                      onPress = () => {};
                    }
                    return (
                      <RoundTextButton
                        text={exercise.title}
                        textStyle={{ fontSize: 18 }}
                        style={menuButton}
                        key={`s_${sIndex}_c_${cIndex}_e_${eIndex}`}
                        onPress={onPress}
                      />
                    );
                  })}
                </View>
              )}
            </View>
          )}
        </NavigationMenu>

        <View style={[styles.hoveringButton, styles.top, styles.left]}>
          <RoundTextButton
            size={30}
            textStyle={{ fontSize: 15 }}
            text="☰"
            onPress={this.toggleNavigationMenu}
          />
        </View>
        <View style={[styles.hoveringButton, styles.top, styles.right]}>
          <RoundTextButton
            size={30}
            textStyle={{ fontSize: 15 }}
            text="➔"
            onPress={nextExercise}
          />
        </View>
      </View>
    );
  }
}

export default ExerciseLayout;
