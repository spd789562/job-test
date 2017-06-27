import { createStore } from 'redux'

export const getInitialStore = (reducers, initialStore) => {
  return createStore(reducers, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}