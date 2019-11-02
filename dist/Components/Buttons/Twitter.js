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
var TwitterButton = function TwitterButton(props) {
  var icon = _react.default.createElement(_Icon.default, {
    name: "twitter",
    color: "white"
  });

  return (// @ts-ignore
    _react.default.createElement(_Default.default, _extends({}, props, {
      icon: icon
    }), "Log in with Twitter")
  );
};

var _default = (0, _styledComponents.default)(TwitterButton).withConfig({
  displayName: "Twitter",
  componentId: "sc-1mnin4g-0"
})(["background:#1d9ef4;color:white;height:40px;padding:0 30px;margin:5px auto 5px;flex-direction:row;&:hover:not(:disabled){background:#0d73b6;}"]);

exports.default = _default;
//# sourceMappingURL=Twitter.js.map