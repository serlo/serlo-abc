import { START, NEXT, TUTORIAL, MENU, BACK } from '../actions';
// Selectors
export const selectView = state => state.view;
export const selectLastExercise = state => state.lastExercise;

const defaultState = {
  view: { template: 'Menu' }
};
// Reducers
export default (state = defaultState, action) => {
  switch (action.type) {
    case TUTORIAL:
      return Object.assign({}, state, {
        view: action.view,
        lastExercise: action.lastExercise
      });

    case START:
    case NEXT:
    case MENU:
      return {
        view: action.view
      };

    case BACK:
      return {
        view: state.lastExercise
      };

    default:
      return state;
  }
};
