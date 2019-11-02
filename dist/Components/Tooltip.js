"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _Fonts = require("../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../Assets/Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  display: inline-block;\n  position: relative;\n  cursor: help;\n  margin: 0 0.5em;\n  width: 14px;\n  height: 14px;\n  margin-bottom: -2px;\n\n  &::before {\n    display: block;\n    top: 0;\n    left: 0;\n    position: absolute;\n    content: \"\";\n    z-index: 2;\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    line-height: 15px;\n    text-align: center;\n    vertical-align: middle;\n    color: white;\n  }\n  &:hover {\n    &::before {\n      visibility: hidden;\n    }\n    &::after {\n      opacity: 1;\n      z-index: 3;\n      visibility: visible;\n    }\n  }\n  &::after {\n    display: block;\n    top: ", "\n    bottom: ", "\n    left: ", "\n    right: ", "\n    position: absolute;\n    visibility: hidden;\n    text-align: left;\n    z-index: 1;\n    margin: -10px 0 0 -10px;\n    width: ", ";\n    color: ", ";\n    font-weight: normal;\n    background-color: white;\n    padding: 20px;\n    opacity: 0;\n    margin: 0;\n    transform: translateZ(0);\n    border: 1px solid ", ";\n    content: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Div = _styledComponents.default.div;
var TooltipContainer = Div(_templateObject(), (0, _Fonts.unica)("s12", "regular"), function (props) {
  return props.verticalAlign === "top" ? "0" : "inherit";
}, function (props) {
  return props.verticalAlign === "bottom" ? "-7px" : "inherit";
}, function (props) {
  return props.horizontalAlign === "right" ? "0" : "inherit";
}, function (props) {
  return props.horizontalAlign === "left" ? "-7px" : "inherit";
}, function (props) {
  return props.hoverWidth + "px";
}, _Colors.default.graySemibold, _Colors.default.grayRegular, function (props) {
  return "\"" + props.message + "\"";
});
/**
 * @deprecated in favor of our Design System Tooltip component in @artsy/palette
 * https://palette.artsy.net/elements/inputs/tooltip
 */

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(TooltipContainer, {
        message: this.props.message,
        horizontalAlign: this.props.horizontalAlign || "right",
        verticalAlign: this.props.verticalAlign || "top",
        hoverWidth: this.props.hoverWidth || 300,
        className: this.props.className
      }, this.props.children);
    }
  }]);

  return Tooltip;
}(_react.default.Component);

exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map