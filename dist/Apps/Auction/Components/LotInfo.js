"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LotInfoFragmentContainer = exports.LotInfo = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LotInfo = function LotInfo(_ref) {
  var artwork = _ref.artwork,
      saleArtwork = _ref.saleArtwork;
  var bidCount = saleArtwork.counts.bidderPositions;
  return _react.default.createElement(_palette.Flex, {
    py: 4
  }, _react.default.createElement(_palette.Flex, {
    maxWidth: "150px"
  }, _react.default.createElement(_palette.Image, {
    width: "100%",
    src: artwork.imageUrl
  })), _react.default.createElement(_palette.Flex, {
    pl: 3,
    pt: 1,
    flexDirection: "column"
  }, _react.default.createElement(_palette.Sans, {
    size: "3",
    weight: "medium",
    color: "black100"
  }, "Lot ", saleArtwork.lotLabel), _react.default.createElement(_palette.Serif, {
    size: "3",
    color: "black100"
  }, _react.default.createElement("i", null, artwork.title), artwork.date && ", ".concat(artwork.date)), _react.default.createElement(_palette.Serif, {
    size: "3",
    color: "black100"
  }, artwork.artistNames), _react.default.createElement("br", null), _react.default.createElement(_palette.Serif, {
    size: "3"
  }, "Current Bid: ", saleArtwork.minimumNextBid.display), bidCount > 0 && _react.default.createElement(_palette.Serif, {
    size: "3",
    color: "black60"
  }, "(", bidCount, " bid", bidCount > 1 && "s", ")")));
};

exports.LotInfo = LotInfo;
var LotInfoFragmentContainer = (0, _reactRelay.createFragmentContainer)(LotInfo, {
  artwork: function artwork() {
    var node = require("../../../__generated__/LotInfo_artwork.graphql");

    if (node.hash && node.hash !== "0f99e65d0fccd0cc06748c0b0bc328e7") {
      console.error("The definition of 'LotInfo_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/LotInfo_artwork.graphql");
  },
  saleArtwork: function saleArtwork() {
    var node = require("../../../__generated__/LotInfo_saleArtwork.graphql");

    if (node.hash && node.hash !== "78ba547619a8a2d5ab0d32ec8acf85aa") {
      console.error("The definition of 'LotInfo_saleArtwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/LotInfo_saleArtwork.graphql");
  }
});
exports.LotInfoFragmentContainer = LotInfoFragmentContainer;
//# sourceMappingURL=LotInfo.js.map