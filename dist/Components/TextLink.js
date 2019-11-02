"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TextLink = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @deprecated in favor of our Design System Link component in @artsy/palette
 * https://palette.artsy.net/elements/buttons/link
 */
var TextLink =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextLink, _React$Component);

  function TextLink() {
    _classCallCheck(this, TextLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextLink).apply(this, arguments));
  }

  _createClass(TextLink, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("a", {
        href: this.props.href,
        className: this.props.className,
        target: this.props.target
      }, this.props.children);
    }
  }]);

  return TextLink;
}(_react.default.Component);

exports.TextLink = TextLink;

_defineProperty(TextLink, "defaultProps", {
  target: "_self"
});

var StyledTextLink = (0, _styledComponents.default)(TextLink).withConfig({
  displayName: "TextLink__StyledTextLink",
  componentId: "pwn95u-0"
})(["", ";color:", ";text-decoration:", ";"], (0, _Fonts.garamond)("s15"), function (props) {
  return props.color;
}, function (props) {
  return props.underline ? "underline" : "none";
});
StyledTextLink.defaultProps = {
  underline: false,
  color: _Colors.default.grayBold
};
var _default = StyledTextLink;
exports.default = _default;
//# sourceMappingURL=TextLink.js.map