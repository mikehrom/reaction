"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowContainer = exports.Arrow = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Arrow = function Arrow(props) {
  return _react.default.createElement(ArrowContainer, null, _react.default.createElement(ArrowBody, props), _react.default.createElement(ArrowShadow, props));
};

exports.Arrow = Arrow;
Arrow.defaultProps = {
  orientation: "up"
};

var ArrowContainer = _styledComponents.default.div.withConfig({
  displayName: "Arrow__ArrowContainer",
  componentId: "ahn4xm-0"
})(["position:relative;"]);

exports.ArrowContainer = ArrowContainer;

var ArrowBody = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "Arrow__ArrowBody",
  componentId: "ahn4xm-1"
})(["position:absolute;left:0;top:0;width:0;height:0;border-left:20px solid transparent;border-right:20px solid transparent;z-index:1;", ";"], function (props) {
  return props.orientation === "up" ? "border-bottom: 20px solid white;" : "border-top: 20px solid white;";
});

var ArrowShadow = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "Arrow__ArrowShadow",
  componentId: "ahn4xm-2"
})(["position:absolute;left:5px;width:0;height:0;border-left:15px solid transparent;border-right:15px solid transparent;filter:drop-shadow(0 0 4px rgba(0,0,0,0.15));", ";"], function (props) {
  return props.orientation === "up" ? "\n      border-bottom: 15px solid white;\n      top: 0px;\n    " : "\n      border-top: 15px solid white;\n      top: 5px;\n    ";
});
//# sourceMappingURL=Arrow.js.map