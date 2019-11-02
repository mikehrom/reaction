"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreakpointVisualizer = void 0;

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.regexp.match");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Responsive = require("./Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO: Bring transition animation back
var StyledBox = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "BreakpointVisualizer__StyledBox",
  componentId: "sc-18mbpru-0"
})(["pointer-events:none;position:fixed;background-color:black;color:white;border-bottom-right-radius:5px;opacity:0.05;z-index:2;"]);

var BreakpointText = function BreakpointText(_ref) {
  var breakpoint = _ref.breakpoint,
      max = _ref.max;
  return _react.default.createElement(_Responsive.Media, _defineProperty({}, max ? "greaterThanOrEqual" : "at", breakpoint), _react.default.createElement(_palette.Display, {
    size: "8"
  }, breakpoint));
};

var BreakpointVisualizer = function BreakpointVisualizer() {
  return _react.default.createElement(_react.default.Fragment, null, typeof window !== "undefined" && window.navigator && !window.navigator.userAgent.match(/Chromatic/) && _react.default.createElement(StyledBox, {
    top: 0,
    left: 0,
    py: 1,
    px: 2
  }, _react.default.createElement(BreakpointText, {
    breakpoint: "xs"
  }), _react.default.createElement(BreakpointText, {
    breakpoint: "sm"
  }), _react.default.createElement(BreakpointText, {
    breakpoint: "md"
  }), _react.default.createElement(BreakpointText, {
    breakpoint: "lg"
  }), _react.default.createElement(BreakpointText, {
    breakpoint: "xl",
    max: true
  })));
};

exports.BreakpointVisualizer = BreakpointVisualizer;
//# sourceMappingURL=BreakpointVisualizer.js.map