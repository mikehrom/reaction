"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideshowCta = exports.SlideshowTitle = exports.LabelWrapper = exports.IconContainer = exports.ImageSetLabel = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _IconImageSet = require("../../Icon/IconImageSet");

var _Responsive = require("../../../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageSetLabel = function ImageSetLabel(props) {
  var color = props.color,
      _props$section = props.section,
      images = _props$section.images,
      title = _props$section.title;
  var label = images.length === 1 ? "Image" : "Images";
  var imageCount = "".concat(images.length, " ").concat(label);
  var primaryTitle = title ? title : imageCount;
  var textColor = color !== "white" ? color : undefined;
  return _react.default.createElement(LabelWrapper, {
    alignItems: "center",
    justifyContent: "space-between"
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    justifyContent: "space-between"
  }, _react.default.createElement(SlideshowTitle, {
    size: ["4", "5"],
    weight: "medium",
    pb: 2,
    color: textColor
  }, primaryTitle), _react.default.createElement(SlideshowCta, null, _react.default.createElement(_palette.Sans, {
    size: ["2", "3"],
    weight: "medium",
    color: textColor
  }, "View Slideshow"), title && _react.default.createElement(_palette.Sans, {
    size: ["2", "3"],
    pl: 20,
    color: textColor
  }, imageCount))), _react.default.createElement(_Responsive.Media, {
    greaterThanOrEqual: "sm"
  }, _react.default.createElement(IconContainer, null, _react.default.createElement(_IconImageSet.IconImageSet, {
    color: textColor
  }))));
};

exports.ImageSetLabel = ImageSetLabel;

var IconContainer = _styledComponents.default.div.withConfig({
  displayName: "ImageSetLabel__IconContainer",
  componentId: "v8vmy8-0"
})(["height:45px;position:relative;margin-left:", "px;text-align:right;> svg{height:98%;}"], (0, _palette.space)(4));

exports.IconContainer = IconContainer;
var LabelWrapper = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "ImageSetLabel__LabelWrapper",
  componentId: "v8vmy8-1"
})(["padding:", "px;width:100%;"], (0, _palette.space)(2)); // exported for targeting from outside components

exports.LabelWrapper = LabelWrapper;
var SlideshowTitle = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "ImageSetLabel__SlideshowTitle",
  componentId: "v8vmy8-2"
})([""]);
exports.SlideshowTitle = SlideshowTitle;
var SlideshowCta = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "ImageSetLabel__SlideshowCta",
  componentId: "v8vmy8-3"
})([""]);
exports.SlideshowCta = SlideshowCta;
//# sourceMappingURL=ImageSetLabel.js.map