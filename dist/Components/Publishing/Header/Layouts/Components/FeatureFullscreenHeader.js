"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeatureHeaderContainer = exports.FeatureFullscreenHeader = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _palette = require("@artsy/palette");

var _PartnerInline = require("../../../Partner/PartnerInline");

var _react = _interopRequireDefault(require("react"));

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _resizer = require("../../../../../Utils/resizer");

var _Helpers = require("../../../../Helpers");

var _FeatureHeader = require("../FeatureHeader");

var _FeatureInnerContent = require("./FeatureInnerContent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: ", "px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FeatureFullscreenHeader = function FeatureFullscreenHeader(props) {
  var _props$article = props.article,
      hero_section = _props$article.hero_section,
      is_super_article = _props$article.is_super_article,
      seriesArticle = _props$article.seriesArticle,
      super_article = _props$article.super_article,
      editImage = props.editImage;
  var url = hero_section && hero_section.url || "";
  var isVideo = url.includes("mp4");
  var src = !isVideo && url.length && (0, _resizer.resize)(url, {
    width: !_sharify.data.IS_MOBILE ? 2000 : 600
  });
  var hasNav = seriesArticle || super_article || is_super_article;
  return _react.default.createElement(FeatureHeaderContainer, {
    hasNav: hasNav || editImage
  }, _react.default.createElement(FeatureAssetContainer, {
    src: src ? src : undefined
  }, editImage && _react.default.createElement(_FeatureHeader.EditImage, null, editImage), isVideo && _react.default.createElement(FeatureVideo, {
    src: url,
    autoPlay: true,
    controls: false,
    loop: true,
    muted: true,
    playsInline: true
  })), _react.default.createElement(Overlay, null), _react.default.createElement(HeaderTextContainer, {
    hasLogos: is_super_article
  }, is_super_article && _react.default.createElement(_PartnerInline.PartnerInline, {
    logo: super_article.partner_fullscreen_header_logo || super_article.partner_logo,
    url: super_article.partner_logo_link,
    color: "white",
    trackingData: {
      label: "Clicked primary partner logo",
      impression_type: "sa_primary_logo",
      destination_path: super_article.partner_logo_link,
      context_type: "article_fixed"
    }
  }), _react.default.createElement(_FeatureInnerContent.FeatureInnerContent, props)));
};

exports.FeatureFullscreenHeader = FeatureFullscreenHeader;

var Overlay = _styledComponents.default.div.withConfig({
  displayName: "FeatureFullscreenHeader__Overlay",
  componentId: "ix1prx-0"
})(["position:absolute;background-image:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0.3) );"]);

var HeaderTextContainer = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "FeatureFullscreenHeader__HeaderTextContainer",
  componentId: "ix1prx-1"
})(["height:100%;text-shadow:0 0 40px rgba(0,0,0,0.4);padding:50px;display:flex;flex-direction:column;justify-content:", ";.PartnerInline{position:relative;}", ";"], function (props) {
  return props.hasLogos ? "space-between" : "flex-end";
}, _Helpers.pMedia.xs(_templateObject(), (0, _palette.space)(2)));

var FeatureVideo = _styledComponents.default.video.withConfig({
  displayName: "FeatureFullscreenHeader__FeatureVideo",
  componentId: "ix1prx-2"
})(["width:100%;height:100%;object-fit:cover;"]);

var FeatureAssetContainer = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "FeatureFullscreenHeader__FeatureAssetContainer",
  componentId: "ix1prx-3"
})(["width:100%;height:100%;right:0;position:absolute;overflow:hidden;", ";"], function (props) {
  return props.src && "\n    background-image: url(".concat(props.src, ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n  ");
});

var FeatureHeaderContainer = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "FeatureFullscreenHeader__FeatureHeaderContainer",
  componentId: "ix1prx-4"
})(["width:100%;position:relative;height:", ";", ";"], function (props) {
  return props.hasNav ? "100vh" : "calc(100vh - 61px)";
}, function (props) {
  return !props.hasNav && "\n    margin-top: 61px;\n  ";
});

exports.FeatureHeaderContainer = FeatureHeaderContainer;
//# sourceMappingURL=FeatureFullscreenHeader.js.map