'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var id = 10;

var ADD_USER = exports.ADD_USER = 'ADD_USER';
var UPDATE_USER = exports.UPDATE_USER = 'UPDATE_USER';
var REMOVE_USER = exports.REMOVE_USER = 'REMOVE_USER';

var CHANGE_ACTIVE_USER = exports.CHANGE_ACTIVE_USER = 'CHANGE_ACTIVE_USER';

var VIEW_MOD = exports.VIEW_MOD = 'VIEW_MOD';

var addUser = exports.addUser = function addUser(_ref) {
  var name = _ref.name,
      username = _ref.username,
      email = _ref.email;
  return {
    type: ADD_USER,
    id: ++id,
    name: name,
    username: username,
    email: email
  };
};
var updateUser = exports.updateUser = function updateUser(_ref2) {
  var id = _ref2.id,
      name = _ref2.name,
      username = _ref2.username,
      email = _ref2.email;
  return {
    type: UPDATE_USER,
    id: id,
    name: name,
    username: username,
    email: email
  };
};
var removeUser = exports.removeUser = function removeUser(id) {
  return {
    type: REMOVE_USER,
    id: id
  };
};
var changeActiveUser = exports.changeActiveUser = function changeActiveUser(id) {
  return {
    type: CHANGE_ACTIVE_USER,
    id: id
  };
};

var changeViewMod = exports.changeViewMod = function changeViewMod(mod) {
  return {
    type: VIEW_MOD,
    mod: mod
  };
};