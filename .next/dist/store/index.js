'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialStore = undefined;

var _redux = require('redux');

var getInitialStore = exports.getInitialStore = function getInitialStore(reducers, initialStore, isServer) {
  // // if(!!window){
  // //   return createStore(reducers, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  // // } else {
  //   return createStore(reducers, initialStore)
  // // }
  if (isServer && typeof window === 'undefined') {
    return (0, _redux.createStore)(reducers, { users: initialStore });
  } else {
    return (0, _redux.createStore)(reducers, { users: initialStore }, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
};