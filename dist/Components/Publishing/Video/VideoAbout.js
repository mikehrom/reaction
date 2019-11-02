"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoAboutContainer = exports.Credits = exports.VideoAbout = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ShareDate = require("../Byline/ShareDate");

var _StyledText = require("../Sections/StyledText");

var _Text = require("../Sections/Text");

var _Responsive = require("../../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoAbout = function VideoAbout(_ref) {
  var article = _ref.article,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "black" : _ref$color,
      editCredits = _ref.editCredits,
      editDescription = _ref.editDescription;
  var _article$media = article.media,
      credits = _article$media.credits,
      description = _article$media.description;
  return _react.default.createElement(VideoAboutContainer, {
    maxWidth: 1200,
    mx: "auto",
    flexDirection: ["column-reverse", "column-reverse", "row", "row"]
  }, _react.default.createElement(Credits, {
    width: [1, 1, 1 / 3, 1 / 3],
    flexDirection: "column",
    pt: ["80px", "80px", 0, 0]
  }, _react.default.createElement(_palette.Sans, {
    size: "8",
    color: color,
    pb: 10
  }, "Credits"), editCredits ? _react.default.createElement(_Text.Text, {
    layout: "standard",
    color: color
  }, editCredits) : _react.default.createElement(_Text.Text, {
    layout: "standard",
    html: credits,
    color: color
  }), _react.default.createElement(_Responsive.Media, {
    greaterThanOrEqual: "md"
  }, _react.default.createElement(_palette.Box, {
    mt: 40
  }, _react.default.createElement(_ShareDate.ShareDate, {
    color: color,
    article: article
  })))), _react.default.createElement(_palette.Box, {
    width: [1, 1, 2 / 3, 2 / 3]
  }, _react.default.createElement(_palette.Sans, {
    size: "8",
    color: color,
    pb: 10
  }, "About the Film"), editDescription ? _react.default.createElement(_Text.Text, {
    color: color,
    layout: "standard"
  }, editDescription) : _react.default.createElement(_Text.Text, {
    color: color,
    layout: "standard",
    html: description
  }), _react.default.createElement(_Responsive.Media, {
    lessThan: "md"
  }, _react.default.createElement(_palette.Box, {
    mt: 40
  }, _react.default.createElement(_ShareDate.ShareDate, {
    color: color,
    article: article
  })))));
};

exports.VideoAbout = VideoAbout;
var Credits = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "VideoAbout__Credits",
  componentId: "sc-1ke1sjw-0"
})(["", "{p{padding:0;}}"], _StyledText.StyledText);
exports.Credits = Credits;
var VideoAboutContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "VideoAbout__VideoAboutContainer",
  componentId: "sc-1ke1sjw-1"
})([""]);
exports.VideoAboutContainer = VideoAboutContainer;
//# sourceMappingURL=VideoAbout.js.map