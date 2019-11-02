"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VanguardFrameText = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Responsive = require("../../../../../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VanguardFrameText = function VanguardFrameText(props) {
  var isSlideOpen = props.isSlideOpen;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, _react.default.createElement(MobileFrame, {
    isSlideOpen: isSlideOpen
  }, _react.default.createElement(MobileFrameText, {
    size: "8"
  }, "The Artsy"), _react.default.createElement(MobileFrameText, {
    size: "8",
    isUppercase: true
  }, "Vanguard"), _react.default.createElement(MobileFrameText, {
    size: "8",
    isUppercase: true
  }, "2019"))), _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, _react.default.createElement(FrameTextLeft, {
    isSlideOpen: isSlideOpen,
    size: ["12", "12", "14", "16"]
  }, "Vanguard"), _react.default.createElement(FrameTextRight, {
    isSlideOpen: isSlideOpen,
    size: ["12", "12", "14", "16"]
  }, "2019")));
};

exports.VanguardFrameText = VanguardFrameText;
var FrameText = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "FrameText",
  componentId: "sc-8olftt-0"
})(["position:fixed;top:50%;text-transform:uppercase;z-index:2;mix-blend-mode:difference;color:", ";will-change:color;"], (0, _palette.color)("white100"));
var FrameTextLeft = (0, _styledComponents.default)(FrameText).withConfig({
  displayName: "FrameText__FrameTextLeft",
  componentId: "sc-8olftt-1"
})(["left:0;transform:rotate(-90deg);transform-origin:30% 136%;&&&{z-index:", ";}"], function (p) {
  return p.isSlideOpen ? 0 : 2;
});
var FrameTextRight = (0, _styledComponents.default)(FrameText).withConfig({
  displayName: "FrameText__FrameTextRight",
  componentId: "sc-8olftt-2"
})(["right:0;transform:rotate(90deg);transform-origin:60% 60%;&&&{z-index:", ";}"], function (p) {
  return p.isSlideOpen ? 0 : 2;
});
var MobileFrame = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "FrameText__MobileFrame",
  componentId: "sc-8olftt-3"
})(["position:fixed;flex-direction:column;top:65px;left:-10px;height:calc(100vh - 150px);width:60px;justify-content:space-between;z-index:", ";"], function (p) {
  return p.isSlideOpen ? 0 : 2;
});
var MobileFrameText = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "FrameText__MobileFrameText",
  componentId: "sc-8olftt-4"
})(["transform:rotate(90deg);white-space:nowrap;padding:0 10px;", ""], function (_ref) {
  var isUppercase = _ref.isUppercase;
  return isUppercase && "\n    text-transform: uppercase;\n  ";
});
//# sourceMappingURL=FrameText.js.map