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
      navigationMenuVisible: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentExercise !== nextProps.currentExercise) {
      this.setState({ navigationMenuVisible: false });
    }
  }

  componentDidUpdate(prevProps) {
    console.log(
      this.props.currentExerciseComplete,
      prevProps.currentExerciseComplete
    );
    if (this.props.currentExercise !== prevProps.currentExercise) {
      this.showResult();
    } else if (
      this.props.currentExerciseComplete !==
        prevProps.currentExerciseComplete &&
      this.props.currentExerciseComplete
    ) {
      console.log('show result');
      this.showResult();
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
    }
  };

  showResult = props => {
    const section = this.props.course.sections[
      this.props.currentExercise.section
    ];
    const chapter = section.chapters[this.props.currentExercise.chapter];
    const jumpToNextExercise =
      this.props.currentExercise.exercise < chapter.exercises.length - 1;
    if (this.props.currentExerciseComplete) {
      Alert.alert(
        'Exercise result',
        this.props.currentExerciseSuccess ? 'Correct!' : 'Wrong!',
        [
          {
            text: 'Next Exercise',
            onPress: jumpToNextExercise ? this.props.nextExercise : () => {}
          },
          { text: 'OK' }
        ]
      );
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
        {/* Here goes an exercise */}
        {this.props.children}

        {/* Submit Button */}
        <View style={[styles.hoveringButton, styles.bottom, styles.right]}>
          <RoundTextButton
            style={{ padding: 5 }}
            textStyle={{ fontSize: 18 }}
            text="Submit"
            onPress={this.submitExercise}
          />
        </View>

        {/* Navigation Menu */}
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

        {/* Navigation Buttons */}
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
