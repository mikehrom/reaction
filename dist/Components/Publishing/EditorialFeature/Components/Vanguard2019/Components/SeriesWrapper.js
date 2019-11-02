"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VanguardSeriesWrapper = void 0;

require("core-js/modules/es6.array.map");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _palette = require("@artsy/palette");

var _Share = require("../../../../Byline/Share");

var _VideoHeader = require("./VideoHeader");

var _react = _interopRequireDefault(require("react"));

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _underscore = require("underscore.string");

var _ArtistWrapper = require("./ArtistWrapper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VanguardSeriesWrapper = function VanguardSeriesWrapper(props) {
  var article = props.article,
      isMobile = props.isMobile,
      onSlideshowStateChange = props.onSlideshowStateChange,
      isTest = props.isTest;
  var relatedArticles = article.relatedArticles,
      title = article.title,
      series = article.series;
  var slugifiedTitle = (0, _underscore.slugify)(title);
  var shareTitle = article.social_title || article.thumbnail_title;
  var hero_section = props.article.hero_section;
  var url = hero_section && hero_section.url || "";
  var isVideo = url.includes("mp4");
  return _react.default.createElement(_palette.Box, {
    id: slugifiedTitle,
    position: "relative"
  }, _react.default.createElement(_palette.Box, {
    pt: 50,
    background: (0, _palette.color)("white100"),
    zIndex: -10,
    position: "relative" // prevents overlapping nav on jump-link

  }), _react.default.createElement(_palette.Box, null, _react.default.createElement(SubSeriesHeaderText, {
    mx: "auto",
    maxWidth: ["90vw", "80vw", "80vw", 1400],
    px: 4
  }, _react.default.createElement(Title, {
    size: ["8", "10", "12", "16"],
    textAlign: "center",
    element: "h2"
  }, title)), isVideo && _react.default.createElement(_VideoHeader.VanguardVideoHeader, {
    svg: slugifiedTitle,
    url: url
  })), _react.default.createElement(_palette.Box, {
    background: (0, _palette.color)("white100")
  }, _react.default.createElement(_palette.Box, {
    mx: "auto",
    maxWidth: ["90vw", "80vw", "80vw", "65%"],
    px: 4,
    pb: 150,
    pt: 60
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    alignItems: "center"
  }, series && _react.default.createElement(SubTitle, {
    size: ["8", "10", "12", "12"],
    element: "h3",
    pb: 2
  }, series.sub_title), _react.default.createElement(_Share.Share, {
    url: "".concat(_sharify.data.APP_URL, "/artsy-vanguard-2019/").concat(slugifiedTitle),
    title: "Artsy Vanguard 2019: ".concat(shareTitle)
  })))), relatedArticles && relatedArticles.map(function (artistArticle, i) {
    return _react.default.createElement(_ArtistWrapper.VanguardArtistWrapper, {
      key: i,
      article: artistArticle,
      section: slugifiedTitle,
      isMobile: isMobile,
      onSlideshowStateChange: onSlideshowStateChange,
      isTest: isTest
    });
  }));
};

exports.VanguardSeriesWrapper = VanguardSeriesWrapper;
var SubSeriesHeaderText = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "SeriesWrapper__SubSeriesHeaderText",
  componentId: "sc-1v4ou91-0"
})(["position:absolute;left:0;top:50px;right:0;mix-blend-mode:difference;color:", ";will-change:color;z-index:-1;"], (0, _palette.color)("white100"));
var Title = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "SeriesWrapper__Title",
  componentId: "sc-1v4ou91-1"
})(["text-transform:uppercase;text-align:center;"]);
var SubTitle = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "SeriesWrapper__SubTitle",
  componentId: "sc-1v4ou91-2"
})(["text-transform:uppercase;text-align:center;"]);
//# sourceMappingURL=SeriesWrapper.js.map