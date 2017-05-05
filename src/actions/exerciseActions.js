import * as types from '../constants/actionTypes';

export const markComplete = () => ({
  type: types.MARK_CURRENT_EXERCISE_COMPLETE,
})

export const nextExercise = () => ({
  type: types.NEXT_EXERCISE,
})

export const changeExercise = (index) => ({
  type: types.CHANGE_EXERCISE,
  index,
})
