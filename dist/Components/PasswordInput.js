"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PasswordInput = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _QuickInput = _interopRequireDefault(require("./QuickInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Password input.
 * Renders the label inside of the textbox; shows/hides the password.
 *
 */
var PasswordInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PasswordInput, _React$Component);

  function PasswordInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PasswordInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PasswordInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showPassword: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggleShowPassword", function () {
      _this.setState({
        showPassword: !_this.state.showPassword
      });
    });

    return _this;
  }

  _createClass(PasswordInput, [{
    key: "getRightViewForPassword",
    value: function getRightViewForPassword() {
      var icon = this.state.showPassword ? _react.default.createElement(_palette.ClosedEyeIcon, {
        onClick: this.toggleShowPassword
      }) : _react.default.createElement(_palette.OpenEyeIcon, {
        onClick: this.toggleShowPassword
      });
      return _react.default.createElement(Eye, {
        onClick: this.toggleShowPassword
      }, icon);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          error = _this$props.error,
          showPasswordMessage = _this$props.showPasswordMessage,
          ref = _this$props.ref,
          newProps = _objectWithoutProperties(_this$props, ["error", "showPasswordMessage", "ref"]);

      var type = this.state.showPassword ? "text" : "password";
      var note = !error && showPasswordMessage && "Password must be at least 8 characters.";
      return _react.default.createElement(_QuickInput.default, _extends({}, newProps, {
        error: error,
        type: type,
        rightAddOn: this.getRightViewForPassword(),
        note: note
      }));
    }
  }]);

  return PasswordInput;
}(_react.default.Component);

exports.PasswordInput = PasswordInput;

var Eye = _styledComponents.default.span.withConfig({
  displayName: "PasswordInput__Eye",
  componentId: "sc-2xzsq3-0"
})(["position:absolute;right:", "px;z-index:1;"], (0, _palette.space)(1));

var _default = PasswordInput;
exports.default = _default;
//# sourceMappingURL=PasswordInput.js.map