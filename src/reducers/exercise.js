import * as types from '../constants/actionTypes';

const course = require('../assets/courses/course.json');

// make a "timeline" for exercises
const exercises = [];
for (let i = 0; i < course.sections.length; i++) {
  const section = course.sections[i];
  for (let j = 0; j < section.chapters.length; j++) {
    const chapter = section.chapters[j];
    for (let k = 0; k < chapter.exercises.length; k++) {
      const exercise = chapter.exercises[k];
      exercises.push(exercise);
    }
  }
}

const initialState = {
  course,
  exercises,
};

export default exercise = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
}
