"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Default = _interopRequireDefault(require("./Default"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO: refactor ButtonProps so this isn't necessary
var FacebookButton = function FacebookButton(props) {
  var icon = _react.default.createElement(_Icon.default, {
    name: "facebook",
    color: props.color || "white"
  });

  return _react.default.createElement(_Default.default, _extends({}, props, {
    icon: icon
  }), props.children || "Log in with Facebook");
};

var _default = (0, _styledComponents.default)(FacebookButton).withConfig({
  displayName: "Facebook",
  componentId: "sc-5rpnsj-0"
})(["background:#39439c;color:white;height:40px;padding:0 30px;margin:10px auto 2px;flex-direction:row;&:hover:not(:disabled){background:#252c68;}"]);

exports.default = _default;
//# sourceMappingURL=Facebook.js.map