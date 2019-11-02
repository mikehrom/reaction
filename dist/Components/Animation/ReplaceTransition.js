"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var React = _interopRequireWildcard(require("react"));

var _reactCssTransitionReplace = _interopRequireDefault(require("react-css-transition-replace"));

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .fade-wait-leave {\n    opacity: 1;\n  }\n\n  .fade-wait-leave.fade-wait-leave-active {\n    opacity: 0;\n    transition: opacity 0.4s ease-in;\n  }\n\n  .fade-wait-enter {\n    opacity: 0;\n  }\n\n  .fade-wait-enter.fade-wait-enter-active {\n    opacity: 1;\n\n    /* Delay the enter animation until the leave completes */\n    transition: opacity 0.4s ease-in 0.6s;\n  }\n\n  .fade-wait-height {\n    transition: height 0.6s ease-in-out;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());

var _default = function _default(props) {
  return React.createElement(React.Fragment, null, React.createElement(GlobalStyle, {
    suppressMultiMountWarning: true
  }), React.createElement(_reactCssTransitionReplace.default, _extends({
    transitionName: "fade-wait"
  }, props), _objectSpread({}, props.children)));
};

exports.default = _default;
//# sourceMappingURL=ReplaceTransition.js.map