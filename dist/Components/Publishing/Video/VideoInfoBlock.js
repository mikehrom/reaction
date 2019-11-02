"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoInfoBlock = void 0;

var _palette = require("@artsy/palette");

var _Constants = require("../Constants");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoInfoBlock = function VideoInfoBlock(props) {
  var editTitle = props.editTitle,
      media = props.media,
      subTitle = props.subTitle,
      subTitleLink = props.subTitleLink,
      title = props.title;
  return _react.default.createElement("div", null, _react.default.createElement(_palette.Flex, null, subTitle && _react.default.createElement(SubTitle, {
    size: "3",
    mr: 20
  }, subTitleLink ? _react.default.createElement("a", {
    href: subTitleLink
  }, subTitle) : subTitle), media.duration && _react.default.createElement(_palette.Sans, {
    size: "3"
  }, (0, _Constants.formatTime)(media.duration))), _react.default.createElement(_palette.Sans, {
    size: "10",
    element: "h1"
  }, editTitle || title));
};

exports.VideoInfoBlock = VideoInfoBlock;
var SubTitle = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "VideoInfoBlock__SubTitle",
  componentId: "sc-1posffa-0"
})(["a{color:white;text-decoration:none;}"]);
//# sourceMappingURL=VideoInfoBlock.js.map