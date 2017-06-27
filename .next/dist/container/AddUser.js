'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../actions');

var _reactRedux = require('react-redux');

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