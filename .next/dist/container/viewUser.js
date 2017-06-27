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