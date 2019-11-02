"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StyledButton = exports.MultiButtonState = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _Colors = _interopRequireDefault(require("../../Assets/Colors"));

var _Fonts = require("../../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("../Helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MultiButtonState;
exports.MultiButtonState = MultiButtonState;

(function (MultiButtonState) {
  MultiButtonState["Default"] = "Default";
  MultiButtonState["Highlighted"] = "Highlighted";
})(MultiButtonState || (exports.MultiButtonState = MultiButtonState = {}));

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      // TODO Do we really need to pass an opaque object along or do we know which props should be passed along?
      var newProps = _objectSpread({}, this.props);

      delete newProps.state;
      delete newProps.block;
      delete newProps.icon;
      return this.props.href ? _react.default.createElement("a", _extends({
        className: this.props.className
      }, newProps), this.props.icon, _react.default.createElement("span", null, this.props.children)) : _react.default.createElement("button", _extends({
        className: this.props.className
      }, newProps), this.props.icon, _react.default.createElement("span", null, this.props.children));
    }
  }]);

  return Button;
}(_react.default.Component);

_defineProperty(Button, "defaultProps", void 0);

var StyledButton = (0, _styledComponents.default)(Button).withConfig({
  displayName: "MultiStateButton__StyledButton",
  componentId: "sc-13cx4t7-0"
})(["", ";background:", ";color:", ";border:", ";display:inline-flex;flex-direction:column;align-items:center;justify-content:center;padding:15px 30px;font-size:13px;line-height:1;outline:0;transition:background-color 0.25s,color 0.25s;margin:10px;box-sizing:border-box;text-decoration:none;&:hover:not(:disabled){color:white;cursor:pointer;background:", ";}", ";"], (0, _Fonts.avantgarde)("s13"), function (props) {
  if (props.state === MultiButtonState.Highlighted) return "black";
  return "white";
}, function (props) {
  if (props.disabled) return "rgba(0,0,0,0.5)";
  if (props.state === MultiButtonState.Highlighted) return "white";
  return "black";
}, function (props) {
  if (props.state !== MultiButtonState.Default) return "none";
  return "solid 1px ".concat(_Colors.default.grayRegular);
}, _Colors.default.purpleRegular, (0, _Helpers.block)());
exports.StyledButton = StyledButton;
StyledButton.defaultProps = {
  state: MultiButtonState.Default,
  block: false
};
var _default = StyledButton;
exports.default = _default;
//# sourceMappingURL=MultiStateButton.js.map