"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx\\style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

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