"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionsHubRailsContainer = exports.CollectionsHubRails = void 0;

require("core-js/modules/es6.array.map");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _ArtistSeriesRail = require("./ArtistSeriesRail");

var _FeaturedCollectionsRails = require("./FeaturedCollectionsRails");

var _OtherCollectionsRail = require("./OtherCollectionsRail");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var railForGroupType = function railForGroupType(collectionGroup) {
  var groupType = collectionGroup.groupType;

  switch (groupType) {
    case "ArtistSeries":
      return _react.default.createElement(_ArtistSeriesRail.ArtistSeriesRailContainer, {
        collectionGroup: collectionGroup
      });

    case "FeaturedCollections":
      return _react.default.createElement(_FeaturedCollectionsRails.FeaturedCollectionsRailsContainer, {
        collectionGroup: collectionGroup
      });

    case "OtherCollections":
      return _react.default.createElement(_OtherCollectionsRail.OtherCollectionsRailsContainer, {
        collectionGroup: collectionGroup
      });

    default:
      return null;
  }
};

var CollectionsHubRails = function CollectionsHubRails(_ref) {
  var linkedCollections = _ref.linkedCollections;
  return _react.default.createElement(_react.default.Fragment, null, linkedCollections.map(function (collectionGroup, index) {
    return _react.default.createElement("div", {
      key: index
    }, railForGroupType(collectionGroup));
  }));
};

exports.CollectionsHubRails = CollectionsHubRails;
var CollectionsHubRailsContainer = (0, _reactRelay.createFragmentContainer)(CollectionsHubRails, {
  linkedCollections: function linkedCollections() {
    var node = require("../../../../../../__generated__/CollectionsHubRails_linkedCollections.graphql");

    if (node.hash && node.hash !== "a7285e8c4087e97b3282b8c929f612be") {
      console.error("The definition of 'CollectionsHubRails_linkedCollections' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../../../__generated__/CollectionsHubRails_linkedCollections.graphql");
  }
});
exports.CollectionsHubRailsContainer = CollectionsHubRailsContainer;
//# sourceMappingURL=index.js.map