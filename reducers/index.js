import { INCREMENT, DECREMENT } from '../actions'

// Selectors
export const selectCounter = (state) => state

// Reducers
export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}
