'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _user = require('../component/user');

var _user2 = _interopRequireDefault(_user);

var _viewUser = require('./viewUser');

var _viewUser2 = _interopRequireDefault(_viewUser);

var _AddUser = require('./AddUser');

var _AddUser2 = _interopRequireDefault(_AddUser);

var _actions = require('../actions');

var _reactRedux = require('react-redux');

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