import * as types from '../constants/actionTypes';

export const markAsFinished = (section, chapter, exercise) => {
  return { type: types.MARK_EXERCISE_FINISHED };
};

export const markAsUnfinished = (section, chapter, exercise) => {
  return { type: types.MARK_EXERCISE_UNFINISHED };
};
