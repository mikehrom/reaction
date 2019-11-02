"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleCardsContainer = exports.ArticleCardsBlock = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Fonts = require("../../../../Assets/Fonts");

var _VerticalOrSeriesTitle = require("../../Sections/VerticalOrSeriesTitle");

var _SeriesAbout = require("../../Series/SeriesAbout");

var _ArticleCards = require("./ArticleCards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleCardsBlock = function ArticleCardsBlock(props) {
  var article = props.article,
      relatedArticles = props.relatedArticles;
  var seriesArticle = article.seriesArticle;
  return _react.default.createElement(ArticleCardsContainer, {
    color: props.color
  }, (relatedArticles || article.relatedArticles) && _react.default.createElement(_palette.Box, {
    maxWidth: 1200,
    mx: "auto"
  }, _react.default.createElement(_VerticalOrSeriesTitle.VerticalOrSeriesTitle, {
    article: article,
    color: props.color,
    prefix: "More in "
  }), _react.default.createElement(_ArticleCards.ArticleCards, {
    relatedArticles: relatedArticles || article.relatedArticles,
    series: seriesArticle,
    color: props.color
  })), seriesArticle && _react.default.createElement(_palette.Box, {
    maxWidth: 1200,
    mx: "auto",
    pt: [40, 40, 60],
    pb: 100
  }, _react.default.createElement(_SeriesAbout.SeriesAbout, {
    article: seriesArticle,
    color: props.color
  })));
};

exports.ArticleCardsBlock = ArticleCardsBlock;
ArticleCardsBlock.defaultProps = {
  color: (0, _palette.color)("black100")
};

var ArticleCardsContainer = _styledComponents.default.div.withConfig({
  displayName: "Block__ArticleCardsContainer",
  componentId: "sc-1x724pr-0"
})(["color:", ";", "{", ";width:100%;margin-bottom:40px;a{border-bottom:2px solid;}}"], function (props) {
  return props.color;
}, _VerticalOrSeriesTitle.Vertical, (0, _Fonts.unica)("s32"));

exports.ArticleCardsContainer = ArticleCardsContainer;
//# sourceMappingURL=Block.js.map