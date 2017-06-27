
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(573);

var _reducers = __webpack_require__(564);

var _reducers2 = _interopRequireDefault(_reducers);

var _store = __webpack_require__(565);

var _isomorphicUnfetch = __webpack_require__(554);

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _App = __webpack_require__(586);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\app_test\\reduxtest\\pages\\index.js?entry',
    _this2 = undefined;

var Page = function (_Component) {
  (0, _inherits3.default)(Page, _Component);

  function Page() {
    (0, _classCallCheck3.default)(this, Page);

    return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
  }

  (0, _createClass3.default)(Page, [{
    key: 'render',
    value: function render() {
      var store = (0, _store.getInitialStore)(_reducers2.default, this.props.users, this.props.isServer);
      return _react2.default.createElement(_reactRedux.Provider, { store: store, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_App2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }));
    }
  }]);

  return Page;
}(_react.Component);

Page.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
    var req = _ref.req;
    var res, users;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _isomorphicUnfetch2.default)('http://jsonplaceholder.typicode.com/users');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            users = _context.sent;
            return _context.abrupt('return', { users: users, isServer: !!req });

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = Page;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\app_test\\reduxtest\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\app_test\\reduxtest\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\app_test\\reduxtest\\actions\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\app_test\\reduxtest\\actions\\index.js"); } } })();

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(97);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _actions = __webpack_require__(563);

var _redux = __webpack_require__(542);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\app_test\\reduxtest\\reducers\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\app_test\\reduxtest\\reducers\\index.js"); } } })();

/***/ }),

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialStore = undefined;

var _redux = __webpack_require__(542);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\app_test\\reduxtest\\store\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\app_test\\reduxtest\\store\\index.js"); } } })();

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(551);


/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(588);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\app_test\\reduxtest\\component\\user.js";


var User = function User(_ref) {
  var user = _ref.user,
      changeUser = _ref.changeUser;
  return _react2.default.createElement("li", { className: "user", "data-jsx": 240395754,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 240395754,
    css: ".user-button[data-jsx=\"240395754\"]{padding:2rem;width:100%;height:5rem;-webkit-text-align:left;text-align:left;font-size:1rem}.user-button[data-jsx=\"240395754\"]:hover{background-color:#cecece}.user[data-jsx=\"240395754\"]:nth-child(odd){background-color:#ededed}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudFxcdXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJZ0IsQUFHc0IsQUFDWSxBQUNBLGNBRlEsWUFBcUIsQUFDdEIsQUFDQSxhQUYrQywwQ0FBd0IsZ0JBQU8iLCJmaWxlIjoiY29tcG9uZW50XFx1c2VyLmpzIiwic291cmNlUm9vdCI6IkU6L2FwcF90ZXN0L3JlZHV4dGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFVzZXIgPSAoe3VzZXIsIGNoYW5nZVVzZXJ9KSA9PiAoXHJcbiAgPGxpIGNsYXNzTmFtZT1cInVzZXJcIj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnVzZXItYnV0dG9ue1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC51c2VyLWJ1dHRvbjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xyXG4gICAgICB9XHJcbiAgICAgIC51c2VyOm50aC1jaGlsZChvZGQpe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwidXNlci1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VVc2VyKHVzZXIuaWQpfT5cclxuICAgICAge3VzZXIubmFtZX1cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvbGk+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXIiXX0= */\n/*@ sourceURL=component\\user.js */"
  }), _react2.default.createElement("button", { className: "user-button", onClick: function onClick() {
      return changeUser(user.id);
    }, "data-jsx": 240395754,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, user.name));
};

exports.default = User;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\app_test\\reduxtest\\component\\user.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\app_test\\reduxtest\\component\\user.js"); } } })();

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(583);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(588);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(563);

var _reactRedux = __webpack_require__(573);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\app_test\\reduxtest\\container\\AddUser.js';


var AddUser = function (_Component) {
  (0, _inherits3.default)(AddUser, _Component);

  function AddUser(props) {
    (0, _classCallCheck3.default)(this, AddUser);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddUser.__proto__ || (0, _getPrototypeOf2.default)(AddUser)).call(this, props));

    _this.handleInput = function (input, stateName) {
      _this.setState((0, _defineProperty3.default)({}, stateName, input.target.value));
    };

    _this.handleAddUser = function () {
      var _this$props = _this.props,
          addUser = _this$props.addUser,
          changeMod = _this$props.changeMod;
      var _this$state = _this.state,
          name = _this$state.name,
          username = _this$state.username,
          email = _this$state.email;

      addUser({
        name: name,
        username: username,
        email: email
      });
      alert('新增成功');
      changeMod(0);
    };

    _this.state = {
      name: '',
      username: '',
      email: ''
    };
    return _this;
  }

  (0, _createClass3.default)(AddUser, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        'data-jsx': 2874840603,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 2874840603,
        css: '.add-button[data-jsx="2874840603"]{position:absolute;bottom:0;height:3rem;width:100%;font-size:1.3rem}.add-button[data-jsx="2874840603"]:hover{background-color:#49CF49;color:#fff}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcQWRkVXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ29CLEFBRytCLEFBRTlCLG1CQUZvRCxPQUU3QixHQUZzRCxTQUUzQyxJQUZtRSxZQUE4QixrQkFBVyIsImZpbGUiOiJjb250YWluZXJcXEFkZFVzZXIuanMiLCJzb3VyY2VSb290IjoiRTovYXBwX3Rlc3QvcmVkdXh0ZXN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBhZGRVc2VyLCBjaGFuZ2VWaWV3TW9kIH0gZnJvbSAnLi4vYWN0aW9ucydcclxuXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmNsYXNzIEFkZFVzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgZW1haWw6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUlucHV0ID0gKGlucHV0LCBzdGF0ZU5hbWUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1tzdGF0ZU5hbWVdOiBpbnB1dC50YXJnZXQudmFsdWV9KVxyXG4gIH1cclxuICBoYW5kbGVBZGRVc2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBhZGRVc2VyLFxyXG4gICAgICBjaGFuZ2VNb2RcclxuICAgIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBlbWFpbFxyXG4gICAgfSA9IHRoaXMuc3RhdGVcclxuICAgIGFkZFVzZXIoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgZW1haWxcclxuICAgIH0pXHJcbiAgICBhbGVydCgn5paw5aKe5oiQ5YqfJylcclxuICAgIGNoYW5nZU1vZCgwKVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC5hZGQtYnV0dG9ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWRkLWJ1dHRvbjpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5Q0Y0OVxyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPGRsPlxyXG4gICAgICAgICAgPGxhYmVsPm5hbWXvvJo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVJbnB1dChlLCAnbmFtZScpfSAvPjxiciAvPlxyXG4gICAgICAgICAgPGxhYmVsPnVzZXJuYW1l77yaPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUlucHV0KGUsICd1c2VybmFtZScpfSAvPjxiciAvPlxyXG4gICAgICAgICAgPGxhYmVsPmVtYWls77yaPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUlucHV0KGUsICdlbWFpbCcpfSAvPlxyXG4gICAgICAgIDwvZGw+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkVXNlcn0+XHJcbiAgICAgICAgICAgIOaWsOWinlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PiAgICBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgdXNlcjogc3RhdGUudXNlcnNbc3RhdGUuYWN0aXZlVXNlcl1cclxufSlcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGFkZFVzZXI6ICguLi5hcmdzKSA9PiBkaXNwYXRjaChhZGRVc2VyKC4uLmFyZ3MpKSxcclxuICBjaGFuZ2VNb2Q6IChtb2QpID0+IGRpc3BhdGNoKGNoYW5nZVZpZXdNb2QobW9kKSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFkZFVzZXIpIl19 */\n/*@ sourceURL=container\\AddUser.js */'
      }), _react2.default.createElement('dl', {
        'data-jsx': 2874840603,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('label', {
        'data-jsx': 2874840603,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'name\uFF1A'), _react2.default.createElement('input', { type: 'text', value: this.state.name, onChange: function onChange(e) {
          return _this2.handleInput(e, 'name');
        }, 'data-jsx': 2874840603,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement('br', {
        'data-jsx': 2874840603,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement('label', {
        'data-jsx': 2874840603,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'username\uFF1A'), _react2.default.createElement('input', { type: 'text', value: this.state.username, onChange: function onChange(e) {
          return _this2.handleInput(e, 'username');
        }, 'data-jsx': 2874840603,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement('br', {
        'data-jsx': 2874840603,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement('label', {
        'data-jsx': 2874840603,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, 'email\uFF1A'), _react2.default.createElement('input', { type: 'text', value: this.state.email, onChange: function onChange(e) {
          return _this2.handleInput(e, 'email');
        }, 'data-jsx': 2874840603,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })), _react2.default.createElement('footer', {
        'data-jsx': 2874840603,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('button', { className: 'add-button', onClick: this.handleAddUser, 'data-jsx': 2874840603,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, '\u65B0\u589E')));
    }
  }]);

  return AddUser;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.users[state.activeUser]
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addUser: function addUser() {
      return dispatch(_actions.addUser.apply(undefined, arguments));
    },
    changeMod: function changeMod(mod) {
      return dispatch((0, _actions.changeViewMod)(mod));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddUser);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\app_test\\reduxtest\\container\\AddUser.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\app_test\\reduxtest\\container\\AddUser.js"); } } })();

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(588);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__(584);

var _user2 = _interopRequireDefault(_user);

var _viewUser = __webpack_require__(587);

var _viewUser2 = _interopRequireDefault(_viewUser);

var _AddUser = __webpack_require__(585);

var _AddUser2 = _interopRequireDefault(_AddUser);

var _actions = __webpack_require__(563);

var _reactRedux = __webpack_require__(573);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\app_test\\reduxtest\\container\\App.js';


var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.handleChangeUser = function (id) {
      _this.props.changeUser(id);
      _this.props.changeMod(1);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          users = _props.users,
          mod = _props.mod,
          changeMod = _props.changeMod;

      return _react2.default.createElement('div', { className: 'container', 'data-jsx': 3400576515,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 4242375101,
        css: '*{margin:0;padding:0;box-sizing:border-box}button{background-color:transparent;border:none;cursor:pointer}.container{max-width:600px}input[type="text"]{border:none;border-bottom:1px solid #999}label{display:inline-block;width:8rem;font-size:1.6rem}input{font-size:1.1rem}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCMkIsQUFHc0IsQUFDb0IsQUFDZCxBQUNILEFBRVEsQUFDSCxVQU5lLEdBSTVDLEdBRnNDLEVBSUUsR0FOdUMsQUFLdkIsU0FKVSxHQUlvQixVQUpRLEFBR3BGLENBSmdGLE9BS08sUUFKUSIsImZpbGUiOiJjb250YWluZXJcXEFwcC5qcyIsInNvdXJjZVJvb3QiOiJFOi9hcHBfdGVzdC9yZWR1eHRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBVc2VyIGZyb20gJy4uL2NvbXBvbmVudC91c2VyJ1xyXG5pbXBvcnQgVmlld1VzZXIgZnJvbSAnLi92aWV3VXNlcidcclxuaW1wb3J0IEFkZFVzZXIgZnJvbSAnLi9BZGRVc2VyJ1xyXG5cclxuaW1wb3J0IHsgY2hhbmdlQWN0aXZlVXNlciwgY2hhbmdlVmlld01vZCB9IGZyb20gJy4uL2FjdGlvbnMnXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgaGFuZGxlQ2hhbmdlVXNlciA9IChpZCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VVc2VyKGlkKVxyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VNb2QoMSlcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB1c2VycyxcclxuICAgICAgbW9kLFxyXG4gICAgICBjaGFuZ2VNb2RcclxuICAgIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbnRhaW5lcntcclxuICAgICAgICAgICAgbWF4LXdpZHRoOjYwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl17XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDhyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAudXNlcnN7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzZXJ2aWV3e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hZGQtYnV0dG9ue1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDowOyByaWdodDowO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgICAgY29sb3I6ICNBQUE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWRkLWJ1dHRvbjpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0NcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbnNpbml0YWwtdGV4dHtcclxuICAgICAgICAgICAgY29sb3I6ICNBQUE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1c2Vyc1wiPlxyXG4gICAgICAgICAgeyB1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiA8VXNlciB1c2VyPXt1c2VyfSBjaGFuZ2VVc2VyPXt0aGlzLmhhbmRsZUNoYW5nZVVzZXJ9IGtleT17aW5kZXh9IC8+KSB9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJ2aWV3XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC1idXR0b25cIm9uQ2xpY2s9eygpID0+IGNoYW5nZU1vZCgyKX0+KzwvYnV0dG9uPlxyXG4gICAgICAgICAge21vZCA9PT0gMT88Vmlld1VzZXIgLz4gOiBtb2QgPT09IDI/PEFkZFVzZXIgLz4gOiA8c3BhbiBjbGFzc05hbWU9XCJpbnNpbml0YWwtdGV4dFwiPnNlbGVjdCB1c2VyIHRvIHVwZGF0ZSBvciBhZGQgbmV3IHVzZXI8L3NwYW4+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgdXNlcnM6IHN0YXRlLnVzZXJzLFxyXG4gIG1vZDogc3RhdGUudmlld01vZFxyXG59KVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xyXG4gIGNoYW5nZVVzZXI6IChpZCkgPT4gZGlzcGF0Y2goY2hhbmdlQWN0aXZlVXNlcihpZCkpLFxyXG4gIGNoYW5nZU1vZDogKG1vZCkgPT4gZGlzcGF0Y2goY2hhbmdlVmlld01vZChtb2QpKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQXBwKSJdfQ== */\n/*@ sourceURL=container\\App.js */'
      }), _react2.default.createElement(_style2.default, {
        styleId: 1234200699,
        css: '.users[data-jsx="3400576515"]{float:left;width:100%;max-width:200px;height:400px;overflow-y:scroll}.userview[data-jsx="3400576515"]{position:relative;float:left;height:400px;width:100%;max-width:400px;padding-top:3rem;padding-left:1rem}.add-button[data-jsx="3400576515"]{position:absolute;top:0;right:0;padding:0 1rem;font-size:3rem;color:#AAA}.add-button[data-jsx="3400576515"]:hover{color:#666;background-color:#CCC}.insinital-text[data-jsx="3400576515"]{color:#AAA}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEb0IsQUFHd0IsQUFDTyxBQUNBLEFBQ1AsQUFFQSxZQUx3QixBQUkvQyxBQUNrQyxPQUpvQixBQUNOLEtBRjRCLENBRXBCLE1BRHdCLEVBQ0ksRUFFMUUsTUFKNEYsSUFDRSxJQUNRLE1BRnFCLEVBQ0EsUUFDRyxTQUZRLEFBQ21CLEdBQ2hCLGVBRCtDLG1CQUFXIiwiZmlsZSI6ImNvbnRhaW5lclxcQXBwLmpzIiwic291cmNlUm9vdCI6IkU6L2FwcF90ZXN0L3JlZHV4dGVzdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vY29tcG9uZW50L3VzZXInXHJcbmltcG9ydCBWaWV3VXNlciBmcm9tICcuL3ZpZXdVc2VyJ1xyXG5pbXBvcnQgQWRkVXNlciBmcm9tICcuL0FkZFVzZXInXHJcblxyXG5pbXBvcnQgeyBjaGFuZ2VBY3RpdmVVc2VyLCBjaGFuZ2VWaWV3TW9kIH0gZnJvbSAnLi4vYWN0aW9ucydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBoYW5kbGVDaGFuZ2VVc2VyID0gKGlkKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZVVzZXIoaWQpXHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZU1vZCgxKVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHVzZXJzLFxyXG4gICAgICBtb2QsXHJcbiAgICAgIGNoYW5nZU1vZFxyXG4gICAgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6NjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXXtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogOHJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC51c2Vyc3tcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlcnZpZXd7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFkZC1idXR0b257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOjA7IHJpZ2h0OjA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI0FBQTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hZGQtYnV0dG9uOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmluc2luaXRhbC10ZXh0e1xyXG4gICAgICAgICAgICBjb2xvcjogI0FBQTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVzZXJzXCI+XHJcbiAgICAgICAgICB7IHVzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+IDxVc2VyIHVzZXI9e3VzZXJ9IGNoYW5nZVVzZXI9e3RoaXMuaGFuZGxlQ2hhbmdlVXNlcn0ga2V5PXtpbmRleH0gLz4pIH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnZpZXdcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLWJ1dHRvblwib25DbGljaz17KCkgPT4gY2hhbmdlTW9kKDIpfT4rPC9idXR0b24+XHJcbiAgICAgICAgICB7bW9kID09PSAxPzxWaWV3VXNlciAvPiA6IG1vZCA9PT0gMj88QWRkVXNlciAvPiA6IDxzcGFuIGNsYXNzTmFtZT1cImluc2luaXRhbC10ZXh0XCI+c2VsZWN0IHVzZXIgdG8gdXBkYXRlIG9yIGFkZCBuZXcgdXNlcjwvc3Bhbj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICB1c2Vyczogc3RhdGUudXNlcnMsXHJcbiAgbW9kOiBzdGF0ZS52aWV3TW9kXHJcbn0pXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgY2hhbmdlVXNlcjogKGlkKSA9PiBkaXNwYXRjaChjaGFuZ2VBY3RpdmVVc2VyKGlkKSksXHJcbiAgY2hhbmdlTW9kOiAobW9kKSA9PiBkaXNwYXRjaChjaGFuZ2VWaWV3TW9kKG1vZCkpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApIl19 */\n/*@ sourceURL=container\\App.js */'
      }), _react2.default.createElement('ul', { className: 'users', 'data-jsx': 3400576515,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, users.map(function (user, index) {
        return _react2.default.createElement(_user2.default, { user: user, changeUser: _this2.handleChangeUser, key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          }
        });
      })), _react2.default.createElement('div', { className: 'userview', 'data-jsx': 3400576515,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement('button', { className: 'add-button', onClick: function onClick() {
          return changeMod(2);
        }, 'data-jsx': 3400576515,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, '+'), mod === 1 ? _react2.default.createElement(_viewUser2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }) : mod === 2 ? _react2.default.createElement(_AddUser2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }) : _react2.default.createElement('span', { className: 'insinital-text', 'data-jsx': 3400576515,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'select user to update or add new user')));
    }
  }]);

  return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users,
    mod: state.viewMod
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeUser: function changeUser(id) {
      return dispatch((0, _actions.changeActiveUser)(id));
    },
    changeMod: function changeMod(mod) {
      return dispatch((0, _actions.changeViewMod)(mod));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\app_test\\reduxtest\\container\\App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\app_test\\reduxtest\\container\\App.js"); } } })();

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(583);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(588);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(563);

var _reactRedux = __webpack_require__(573);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\app_test\\reduxtest\\container\\viewUser.js';


var ViewUser = function (_Component) {
  (0, _inherits3.default)(ViewUser, _Component);

  function ViewUser() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ViewUser);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ViewUser.__proto__ || (0, _getPrototypeOf2.default)(ViewUser)).call.apply(_ref, [this].concat(args))), _this), _this.handleInput = function (input, stateName) {
      _this.setState((0, _defineProperty3.default)({}, stateName, input.target.value));
    }, _this.handleUpdateUser = function () {
      var _this$props = _this.props,
          updateUser = _this$props.updateUser,
          changeMod = _this$props.changeMod,
          user = _this$props.user;
      var _this$state = _this.state,
          name = _this$state.name,
          username = _this$state.username,
          email = _this$state.email;

      updateUser({
        id: user.id,
        name: name,
        username: username,
        email: email
      });
      changeMod(0);
      alert('修改完成');
    }, _this.handleRemoveUser = function () {
      var _this$props2 = _this.props,
          removeUser = _this$props2.removeUser,
          changeMod = _this$props2.changeMod;

      changeMod(0);
      alert('刪除成功');
      removeUser(_this.props.user.id);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ViewUser, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props$user = this.props.user,
          name = _props$user.name,
          username = _props$user.username,
          email = _props$user.email;

      this.setState({
        name: name,
        username: username,
        email: email
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      var _props$user2 = this.props.user,
          name = _props$user2.name,
          username = _props$user2.username,
          email = _props$user2.email;

      this.setState({
        name: name,
        username: username,
        email: email
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        'data-jsx': 2581500381,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 2581500381,
        css: '.update-button[data-jsx="2581500381"],.remove-button[data-jsx="2581500381"]{position:absolute;bottom:0;height:3rem;width:50%;font-size:1.3rem}.remove-button[data-jsx="2581500381"]{right:0}.update-button[data-jsx="2581500381"]:hover{background-color:#DEDEDE;color:#333}.remove-button[data-jsx="2581500381"]:hover{background-color:#F87B7B;color:#FFF}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lclxcdmlld1VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVvQixBQUcrQixBQUNYLEFBRW5CLEFBQ3FDLFFBSFAsV0FEc0IsT0FHN0IsQUFDc0MsR0FKZ0IsU0FHM0MsQUFDc0MsSUFKNEIsV0FBOEIsa0JBQVciLCJmaWxlIjoiY29udGFpbmVyXFx2aWV3VXNlci5qcyIsInNvdXJjZVJvb3QiOiJFOi9hcHBfdGVzdC9yZWR1eHRlc3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVwZGF0ZVVzZXIsIHJlbW92ZVVzZXIsIGNoYW5nZVZpZXdNb2QgfSBmcm9tICcuLi9hY3Rpb25zJ1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuY2xhc3MgVmlld1VzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsXHJcbiAgICB9ID0gdGhpcy5wcm9wcy51c2VyXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbmFtZSxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgZW1haWxcclxuICAgIH0gPSB0aGlzLnByb3BzLnVzZXJcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgZW1haWxcclxuICAgIH0pXHJcbiAgfVxyXG4gIGhhbmRsZUlucHV0ID0gKGlucHV0LCBzdGF0ZU5hbWUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1tzdGF0ZU5hbWVdOiBpbnB1dC50YXJnZXQudmFsdWV9KVxyXG4gIH1cclxuICBoYW5kbGVVcGRhdGVVc2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB1cGRhdGVVc2VyLFxyXG4gICAgICBjaGFuZ2VNb2QsXHJcbiAgICAgIHVzZXJcclxuICAgIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBlbWFpbFxyXG4gICAgfSA9IHRoaXMuc3RhdGVcclxuICAgIHVwZGF0ZVVzZXIoe1xyXG4gICAgICBpZDogdXNlci5pZCxcclxuICAgICAgbmFtZSxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsXHJcbiAgICB9KVxyXG4gICAgY2hhbmdlTW9kKDApXHJcbiAgICBhbGVydCgn5L+u5pS55a6M5oiQJylcclxuICB9XHJcbiAgaGFuZGxlUmVtb3ZlVXNlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgXHJcbiAgICAgIHJlbW92ZVVzZXIsXHJcbiAgICAgIGNoYW5nZU1vZFxyXG4gICAgfSA9IHRoaXMucHJvcHNcclxuICAgIGNoYW5nZU1vZCgwKVxyXG4gICAgYWxlcnQoJ+WIqumZpOaIkOWKnycpXHJcbiAgICByZW1vdmVVc2VyKHRoaXMucHJvcHMudXNlci5pZClcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAudXBkYXRlLWJ1dHRvbiwgLnJlbW92ZS1idXR0b257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlbW92ZS1idXR0b257XHJcbiAgICAgICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXBkYXRlLWJ1dHRvbjpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RFREVERVxyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yZW1vdmUtYnV0dG9uOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg3QjdCO1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0X2Jsb2NrXCI+XHJcbiAgICAgICAgICA8bGFiZWw+bmFtZe+8mjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUlucHV0KGUsICduYW1lJyl9IC8+PGJyIC8+XHJcbiAgICAgICAgICA8bGFiZWw+dXNlcm5hbWXvvJo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlSW5wdXQoZSwgJ3VzZXJuYW1lJyl9IC8+PGJyIC8+XHJcbiAgICAgICAgICA8bGFiZWw+ZW1haWzvvJo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlSW5wdXQoZSwgJ2VtYWlsJyl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidXBkYXRlLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVXBkYXRlVXNlcn0+XHJcbiAgICAgICAgICAgIOS/ruaUuVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlbW92ZS1idXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZVVzZXJ9PlxyXG4gICAgICAgICAgICDliKrpmaRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICA8L2Rpdj4gICAgXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gIHVzZXI6IHN0YXRlLnVzZXJzLmZpbmQodXNlciA9PiB1c2VyLmlkID09PSBzdGF0ZS5hY3RpdmVVc2VyKVxyXG59KVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgdXBkYXRlVXNlcjogKC4uLmFyZ3MpID0+IGRpc3BhdGNoKHVwZGF0ZVVzZXIoLi4uYXJncykpLFxyXG4gIHJlbW92ZVVzZXI6IChpZCkgPT4gZGlzcGF0Y2gocmVtb3ZlVXNlcihpZCkpLFxyXG4gIGNoYW5nZU1vZDogKG1vZCkgPT4gZGlzcGF0Y2goY2hhbmdlVmlld01vZChtb2QpKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVmlld1VzZXIpIl19 */\n/*@ sourceURL=container\\viewUser.js */'
      }), _react2.default.createElement('div', { className: 'edit_block', 'data-jsx': 2581500381,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('label', {
        'data-jsx': 2581500381,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'name\uFF1A'), _react2.default.createElement('input', { type: 'text', value: this.state.name, onChange: function onChange(e) {
          return _this2.handleInput(e, 'name');
        }, 'data-jsx': 2581500381,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement('br', {
        'data-jsx': 2581500381,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement('label', {
        'data-jsx': 2581500381,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, 'username\uFF1A'), _react2.default.createElement('input', { type: 'text', value: this.state.username, onChange: function onChange(e) {
          return _this2.handleInput(e, 'username');
        }, 'data-jsx': 2581500381,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react2.default.createElement('br', {
        'data-jsx': 2581500381,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react2.default.createElement('label', {
        'data-jsx': 2581500381,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'email\uFF1A'), _react2.default.createElement('input', { type: 'text', value: this.state.email, onChange: function onChange(e) {
          return _this2.handleInput(e, 'email');
        }, 'data-jsx': 2581500381,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })), _react2.default.createElement('footer', {
        'data-jsx': 2581500381,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement('button', { className: 'update-button', onClick: this.handleUpdateUser, 'data-jsx': 2581500381,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, '\u4FEE\u6539'), _react2.default.createElement('button', { className: 'remove-button', onClick: this.handleRemoveUser, 'data-jsx': 2581500381,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, '\u522A\u9664')));
    }
  }]);

  return ViewUser;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.users.find(function (user) {
      return user.id === state.activeUser;
    })
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateUser: function updateUser() {
      return dispatch(_actions.updateUser.apply(undefined, arguments));
    },
    removeUser: function removeUser(id) {
      return dispatch((0, _actions.removeUser)(id));
    },
    changeMod: function changeMod(mod) {
      return dispatch((0, _actions.changeViewMod)(mod));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ViewUser);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "E:\\app_test\\reduxtest\\container\\viewUser.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "E:\\app_test\\reduxtest\\container\\viewUser.js"); } } })();

/***/ })

},[582]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MzNkOGNiMyIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LmpzPzMzZDhjYjMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanM/MzNkOGNiMyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9pbmRleC5qcz8zM2Q4Y2IzIiwid2VicGFjazovLy8uL2NvbXBvbmVudC91c2VyLmpzPzMzZDhjYjMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVyL0FkZFVzZXIuanM/MzNkOGNiMyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXIvQXBwLmpzPzMzZDhjYjMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVyL3ZpZXdVc2VyLmpzPzMzZDhjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi4vcmVkdWNlcnMnXHJcbmltcG9ydCB7IGdldEluaXRpYWxTdG9yZSB9IGZyb20gJy4uL3N0b3JlJ1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tICcuLi9jb250YWluZXIvQXBwJ1xyXG5cclxuY2xhc3MgUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7cmVxfSkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIHsgdXNlcnMsIGlzU2VydmVyOiAhIXJlcX1cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBnZXRJbml0aWFsU3RvcmUocmVkdWNlcnMsIHRoaXMucHJvcHMudXNlcnMsIHRoaXMucHJvcHMuaXNTZXJ2ZXIpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9eyBzdG9yZSB9PlxyXG4gICAgICAgIDxBcHAvPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwibGV0IGlkID0gMTBcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfVVNFUiA9ICdBRERfVVNFUidcclxuZXhwb3J0IGNvbnN0IFVQREFURV9VU0VSID0gJ1VQREFURV9VU0VSJ1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1VTRVIgPSAnUkVNT1ZFX1VTRVInXHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDVElWRV9VU0VSID0gJ0NIQU5HRV9BQ1RJVkVfVVNFUidcclxuXHJcbmV4cG9ydCBjb25zdCBWSUVXX01PRCA9ICdWSUVXX01PRCdcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVc2VyID0gKHtuYW1lLCB1c2VybmFtZSwgZW1haWx9KSA9PiAoe1xyXG4gIHR5cGU6IEFERF9VU0VSLFxyXG4gIGlkOiArK2lkLFxyXG4gIG5hbWUsXHJcbiAgdXNlcm5hbWUsXHJcbiAgZW1haWxcclxufSlcclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAoe2lkLCBuYW1lLCB1c2VybmFtZSwgZW1haWx9KSA9PiAoe1xyXG4gIHR5cGU6IFVQREFURV9VU0VSLFxyXG4gIGlkLFxyXG4gIG5hbWUsXHJcbiAgdXNlcm5hbWUsXHJcbiAgZW1haWxcclxufSlcclxuZXhwb3J0IGNvbnN0IHJlbW92ZVVzZXIgPSAoaWQpID0+ICh7XHJcbiAgdHlwZTogUkVNT1ZFX1VTRVIsXHJcbiAgaWRcclxufSlcclxuZXhwb3J0IGNvbnN0IGNoYW5nZUFjdGl2ZVVzZXIgPSAoaWQpID0+ICh7XHJcbiAgdHlwZTogQ0hBTkdFX0FDVElWRV9VU0VSLFxyXG4gIGlkXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgY2hhbmdlVmlld01vZCA9IChtb2QpID0+ICh7XHJcbiAgdHlwZTogVklFV19NT0QsXHJcbiAgbW9kXHJcbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWN0aW9ucy9pbmRleC5qcyIsImltcG9ydCB7XHJcbiAgQUREX1VTRVIsXHJcbiAgVVBEQVRFX1VTRVIsXHJcbiAgUkVNT1ZFX1VTRVIsXHJcbiAgQ0hBTkdFX0FDVElWRV9VU0VSLFxyXG4gIFZJRVdfTU9EXHJcbn0gZnJvbSAnLi4vYWN0aW9ucydcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXHJcblxyXG5jb25zdCB1c2VycyA9IChzdGF0ZSA9IFtdLCB7dHlwZSwgaWQsIG5hbWUsIHVzZXJuYW1lLCBlbWFpbH0pID0+IHtcclxuICBzd2l0Y2ggKHR5cGUpe1xyXG4gICAgY2FzZSBBRERfVVNFUjpcclxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgfV1cclxuICAgIGNhc2UgVVBEQVRFX1VTRVI6IFxyXG4gICAgICByZXR1cm4gc3RhdGUubWFwKHVzZXIgPT4gdXNlci5pZCA9PT0gaWQgPyB7aWQsIG5hbWUsIHVzZXJuYW1lLCBlbWFpbH0gOiB1c2VyKVxyXG4gICAgY2FzZSBSRU1PVkVfVVNFUjpcclxuICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcih1c2VyID0+IHVzZXIuaWQgIT09IGlkKVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhY3RpdmVVc2VyID0gKHN0YXRlID0gMCwge3R5cGUsIGlkfSkgPT4ge1xyXG4gIHN3aXRjaCh0eXBlKSB7XHJcbiAgICBjYXNlIENIQU5HRV9BQ1RJVkVfVVNFUjpcclxuICAgICAgcmV0dXJuIGlkXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbi8vc3RhdHVzIDA6IG5vbmUsIDE6dmlldyB1c2VyLCAyOiBhZGQgdXNlclxyXG5cclxuY29uc3Qgdmlld01vZCA9IChzdGF0ZSA9IDAsIHt0eXBlLCBtb2R9KSA9PiB7XHJcbiAgc3dpdGNoKHR5cGUpIHtcclxuICAgIGNhc2UgVklFV19NT0Q6XHJcbiAgICAgIHJldHVybiBtb2RcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgQXBwUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgdXNlcnMsXHJcbiAgYWN0aXZlVXNlcixcclxuICB2aWV3TW9kXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBSZWR1Y2VyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaW5kZXguanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEluaXRpYWxTdG9yZSA9IChyZWR1Y2VycywgaW5pdGlhbFN0b3JlLCBpc1NlcnZlcikgPT4ge1xyXG4gIC8vIC8vIGlmKCEhd2luZG93KXtcclxuICAvLyAvLyAgIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VycywgaW5pdGlhbFN0b3JlLCB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpKVxyXG4gIC8vIC8vIH0gZWxzZSB7XHJcbiAgLy8gICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlcnMsIGluaXRpYWxTdG9yZSlcclxuICAvLyAvLyB9XHJcbiAgaWYgKGlzU2VydmVyICYmIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHt1c2VyczogaW5pdGlhbFN0b3JlfSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB7dXNlcnM6IGluaXRpYWxTdG9yZX0sIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCkpXHJcbiAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBVc2VyID0gKHt1c2VyLCBjaGFuZ2VVc2VyfSkgPT4gKFxyXG4gIDxsaSBjbGFzc05hbWU9XCJ1c2VyXCI+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC51c2VyLWJ1dHRvbntcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG4gICAgICAudXNlci1idXR0b246aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcclxuICAgICAgfVxyXG4gICAgICAudXNlcjpudGgtY2hpbGQob2RkKXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVzZXItYnV0dG9uXCIgb25DbGljaz17KCkgPT4gY2hhbmdlVXNlcih1c2VyLmlkKX0+XHJcbiAgICAgIHt1c2VyLm5hbWV9XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2xpPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50L3VzZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGFkZFVzZXIsIGNoYW5nZVZpZXdNb2QgfSBmcm9tICcuLi9hY3Rpb25zJ1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuY2xhc3MgQWRkVXNlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICBlbWFpbDogJydcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlSW5wdXQgPSAoaW5wdXQsIHN0YXRlTmFtZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W3N0YXRlTmFtZV06IGlucHV0LnRhcmdldC52YWx1ZX0pXHJcbiAgfVxyXG4gIGhhbmRsZUFkZFVzZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGFkZFVzZXIsXHJcbiAgICAgIGNoYW5nZU1vZFxyXG4gICAgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgYWRkVXNlcih7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBlbWFpbFxyXG4gICAgfSlcclxuICAgIGFsZXJ0KCfmlrDlop7miJDlip8nKVxyXG4gICAgY2hhbmdlTW9kKDApXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmFkZC1idXR0b257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hZGQtYnV0dG9uOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlDRjQ5XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8ZGw+XHJcbiAgICAgICAgICA8bGFiZWw+bmFtZe+8mjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUlucHV0KGUsICduYW1lJyl9IC8+PGJyIC8+XHJcbiAgICAgICAgICA8bGFiZWw+dXNlcm5hbWXvvJo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlSW5wdXQoZSwgJ3VzZXJuYW1lJyl9IC8+PGJyIC8+XHJcbiAgICAgICAgICA8bGFiZWw+ZW1haWzvvJo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlSW5wdXQoZSwgJ2VtYWlsJyl9IC8+XHJcbiAgICAgICAgPC9kbD5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVBZGRVc2VyfT5cclxuICAgICAgICAgICAg5paw5aKeXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+ICAgIFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICB1c2VyOiBzdGF0ZS51c2Vyc1tzdGF0ZS5hY3RpdmVVc2VyXVxyXG59KVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgYWRkVXNlcjogKC4uLmFyZ3MpID0+IGRpc3BhdGNoKGFkZFVzZXIoLi4uYXJncykpLFxyXG4gIGNoYW5nZU1vZDogKG1vZCkgPT4gZGlzcGF0Y2goY2hhbmdlVmlld01vZChtb2QpKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkVXNlcilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXIvQWRkVXNlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vY29tcG9uZW50L3VzZXInXHJcbmltcG9ydCBWaWV3VXNlciBmcm9tICcuL3ZpZXdVc2VyJ1xyXG5pbXBvcnQgQWRkVXNlciBmcm9tICcuL0FkZFVzZXInXHJcblxyXG5pbXBvcnQgeyBjaGFuZ2VBY3RpdmVVc2VyLCBjaGFuZ2VWaWV3TW9kIH0gZnJvbSAnLi4vYWN0aW9ucydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBoYW5kbGVDaGFuZ2VVc2VyID0gKGlkKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZVVzZXIoaWQpXHJcbiAgICB0aGlzLnByb3BzLmNoYW5nZU1vZCgxKVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHVzZXJzLFxyXG4gICAgICBtb2QsXHJcbiAgICAgIGNoYW5nZU1vZFxyXG4gICAgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29udGFpbmVye1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6NjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXXtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogOHJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC51c2Vyc3tcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudXNlcnZpZXd7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFkZC1idXR0b257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOjA7IHJpZ2h0OjA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI0FBQTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hZGQtYnV0dG9uOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NDQ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmluc2luaXRhbC10ZXh0e1xyXG4gICAgICAgICAgICBjb2xvcjogI0FBQTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVzZXJzXCI+XHJcbiAgICAgICAgICB7IHVzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+IDxVc2VyIHVzZXI9e3VzZXJ9IGNoYW5nZVVzZXI9e3RoaXMuaGFuZGxlQ2hhbmdlVXNlcn0ga2V5PXtpbmRleH0gLz4pIH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcnZpZXdcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLWJ1dHRvblwib25DbGljaz17KCkgPT4gY2hhbmdlTW9kKDIpfT4rPC9idXR0b24+XHJcbiAgICAgICAgICB7bW9kID09PSAxPzxWaWV3VXNlciAvPiA6IG1vZCA9PT0gMj88QWRkVXNlciAvPiA6IDxzcGFuIGNsYXNzTmFtZT1cImluc2luaXRhbC10ZXh0XCI+c2VsZWN0IHVzZXIgdG8gdXBkYXRlIG9yIGFkZCBuZXcgdXNlcjwvc3Bhbj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICB1c2Vyczogc3RhdGUudXNlcnMsXHJcbiAgbW9kOiBzdGF0ZS52aWV3TW9kXHJcbn0pXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XHJcbiAgY2hhbmdlVXNlcjogKGlkKSA9PiBkaXNwYXRjaChjaGFuZ2VBY3RpdmVVc2VyKGlkKSksXHJcbiAgY2hhbmdlTW9kOiAobW9kKSA9PiBkaXNwYXRjaChjaGFuZ2VWaWV3TW9kKG1vZCkpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udGFpbmVyL0FwcC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXBkYXRlVXNlciwgcmVtb3ZlVXNlciwgY2hhbmdlVmlld01vZCB9IGZyb20gJy4uL2FjdGlvbnMnXHJcblxyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5jbGFzcyBWaWV3VXNlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgZW1haWxcclxuICAgIH0gPSB0aGlzLnByb3BzLnVzZXJcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgZW1haWxcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBlbWFpbFxyXG4gICAgfSA9IHRoaXMucHJvcHMudXNlclxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBlbWFpbFxyXG4gICAgfSlcclxuICB9XHJcbiAgaGFuZGxlSW5wdXQgPSAoaW5wdXQsIHN0YXRlTmFtZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W3N0YXRlTmFtZV06IGlucHV0LnRhcmdldC52YWx1ZX0pXHJcbiAgfVxyXG4gIGhhbmRsZVVwZGF0ZVVzZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHVwZGF0ZVVzZXIsXHJcbiAgICAgIGNoYW5nZU1vZCxcclxuICAgICAgdXNlclxyXG4gICAgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgdXBkYXRlVXNlcih7XHJcbiAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgICAgZW1haWxcclxuICAgIH0pXHJcbiAgICBjaGFuZ2VNb2QoMClcclxuICAgIGFsZXJ0KCfkv67mlLnlrozmiJAnKVxyXG4gIH1cclxuICBoYW5kbGVSZW1vdmVVc2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBcclxuICAgICAgcmVtb3ZlVXNlcixcclxuICAgICAgY2hhbmdlTW9kXHJcbiAgICB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY2hhbmdlTW9kKDApXHJcbiAgICBhbGVydCgn5Yiq6Zmk5oiQ5YqfJylcclxuICAgIHJlbW92ZVVzZXIodGhpcy5wcm9wcy51c2VyLmlkKVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIC51cGRhdGUtYnV0dG9uLCAucmVtb3ZlLWJ1dHRvbntcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmVtb3ZlLWJ1dHRvbntcclxuICAgICAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51cGRhdGUtYnV0dG9uOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREVERURFXHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJlbW92ZS1idXR0b246aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGODdCN0I7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRfYmxvY2tcIj5cclxuICAgICAgICAgIDxsYWJlbD5uYW1l77yaPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlSW5wdXQoZSwgJ25hbWUnKX0gLz48YnIgLz5cclxuICAgICAgICAgIDxsYWJlbD51c2VybmFtZe+8mjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVJbnB1dChlLCAndXNlcm5hbWUnKX0gLz48YnIgLz5cclxuICAgICAgICAgIDxsYWJlbD5lbWFpbO+8mjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVJbnB1dChlLCAnZW1haWwnKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ1cGRhdGUtYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVVcGRhdGVVc2VyfT5cclxuICAgICAgICAgICAg5L+u5pS5XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVtb3ZlLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlVXNlcn0+XHJcbiAgICAgICAgICAgIOWIqumZpFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PiAgICBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgdXNlcjogc3RhdGUudXNlcnMuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IHN0YXRlLmFjdGl2ZVVzZXIpXHJcbn0pXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICB1cGRhdGVVc2VyOiAoLi4uYXJncykgPT4gZGlzcGF0Y2godXBkYXRlVXNlciguLi5hcmdzKSksXHJcbiAgcmVtb3ZlVXNlcjogKGlkKSA9PiBkaXNwYXRjaChyZW1vdmVVc2VyKGlkKSksXHJcbiAgY2hhbmdlTW9kOiAobW9kKSA9PiBkaXNwYXRjaChjaGFuZ2VWaWV3TW9kKG1vZCkpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShWaWV3VXNlcilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXIvdmlld1VzZXIuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFPQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTs7Ozs7QUFWQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7QUFlQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUxBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBTUE7QUFBQTs7QUFFQTtBQUZBO0FBQ0E7QUFHQTtBQUFBOztBQUVBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTs7QUFFQTtBQUZBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUxBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBaEJBO0FBQ0E7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFQQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBUEE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFYQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQkE7QUFoQkE7QUFnQkE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQVRBO0FBQ0E7QUFVQTtBQUlBO0FBRkE7QUFDQTtBQU1BO0FBSEE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUVBO0FBSkE7QUFLQTtBQUNBO0FBMUJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBSUE7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBZEE7QUFjQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBTUE7Ozs7O0FBN0RBO0FBQ0E7QUErREE7O0FBQ0E7QUFBQTtBQURBO0FBR0E7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQUlBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBNERBO0FBNURBOztBQTREQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBOUVBO0FBQ0E7QUFvRkE7O0FBQ0E7QUFDQTtBQURBO0FBREE7QUFJQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUVBO0FBS0E7QUFIQTtBQUNBO0FBQ0E7QUFNQTtBQUhBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUVBO0FBTEE7QUFNQTtBQUNBO0FBQ0E7QUFJQTtBQUZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7O0FBdERBO0FBS0E7QUFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSkE7Ozs7QUFLQTtBQUtBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUpBOzs7O0FBcUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCQTtBQXJCQTs7QUFxQkE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQU1BOzs7OztBQWxHQTtBQUNBO0FBb0dBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        