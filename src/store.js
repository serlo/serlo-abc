import { createStore } from 'redux'
import devTools from 'remote-redux-devtools'

import rootReducer from './reducers'

export default (initialState) => {
  const store = createStore(rootReducer, initialState, devTools())

  return store
}
