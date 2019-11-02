"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticlesRouteFragmentContainer = exports.ArticlesRoute = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _ArtistArticles = require("./ArtistArticles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticlesRoute = function ArticlesRoute(props) {
  return _react.default.createElement(_ArtistArticles.ArtistArticlesRefetchContainer, {
    artist: props.artist
  });
};

exports.ArticlesRoute = ArticlesRoute;
var ArticlesRouteFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArticlesRoute, {
  artist: function artist() {
    var node = require("../../../../__generated__/Articles_artist.graphql");

    if (node.hash && node.hash !== "98d755e5b63a5214bafae8262897cdab") {
      console.error("The definition of 'Articles_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Articles_artist.graphql");
  }
});
exports.ArticlesRouteFragmentContainer = ArticlesRouteFragmentContainer;
//# sourceMappingURL=index.js.map