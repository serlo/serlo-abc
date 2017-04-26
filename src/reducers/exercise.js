import * as types from '../constants/actionTypes';
import { AsyncStorage, Alert } from 'react-native';

const course = require('../assets/courses/course.json');

// make a "timeline" for exercises
const exercises = [];
for (let i = 0; i < course.sections.length; i++) {
  const section = course.sections[i];
  for (let j = 0; j < section.chapters.length; j++) {
    const chapter = section.chapters[j];
    for (let k = 0; k < chapter.exercises.length; k++) {
      const exercise = chapter.exercises[k];
      exercise.complete = false; // later take this info from storage
      exercises.push(exercise);
    }
  }
}

const initialState = {
  course,
  exercises,
};

// init current exercise from storage
AsyncStorage
  .getItem('@exercise:currentExercise')
  .then((value) => {
    if (value === null) {
      initialState.currentExercise = 0;
    } else {
      initialState.currentExercise = JSON.parse(value);
    }
  });

export default exercise = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.MARK_CURRENT_EXERCISE_COMPLETE:
      state.exercises[currentExercise].complete = true;
      if (state.currentExercise < exercises.length - 1) {
        state.currentExercise += 1;
      }
      return { ...state };
      break;
    case types.CHANGE_EXERCISE:
      AsyncStorage.setItem(
        '@exercise:currentExercise',
        JSON.stringify(action.index)
      );
      return { ...state, currentExercise: action.index };
      break;
    case types.NEXT_EXERCISE:
      if (state.currentExercise < exercises.length - 1) {
        state.currentExercise += 1;
        AsyncStorage.setItem(
          '@exercise:currentExercise',
          JSON.stringify(state.currentExercise)
        );
      }
      return { ...state };
      break;
    default:
      return state;
  }
}
