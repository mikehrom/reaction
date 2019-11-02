"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemReviewFragmentContainer = exports.ItemReview = void 0;

require("core-js/modules/es6.array.find");

var _react = _interopRequireDefault(require("react"));

var _palette = require("@artsy/palette");

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageBox = _styledComponents.default.div.withConfig({
  displayName: "ItemReview__ImageBox",
  componentId: "sc-1ag9v4q-0"
})(["flex:0 1 auto;img{max-width:185px;max-height:375px;display:block;margin:0;}"]);

var dimensionsDisplay = function dimensionsDisplay(dimensions) {
  return _react.default.createElement(_palette.Serif, {
    size: "2",
    color: "black60"
  }, dimensions.in, " (", dimensions.cm, ")");
};

var ItemReview = function ItemReview(_ref) {
  var _ref$lineItem = _ref.lineItem,
      _ref$lineItem$artwork = _ref$lineItem.artwork,
      artist_names = _ref$lineItem$artwork.artist_names,
      title = _ref$lineItem$artwork.title,
      date = _ref$lineItem$artwork.date,
      medium = _ref$lineItem$artwork.medium,
      artworkDimensions = _ref$lineItem$artwork.dimensions,
      attribution_class = _ref$lineItem$artwork.attribution_class,
      url = _ref$lineItem$artwork.image.resized.url,
      edition_sets = _ref$lineItem$artwork.edition_sets,
      editionSetId = _ref$lineItem.editionSetId;
  return _react.default.createElement(_palette.BorderBox, {
    p: [2, 3]
  }, _react.default.createElement(_palette.Flex, {
    flexGrow: 1,
    flexDirection: "column"
  }, _react.default.createElement(_palette.Serif, {
    size: "2",
    weight: "semibold",
    color: "black60"
  }, artist_names), _react.default.createElement(_palette.Serif, {
    italic: true,
    size: "2",
    color: "black60"
  }, title, date && ", (".concat(date, ")")), medium && _react.default.createElement(_palette.Serif, {
    size: "2",
    color: "black60"
  }, medium), editionSetId && edition_sets && dimensionsDisplay(edition_sets.find(function (e) {
    return e.id === editionSetId;
  }).dimensions), !editionSetId && artworkDimensions && dimensionsDisplay(artworkDimensions), attribution_class && _react.default.createElement(_palette.Serif, {
    size: "2",
    color: "black60"
  }, attribution_class.shortDescription)), _react.default.createElement(ImageBox, null, _react.default.createElement("img", {
    alt: "".concat(title, " by ").concat(artist_names),
    src: url
  })));
};

exports.ItemReview = ItemReview;
var ItemReviewFragmentContainer = (0, _reactRelay.createFragmentContainer)(ItemReview, {
  lineItem: function lineItem() {
    var node = require("../../../__generated__/ItemReview_lineItem.graphql");

    if (node.hash && node.hash !== "c07dc43284e1d589e8b252309ad5443a") {
      console.error("The definition of 'ItemReview_lineItem' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/ItemReview_lineItem.graphql");
  }
});
exports.ItemReviewFragmentContainer = ItemReviewFragmentContainer;
//# sourceMappingURL=ItemReview.js.map