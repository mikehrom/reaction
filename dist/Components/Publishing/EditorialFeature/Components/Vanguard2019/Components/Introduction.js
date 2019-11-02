"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VanguardIntroduction = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _palette = require("@artsy/palette");

var _Byline = require("../../../../Byline/Byline");

var _VanguardCredits = require("./VanguardCredits");

var _Text = require("../../../../Sections/Text");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Responsive = require("../../../../../../Utils/Responsive");

var _VideoHeader = require("./VideoHeader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      flex-direction: column;\n      align-items: center;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var VanguardIntroduction = function VanguardIntroduction(props) {
  var isMobile = props.isMobile;
  var description = props.article.series.description;
  var hero_section = props.article.hero_section;
  var url = hero_section && hero_section.url || "";
  var isVideo = url.includes("mp4");
  return _react.default.createElement(IntroContainer, null, _react.default.createElement(_palette.Box, {
    minHeight: "calc(100vw * 0.53)",
    pt: [100, 100, 50, 50]
  }, isVideo && _react.default.createElement(_VideoHeader.VanguardVideoHeader, {
    url: url
  }), _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, _react.default.createElement(HeaderText, {
    pt: 70,
    size: ["12", "12", "14", "16"],
    textAlign: "center"
  }, "The Artsy"))), _react.default.createElement(_palette.Box, {
    background: (0, _palette.color)("white100"),
    pt: [80, 100, 150]
  }, _react.default.createElement(_palette.Box, {
    mx: "auto",
    maxWidth: 980,
    px: 4
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    alignItems: "center",
    pb: 50
  }, _react.default.createElement(_Responsive.Media, {
    greaterThanOrEqual: "xl"
  }, _react.default.createElement(LargeTitle, {
    size: "12",
    element: "h1",
    textAlign: "center",
    pb: 1
  }, "The Artists To Know Right Now")), _react.default.createElement(_Responsive.Media, {
    lessThan: "xl"
  }, _react.default.createElement(Title, {
    size: ["8", "10", "12", "12"],
    element: "h1",
    textAlign: "center",
    pb: 1
  }, "The Artists To Know Right Now")), _react.default.createElement(_Byline.Byline, props), !isMobile && _react.default.createElement(_VanguardCredits.VanguardCredits, {
    isMobile: isMobile
  })), _react.default.createElement(_palette.Box, {
    pb: 12
  }, _react.default.createElement(_Text.Text, {
    layout: "standard",
    html: description,
    width: "800px"
  })))));
};

exports.VanguardIntroduction = VanguardIntroduction;
var HeaderText = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "Introduction__HeaderText",
  componentId: "acx5fk-0"
})(["position:absolute;top:0;width:100%;z-index:-1;color:", ";mix-blend-mode:difference;will-change:color;"], (0, _palette.color)("white100"));
var IntroContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "Introduction__IntroContainer",
  componentId: "acx5fk-1"
})(["", "{div::before{display:none;}}", ""], _Byline.BylineContainer, _palette.media.xs(_templateObject(), _Byline.BylineContainer));
var Title = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "Introduction__Title",
  componentId: "acx5fk-2"
})(["text-transform:uppercase;line-height:1em;"]);
var LargeTitle = (0, _styledComponents.default)(Title).withConfig({
  displayName: "Introduction__LargeTitle",
  componentId: "acx5fk-3"
})(["font-size:90px;"]);
//# sourceMappingURL=Introduction.js.map