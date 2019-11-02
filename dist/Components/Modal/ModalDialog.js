"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalButton = exports.ModalDialog = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _palette = require("@artsy/palette");

var _ModalWrapper = require("./ModalWrapper");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ModalDialog =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalDialog, _React$Component);

  function ModalDialog() {
    _classCallCheck(this, ModalDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalDialog).apply(this, arguments));
  }

  _createClass(ModalDialog, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          show = _this$props.show,
          heading = _this$props.heading,
          detail = _this$props.detail,
          onClose = _this$props.onClose,
          primaryCta = _this$props.primaryCta,
          secondaryCta = _this$props.secondaryCta;
      return _react.default.createElement(_ModalWrapper.ModalWrapper, {
        show: show,
        onClose: onClose || function () {
          return undefined;
        },
        width: _ModalWrapper.ModalWidth.Narrow
      }, _react.default.createElement(_palette.Flex, {
        flexDirection: "column",
        pt: 2,
        px: 2
      }, _react.default.createElement(_palette.Sans, {
        size: "4",
        weight: "medium",
        mb: 10
      }, heading), detail && _react.default.createElement(_palette.Sans, {
        size: "3",
        color: "black60"
      }, detail)), _react.default.createElement(_palette.Flex, {
        mt: 1,
        justifyContent: "flex-end"
      }, secondaryCta && _react.default.createElement(ModalButton, {
        secondary: true,
        onClick: secondaryCta.action
      }, secondaryCta.text), _react.default.createElement(ModalButton, {
        onClick: primaryCta.action
      }, primaryCta.text)));
    }
  }]);

  return ModalDialog;
}(_react.default.Component);

exports.ModalDialog = ModalDialog;
var StyledSans = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "ModalDialog__StyledSans",
  componentId: "sc-1frd9mn-0"
})(["transition:color 0.14s ease;cursor:pointer;color:", ";"], (0, _palette.color)("purple100")); // TODO: Generalize this button and move it to @artsy/palette

var ModalButton = function ModalButton(props) {
  return _react.default.createElement(StyledSans, _extends({
    p: 2,
    size: "3",
    weight: "medium"
  }, props));
};

exports.ModalButton = ModalButton;
//# sourceMappingURL=ModalDialog.js.map