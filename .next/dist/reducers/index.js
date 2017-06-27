'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actions = require('../actions');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var _ref = arguments[1];
  var type = _ref.type,
      id = _ref.id,
      name = _ref.name,
      username = _ref.username,
      email = _ref.email;

  switch (type) {
    case _actions.ADD_USER:
      return [].concat((0, _toConsumableArray3.default)(state), [{
        id: id,
        name: name,
        username: username,
        email: email
      }]);
    case _actions.UPDATE_USER:
      return state.map(function (user) {
        return user.id === id ? { id: id, name: name, username: username, email: email } : user;
      });
    case _actions.REMOVE_USER:
      return state.filter(function (user) {
        return user.id !== id;
      });
    default:
      return state;
  }
};

var activeUser = function activeUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var _ref2 = arguments[1];
  var type = _ref2.type,
      id = _ref2.id;

  switch (type) {
    case _actions.CHANGE_ACTIVE_USER:
      return id;
    default:
      return state;
  }
};

//status 0: none, 1:view user, 2: add user

var viewMod = function viewMod() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var _ref3 = arguments[1];
  var type = _ref3.type,
      mod = _ref3.mod;

  switch (type) {
    case _actions.VIEW_MOD:
      return mod;
    default:
      return state;
  }
};

var AppReducer = (0, _redux.combineReducers)({
  users: users,
  activeUser: activeUser,
  viewMod: viewMod
});

exports.default = AppReducer;