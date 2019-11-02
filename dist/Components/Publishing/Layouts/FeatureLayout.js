"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeatureLayout = void 0;

var _Sponsored = require("../utils/Sponsored");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Header = require("../Header/Header");

var _Nav = require("../Nav/Nav");

var _Block = require("../RelatedArticles/ArticleCards/Block");

var _Sections = require("../Sections/Sections");

var _CanvasFooter = require("./Components/CanvasFooter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeatureLayout = function FeatureLayout(props) {
  var article = props.article,
      backgroundColor = props.backgroundColor,
      color = props.color,
      customEditorial = props.customEditorial,
      isMobile = props.isMobile,
      isSuper = props.isSuper,
      relatedArticlesForCanvas = props.relatedArticlesForCanvas,
      showTooltips = props.showTooltips,
      showCollectionsRail = props.showCollectionsRail;
  var seriesArticle = article.seriesArticle; // TODO: Allow more hero types to use series nav

  var hasNav = seriesArticle && article.hero_section && article.hero_section.type === "fullscreen";
  var sponsor = seriesArticle && seriesArticle.sponsor || article.sponsor;
  var isSponsored = (0, _Sponsored.isEditorialSponsored)(sponsor);
  var seriesOrSuper = isSuper || seriesArticle;
  return _react.default.createElement(FeatureLayoutContainer, {
    backgroundColor: backgroundColor
  }, hasNav && _react.default.createElement(_Nav.Nav, {
    canFix: false,
    color: color,
    sponsor: sponsor,
    title: seriesArticle.title,
    transparent: true
  }), _react.default.createElement(_Header.Header, {
    article: article,
    textColor: color
  }), _react.default.createElement(FeatureLayoutContent, null, _react.default.createElement(_Sections.Sections, {
    article: article,
    color: color,
    isMobile: isMobile,
    showTooltips: showTooltips,
    isSponsored: isSponsored,
    isSuper: isSuper
  })), seriesArticle && _react.default.createElement(_Block.ArticleCardsBlock, props), relatedArticlesForCanvas && !seriesOrSuper && !customEditorial && _react.default.createElement(_CanvasFooter.CanvasFooter, {
    article: article,
    relatedArticles: relatedArticlesForCanvas,
    showCollectionsRail: showCollectionsRail
  }));
};

exports.FeatureLayout = FeatureLayout;

var FeatureLayoutContent = _styledComponents.default.div.withConfig({
  displayName: "FeatureLayout__FeatureLayoutContent",
  componentId: "sc-1fvxxr9-0"
})(["display:flex;width:100%;"]);

var FeatureLayoutContainer = _styledComponents.default.div.withConfig({
  displayName: "FeatureLayout__FeatureLayoutContainer",
  componentId: "sc-1fvxxr9-1"
})(["position:relative;", ";", "{position:absolute;}", "{padding-top:60px;}"], function (props) {
  return props.backgroundColor && "\n    background-color: ".concat(props.backgroundColor, ";\n  ");
}, _Nav.NavContainer, _Block.ArticleCardsContainer);
//# sourceMappingURL=FeatureLayout.js.map