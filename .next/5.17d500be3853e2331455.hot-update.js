webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4xN2Q1MDBiZTM4NTNlMjMzMTQ1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29udGFpbmVyL0FkZFVzZXIuanM/ZGRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGFkZFVzZXIsIGNoYW5nZVZpZXdNb2QgfSBmcm9tICcuLi9hY3Rpb25zJ1xyXG5cclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuY2xhc3MgQWRkVXNlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICBlbWFpbDogJydcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlSW5wdXQgPSAoaW5wdXQsIHN0YXRlTmFtZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W3N0YXRlTmFtZV06IGlucHV0LnRhcmdldC52YWx1ZX0pXHJcbiAgfVxyXG4gIGhhbmRsZUFkZFVzZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGFkZFVzZXIsXHJcbiAgICAgIGNoYW5nZU1vZFxyXG4gICAgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgdXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsXHJcbiAgICB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgYWRkVXNlcih7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBlbWFpbFxyXG4gICAgfSlcclxuICAgIGFsZXJ0KCfmlrDlop7miJDlip8nKVxyXG4gICAgY2hhbmdlTW9kKDApXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmFkZC1idXR0b257XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hZGQtYnV0dG9uOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDlDRjQ5XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8ZGw+XHJcbiAgICAgICAgICA8bGFiZWw+bmFtZe+8mjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUlucHV0KGUsICduYW1lJyl9IC8+PGJyIC8+XHJcbiAgICAgICAgICA8bGFiZWw+dXNlcm5hbWXvvJo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlSW5wdXQoZSwgJ3VzZXJuYW1lJyl9IC8+PGJyIC8+XHJcbiAgICAgICAgICA8bGFiZWw+ZW1haWzvvJo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlSW5wdXQoZSwgJ2VtYWlsJyl9IC8+XHJcbiAgICAgICAgPC9kbD5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhZGQtYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVBZGRVc2VyfT5cclxuICAgICAgICAgICAg5paw5aKeXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgPC9kaXY+ICAgIFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICB1c2VyOiBzdGF0ZS51c2Vyc1tzdGF0ZS5hY3RpdmVVc2VyXVxyXG59KVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgYWRkVXNlcjogKC4uLmFyZ3MpID0+IGRpc3BhdGNoKGFkZFVzZXIoLi4uYXJncykpLFxyXG4gIGNoYW5nZU1vZDogKG1vZCkgPT4gZGlzcGF0Y2goY2hhbmdlVmlld01vZChtb2QpKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkVXNlcilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXIvQWRkVXNlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQVRBO0FBQ0E7QUFVQTtBQUlBO0FBRkE7QUFDQTtBQU1BO0FBSEE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUVBO0FBSkE7QUFLQTtBQUNBO0FBMUJBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBSUE7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNBO0FBZEE7QUFjQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBTUE7Ozs7O0FBN0RBO0FBQ0E7QUErREE7O0FBQ0E7QUFBQTtBQURBO0FBR0E7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==