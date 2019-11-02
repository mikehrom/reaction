"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkDetailsArticlesFragmentContainer = exports.ArtworkDetailsArticles = void 0;

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _ArtistArticle = require("../../../Artist/Routes/Articles/ArtistArticle");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../../../Utils/get");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArtworkDetailsArticles = function ArtworkDetailsArticles(props) {
  var articles = props.artwork.articles;

  if (!articles || articles.length < 1) {
    return null;
  }

  return _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_palette.Box, null, articles.map(function (article, index) {
    var imageUrl = (0, _get.get)(article, function (p) {
      return p.thumbnail_image.resized.url;
    });
    return _react.default.createElement(_ArtistArticle.ArticleItem, {
      title: article.thumbnail_title,
      imageUrl: imageUrl,
      date: article.published_at,
      author: article.author.name,
      href: article.href,
      key: index,
      lastChild: index === articles.length - 1
    });
  }))));
};

exports.ArtworkDetailsArticles = ArtworkDetailsArticles;
var ArtworkDetailsArticlesFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkDetailsArticles, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkDetailsArticles_artwork.graphql");

    if (node.hash && node.hash !== "a82766a04154e8b1f4c8d6938e7863d2") {
      console.error("The definition of 'ArtworkDetailsArticles_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkDetailsArticles_artwork.graphql");
  }
});
exports.ArtworkDetailsArticlesFragmentContainer = ArtworkDetailsArticlesFragmentContainer;
//# sourceMappingURL=ArtworkDetailsArticles.js.map