"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Assets/Colors"));

var _Default = _interopRequireDefault(require("./Default"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InvertedButton = (0, _styledComponents.default)(_Default.default).withConfig({
  displayName: "Inverted__InvertedButton",
  componentId: "sc-1azds3k-0"
})(["background:", ";color:", ";&:hover:not(:disabled){background:", ";}"], function (props) {
  return props.disabled ? _Colors.default.graySemibold : "black";
}, function (props) {
  return props.disabled ? "rgba(255,255,255,0.7)" : "white";
}, _Colors.default.purpleRegular);
var _default = InvertedButton;
exports.default = _default;
//# sourceMappingURL=Inverted.js.map