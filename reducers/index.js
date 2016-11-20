import { NEXT, TUTORIAL } from '../actions'

// Selectors
export const selectView = (state) => state.view

// Reducers
export default (state = {view:{template:"Text", text:"Hallo"}}, action) => {
      return state
}
