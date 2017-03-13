import {
  selectFirstExercise,
  selectNextExercise,
  selectExercise,
  selectTutorial
} from '../courses/CourseAbc';

// Actions
export const NEXT = 'NEXT';
export const TUTORIAL = 'TUTORIAL';
export const BACK = 'BACK';
export const START = 'START';
export const MENU = 'MENU';

// Action creators
export const menu = () => ({
  type: MENU,
  view: { template: 'Menu' }
});

export const next = id => {
  const nextSlide = selectNextExercise(id);
  if (nextSlide) {
    return {
      type: NEXT,
      view: nextSlide
    };
  }

  return menu();
};

export const tutorial = currentExerciseId => ({
  type: TUTORIAL,
  view: selectTutorial(currentExerciseId),
  lastExercise: selectExercise(currentExerciseId)
});

export const back = () => ({
  type: BACK
});

export const start = lesson => ({
  type: START,
  view: selectFirstExercise(lesson)
});
