"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeatureSplitHeaderContainer = exports.FeatureAssetContainer = exports.FeatureSplitHeader = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _palette = require("@artsy/palette");

var _Byline = require("../../../Byline/Byline");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _resizer = require("../../../../../Utils/resizer");

var _Responsive = require("../../../../../Utils/Responsive");

var _FeatureHeader = require("../FeatureHeader");

var _FeatureInnerContent = require("./FeatureInnerContent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    height: fit-content;\n    ", "\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    height: fit-content;\n    overflow: inherit;\n\n    img {\n      display: block;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    height: auto;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", " {\n      margin-bottom: 20px;\n    }\n    ", " {\n      ", " {\n        display: none;\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FeatureSplitHeader = function FeatureSplitHeader(props) {
  var _props$article = props.article,
      hero_section = _props$article.hero_section,
      seriesArticle = _props$article.seriesArticle,
      editImage = props.editImage;
  var url = hero_section && hero_section.url || "";
  var isVideo = url.includes("mp4");
  var src = !isVideo && url.length && (0, _resizer.resize)(url, {
    width: 1600
  });
  return _react.default.createElement(FeatureSplitHeaderContainer, {
    hasNav: (seriesArticle || editImage) && true,
    justifyContent: "space-between",
    flexDirection: ["column", "column", "row", "row"]
  }, _react.default.createElement(HeaderTextContainer, {
    width: ["100%", "100%", "50%", "50%"],
    p: 20
  }, _react.default.createElement(_FeatureInnerContent.FeatureInnerContent, props)), _react.default.createElement(FeatureAssetContainer, {
    width: ["100%", "100%", "50%", "50%"],
    p: [0, 0, 20, 20]
  }, editImage && _react.default.createElement(_FeatureHeader.EditImage, null, editImage), isVideo ? _react.default.createElement(FeatureVideo, {
    src: url,
    autoPlay: true,
    controls: false,
    loop: true,
    muted: true,
    playsInline: true
  }) : src && _react.default.createElement(ImageContainer, {
    src: src
  }, _react.default.createElement(Img, {
    src: src
  }))), _react.default.createElement(_Responsive.Media, {
    lessThan: "md"
  }, _react.default.createElement(HeaderTextContainer, {
    width: "100%",
    px: 20
  }, _react.default.createElement(_FeatureInnerContent.FeatureInnerSubContent, props))));
};

exports.FeatureSplitHeader = FeatureSplitHeader;
var HeaderTextContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "FeatureSplitHeader__HeaderTextContainer",
  componentId: "sc-1y8c2x0-0"
})(["", "{height:100%;justify-content:space-between;}", "{display:block;}", "{margin-top:", "px;}", ";"], _FeatureInnerContent.TextContainer, _FeatureInnerContent.SubContentContainer, _Byline.BylineContainer, (0, _palette.space)(3), _palette.media.md(_templateObject(), _FeatureInnerContent.Title, _FeatureInnerContent.TextContainer, _FeatureInnerContent.SubContentContainer));

var FeatureVideo = _styledComponents.default.video.withConfig({
  displayName: "FeatureSplitHeader__FeatureVideo",
  componentId: "sc-1y8c2x0-1"
})(["width:100%;height:100%;object-fit:cover;", ";"], _palette.media.md(_templateObject2()));

var FeatureAssetContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "FeatureSplitHeader__FeatureAssetContainer",
  componentId: "sc-1y8c2x0-2"
})(["flex:1;overflow:hidden;position:relative;img{display:none;}", ";"], _palette.media.md(_templateObject3()));
exports.FeatureAssetContainer = FeatureAssetContainer;

var ImageContainer = _styledComponents.default.div.withConfig({
  displayName: "FeatureSplitHeader__ImageContainer",
  componentId: "sc-1y8c2x0-3"
})(["", ";background-size:cover;background-repeat:no-repeat;background-position:center;height:100%;", ";"], function (props) {
  return props.src && "\n  background-image: url(".concat(props.src, ");\n  ");
}, _palette.media.md(_templateObject4(), function (props) {
  return props.src && "\n      background-image: none;\n      height: fit-content;\n    ";
}));

var Img = _styledComponents.default.img.withConfig({
  displayName: "FeatureSplitHeader__Img",
  componentId: "sc-1y8c2x0-4"
})(["width:100%;"]);

var FeatureSplitHeaderContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "FeatureSplitHeader__FeatureSplitHeaderContainer",
  componentId: "sc-1y8c2x0-5"
})(["height:", ";min-height:fit-content;", ";"], function (props) {
  return props.hasNav ? "100vh" : "calc(100vh - 61px)";
}, function (props) {
  return !props.hasNav && "\n    margin-top: 61px;\n  ";
});
exports.FeatureSplitHeaderContainer = FeatureSplitHeaderContainer;
//# sourceMappingURL=FeatureSplitHeader.js.map