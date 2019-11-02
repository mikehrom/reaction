"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasFooterContainer = exports.CanvasFooter = void 0;

require("core-js/modules/es6.object.assign");

var _palette = require("@artsy/palette");

var _CollectionsRail = require("../../../CollectionsRail");

var _RelatedArticlesCanvas = require("../../RelatedArticles/Canvas/RelatedArticlesCanvas");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CanvasFooter = function CanvasFooter(props) {
  var article = props.article,
      relatedArticles = props.relatedArticles;
  return _react.default.createElement(CanvasFooterContainer, null, relatedArticles && _react.default.createElement(_RelatedArticlesCanvas.RelatedArticlesCanvas, {
    articles: relatedArticles,
    vertical: article.layout !== "news" && article.vertical
  }), props.showCollectionsRail && _react.default.createElement("div", null, _react.default.createElement(_palette.Separator, {
    mb: 4
  }), _react.default.createElement(_CollectionsRail.CollectionsRailContent, _extends({}, props, {
    articleId: article.id
  }))));
};

exports.CanvasFooter = CanvasFooter;

var CanvasFooterContainer = _styledComponents.default.div.withConfig({
  displayName: "CanvasFooter__CanvasFooterContainer",
  componentId: "sc-1tuekop-0"
})(["border-top:1px solid ", ";"], (0, _palette.color)("black10"));

exports.CanvasFooterContainer = CanvasFooterContainer;
//# sourceMappingURL=CanvasFooter.js.map