"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuctionResultsRouteFragmentContainer = exports.AuctionResultsRoute = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _ArtistAuctionResults = require("./ArtistAuctionResults");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuctionResultsRoute = function AuctionResultsRoute(props) {
  return _react.default.createElement(_ArtistAuctionResults.ArtistAuctionResultsRefetchContainer, {
    sort: "DATE_DESC",
    artist: props.artist
  });
};

exports.AuctionResultsRoute = AuctionResultsRoute;
var AuctionResultsRouteFragmentContainer = (0, _reactRelay.createFragmentContainer)(AuctionResultsRoute, {
  artist: function artist() {
    var node = require("../../../../__generated__/AuctionResults_artist.graphql");

    if (node.hash && node.hash !== "75a2a7fb0c52b2221a3eb378a5f6df38") {
      console.error("The definition of 'AuctionResults_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/AuctionResults_artist.graphql");
  }
});
exports.AuctionResultsRouteFragmentContainer = AuctionResultsRouteFragmentContainer;
//# sourceMappingURL=index.js.map