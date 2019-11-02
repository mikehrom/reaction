"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideGrid = hideGrid;
exports.OtherWorksFragmentContainer = exports.OtherWorks = void 0;

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.filter");

var _palette = require("@artsy/palette");

var _OtherAuctions = require("../OtherAuctions");

var _Header = require("./Header");

var _RelatedWorksArtworkGrid = require("./RelatedWorksArtworkGrid");

var _Artsy = require("../../../../Artsy");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _ArtworkGrid = _interopRequireDefault(require("../../../../Components/ArtworkGrid"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../../../Utils/get");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/**
 * Check to see if a connection's edges have a length; if false hide the grid.
 */
function hideGrid(artworksConnection) {
  return Boolean((0, _get.get)(artworksConnection, function (p) {
    return !p.edges.length;
  }));
}

var populatedGrids = function populatedGrids(grids) {
  if (grids && grids.length > 0) {
    return grids.filter(function (grid) {
      return grid.artworks && grid.artworks.edges && grid.artworks.edges.length > 0 && grid.__typename !== "RelatedArtworkGrid";
    });
  }
};

var contextGridTypeToContextModule = function contextGridTypeToContextModule(contextGridType) {
  switch (contextGridType) {
    case "ArtistArtworkGrid":
      {
        return Schema.ContextModule.OtherWorksByArtist;
      }

    case "PartnerArtworkGrid":
      {
        return Schema.ContextModule.OtherWorksFromGallery;
      }

    case "AuctionArtworkGrid":
      {
        return Schema.ContextModule.OtherWorksInAuction;
      }

    case "ShowArtworkGrid":
      {
        return Schema.ContextModule.OtherWorksFromShow;
      }
  }
};

var OtherWorks = (0, _Analytics.track)()(function (props) {
  var _props$artwork = props.artwork,
      context = _props$artwork.context,
      contextGrids = _props$artwork.contextGrids,
      sale = _props$artwork.sale;
  var gridsToShow = populatedGrids(contextGrids);
  var tracking = (0, _Analytics.useTracking)();
  return _react.default.createElement(_react.default.Fragment, null, gridsToShow && gridsToShow.length > 0 && _react.default.createElement(_palette.Join, {
    separator: _react.default.createElement(_palette.Spacer, {
      my: 3
    })
  }, gridsToShow.map(function (grid, index) {
    return _react.default.createElement(_react.default.Fragment, {
      key: "Grid-".concat(index)
    }, _react.default.createElement(_Header.Header, {
      title: grid.title,
      buttonHref: grid.ctaHref
    }), _react.default.createElement(_ArtworkGrid.default, {
      artworks: grid.artworks,
      columnCount: [2, 3, 4],
      preloadImageCount: 0,
      mediator: props.mediator,
      onBrickClick: function onBrickClick() {
        return tracking.trackEvent({
          type: Schema.Type.ArtworkBrick,
          action_type: Schema.ActionType.Click,
          context_module: contextGridTypeToContextModule(grid.__typename)
        });
      }
    }));
  })), !(context && context.__typename === "ArtworkContextAuction" && !(sale && sale.is_closed)) && _react.default.createElement(_palette.Box, {
    mt: 3
  }, _react.default.createElement(_RelatedWorksArtworkGrid.RelatedWorksArtworkGridRefetchContainer, {
    artwork: props.artwork
  })), context && context.__typename === "ArtworkContextAuction" && _react.default.createElement(_OtherAuctions.OtherAuctionsQueryRenderer, null));
});
exports.OtherWorks = OtherWorks;
var OtherWorksFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _Artsy.withSystemContext)(OtherWorks), {
  artwork: function artwork() {
    var node = require("../../../../__generated__/OtherWorks_artwork.graphql");

    if (node.hash && node.hash !== "269954e60ada0af3e2a551d25779a5d2") {
      console.error("The definition of 'OtherWorks_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/OtherWorks_artwork.graphql");
  }
});
exports.OtherWorksFragmentContainer = OtherWorksFragmentContainer;
//# sourceMappingURL=index.js.map