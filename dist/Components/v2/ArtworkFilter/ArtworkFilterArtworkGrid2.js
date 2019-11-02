"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkFilterArtworkGridRefetchContainer = void 0;

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _palette = require("@artsy/palette");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _Artsy = require("../../../Artsy");

var _ArtworkGrid = _interopRequireDefault(require("../../ArtworkGrid"));

var _get = require("../../../Utils/get");

var _LoadingArea = require("../LoadingArea");

var _Pagination = require("../Pagination");

var _ArtworkFilterContext = require("./ArtworkFilterContext");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArtworkFilterArtworkGrid = function ArtworkFilterArtworkGrid(props) {
  var _useSystemContext = (0, _Artsy.useSystemContext)(),
      user = _useSystemContext.user,
      mediator = _useSystemContext.mediator;

  var context = (0, _ArtworkFilterContext.useArtworkFilterContext)();
  var aggregations = (0, _get.get)(props, function (p) {
    return p.filtered_artworks.aggregations;
  });
  /**
   * If aggregations have not been passed as props when instantiating the
   * <ArtworkFilter> component then populate.
   */

  (0, _react.useEffect)(function () {
    if ((0, _isEmpty2.default)(context.aggregations) && aggregations.length) {
      context.setAggregations(aggregations);
    }
  }, []);
  var columnCount = props.columnCount,
      artworks = props.filtered_artworks.artworks;
  var hasNextPage = artworks.pageInfo.hasNextPage;
  /**
   * Load next page of artworks
   */

  function loadNext() {
    if (hasNextPage) {
      loadPage(context.filters.page + 1);
    }
  }
  /**
   * Refetch page of artworks based on cursor
   */


  function loadPage(page) {
    context.setFilter("page", page);
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_LoadingArea.LoadingArea, {
    isLoading: props.isLoading
  }, _react.default.createElement(_ArtworkGrid.default, {
    artworks: artworks,
    columnCount: columnCount,
    preloadImageCount: 9,
    itemMargin: 40,
    user: user,
    mediator: mediator,
    onClearFilters: context.resetFilters,
    emptyStateComponent: context.ZeroState && _react.default.createElement(context.ZeroState, null),
    onBrickClick: function onBrickClick(artwork) {
      if (context.onArtworkBrickClick) {
        context.onArtworkBrickClick(artwork, props);
      }
    }
  }), _react.default.createElement(_palette.Spacer, {
    mb: 3
  }), _react.default.createElement(_palette.Box, null, _react.default.createElement(_Pagination.PaginationFragmentContainer, {
    hasNextPage: artworks.pageInfo.hasNextPage,
    pageCursors: artworks.pageCursors,
    onClick: function onClick(_cursor, page) {
      return loadPage(page);
    },
    onNext: function onNext() {
      return loadNext();
    },
    scrollTo: "#jump--artworkFilter"
  }))));
};

var ArtworkFilterArtworkGridRefetchContainer = (0, _reactRelay.createRefetchContainer)(ArtworkFilterArtworkGrid, {
  filtered_artworks: function filtered_artworks() {
    var node = require("../../../__generated__/ArtworkFilterArtworkGrid2_filtered_artworks.graphql");

    if (node.hash && node.hash !== "a4bd893a278d6f5768ed5964137f09e1") {
      console.error("The definition of 'ArtworkFilterArtworkGrid2_filtered_artworks' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/ArtworkFilterArtworkGrid2_filtered_artworks.graphql");
  }
}, function () {
  var node = require("../../../__generated__/ArtworkFilterArtworkGrid2Query.graphql");

  if (node.hash && node.hash !== "61f36e1c4b06e0230e9fbb23295176db") {
    console.error("The definition of 'ArtworkFilterArtworkGrid2Query' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("../../../__generated__/ArtworkFilterArtworkGrid2Query.graphql");
});
exports.ArtworkFilterArtworkGridRefetchContainer = ArtworkFilterArtworkGridRefetchContainer;
//# sourceMappingURL=ArtworkFilterArtworkGrid2.js.map