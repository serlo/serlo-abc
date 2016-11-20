import { NEXT, TUTORIAL } from '../actions'

// Selectors
export const selectView = (state) => state.view

// Reducers
export default (state = {view:{template:"Text", text:"Hallo"}}, action) => {
  switch (action.type) {
    case TUTORIAL:
      return Object.assign({}, state, {
        view:{template:"TextTutorial", explanation:"blablabla"},
        lastView:action.currentView
      })
    default:
      return state
  }
}
