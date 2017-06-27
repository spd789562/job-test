import { createStore } from 'redux'

export const getInitialStore = (reducers, initialStore, isServer) => {
  // // if(!!window){
  // //   return createStore(reducers, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  // // } else {
  //   return createStore(reducers, initialStore)
  // // }
  if (isServer && typeof window === 'undefined') {
    return createStore(reducers, {users: initialStore})
  } else {
    return createStore(reducers, {users: initialStore}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  }
}