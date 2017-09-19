import * as types from '../constants/actionTypes';

const course = require('../assets/courses/course.json');

// add additional information to exercises
for (let i = 0; i < course.sections.length; i++) {
  const section = course.sections[i];
  for (let j = 0; j < section.chapters.length; j++) {
    const chapter = section.chapters[j];
    for (let k = 0; k < chapter.exercises.length; k++) {
      const exercise = chapter.exercises[k];
      exercise.complete = false;
      exercise.success = false;
      exercise.section = i;
      exercise.chapter = j;
      exercise.originalIndex = null;
      // if an exercise was appended due to fail - originalIndex
      // will contain index of original exercise
    }
  }
}

const initialState = {
  course,
  currentExercise: { section: 0, chapter: 0, exercise: 0 },
  currentAnswer: null
};

const exercise = (state = initialState, action = {}) => {
  const section = state.course.sections[state.currentExercise.section];
  const chapter = section.chapters[state.currentExercise.chapter];
  const exercise = chapter.exercises[state.currentExercise.exercise];

  switch (action.type) {
    case types.SUBMIT_EXERCISE:
      // QUESTION: should it be possible to resubmit the same exercise?
      exercise.complete = true;

      if (state.currentAnswer === exercise.correctAnswer) {
        exercise.success = true;
      } else {
        exercise.success = false;
        if (exercise.originalIndex === null) {
          const repetitionExercise = {
            ...exercise,
            complete: false,
            success: false,
            originalIndex: state.currentExercise.exercise
          };
          chapter.exercises.push(repetitionExercise);
        }
      }
      return { ...state };

    case types.CHANGE_EXERCISE_ANSWER:
      exercise.complete = false;
      exercise.success = false;
      state.currentAnswer = action.answer;
      return { ...state };

    case types.CHANGE_EXERCISE:
      state.currentExercise = {
        section: action.section,
        chapter: action.chapter,
        exercise: action.exercise
      };
      state.currentAnswer = null;
      return { ...state };

    case types.NEXT_EXERCISE:
      if (state.currentExercise.exercise < chapter.exercises.length - 1) {
        state.currentExercise.exercise += 1;
        state.currentExercise = { ...state.currentExercise };
        state.currentAnswer = null;
      }
      return { ...state };

    default:
      return state;
  }
};

export default exercise;
