"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticlesWrapper = exports.ArticleCards = void 0;

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ArticleCard = require("./ArticleCard");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleCards = function ArticleCards(props) {
  var color = props.color,
      relatedArticles = props.relatedArticles,
      series = props.series;
  return _react.default.createElement(_palette.Box, {
    color: color
  }, relatedArticles.map(function (relatedArticle, i) {
    return _react.default.createElement(ArticlesWrapper, {
      mb: [40, 60],
      key: i
    }, _react.default.createElement(_ArticleCard.ArticleCard, {
      article: relatedArticle,
      color: color,
      series: series
    }));
  }));
}; // Used to target wrapper in other components


exports.ArticleCards = ArticleCards;
var ArticlesWrapper = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArticleCards__ArticlesWrapper",
  componentId: "sc-128ki95-0"
})([""]);
exports.ArticlesWrapper = ArticlesWrapper;
//# sourceMappingURL=ArticleCards.js.map