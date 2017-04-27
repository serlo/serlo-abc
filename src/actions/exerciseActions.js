import * as types from '../constants/actionTypes';

export const nextExercise = () => ({
  type: types.NEXT_EXERCISE,
})

export const changeExercise = (section, chapter, exercise) => ({
  type: types.CHANGE_EXERCISE,
  section,
  chapter,
  exercise,
})

export const submitExercise = () => ({
  type: types.SUBMIT_EXERCISE,
})

export const selectAnswer = (answer) => ({
  type: types.SELECT_EXERCISE_ANSWER,
  answer,
})
