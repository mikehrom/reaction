"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkFilterQueryRenderer = exports.ArtworkFilterRefetchContainer = exports.ArtworkQueryFilter = exports.BaseArtworkFilter = exports.ArtworkFilter = void 0;

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.entries");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _react = _interopRequireWildcard(require("react"));

var _useDeepCompareEffect = _interopRequireDefault(require("use-deep-compare-effect"));

var _reactRelay = require("react-relay");

var _Artsy = require("../../../Artsy");

var _useTracking = require("../../../Artsy/Analytics/useTracking");

var _renderWithLoadProgress = require("../../../Artsy/Relay/renderWithLoadProgress");

var _usePrevious = require("../../../Utils/Hooks/usePrevious");

var _Responsive = require("../../../Utils/Responsive");

var _ArtworkFilterArtworkGrid = require("./ArtworkFilterArtworkGrid2");

var _SortFilter = require("./ArtworkFilters/SortFilter");

var _ArtworkFilterContext = require("./ArtworkFilterContext");

var _ArtworkFilterMobileActionSheet = require("./ArtworkFilterMobileActionSheet");

var _ArtworkFilters = require("./ArtworkFilters");

var _palette = require("@artsy/palette");

var _SystemQueryRenderer = require("../../../Artsy/Relay/SystemQueryRenderer");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary ArtworkFilter which is wrapped with a context and refetch container.
 *
 * If needing more granular control over the query being used, or the root query
 * doesn't `extend Viewer`, the BaseArtworkFilter can be imported below. See
 * `Apps/Collection` for an example, which queries Kaws for data.
 */
var ArtworkFilter = function ArtworkFilter(_ref) {
  var viewer = _ref.viewer,
      aggregations = _ref.aggregations,
      counts = _ref.counts,
      filters = _ref.filters,
      sortOptions = _ref.sortOptions,
      onArtworkBrickClick = _ref.onArtworkBrickClick,
      onFilterClick = _ref.onFilterClick,
      onChange = _ref.onChange,
      ZeroState = _ref.ZeroState;
  return _react.default.createElement(_ArtworkFilterContext.ArtworkFilterContextProvider, {
    aggregations: aggregations,
    counts: counts,
    filters: filters,
    sortOptions: sortOptions,
    onArtworkBrickClick: onArtworkBrickClick,
    onFilterClick: onFilterClick,
    onChange: onChange,
    ZeroState: ZeroState
  }, _react.default.createElement(ArtworkFilterRefetchContainer, {
    viewer: viewer
  }));
};

exports.ArtworkFilter = ArtworkFilter;

var BaseArtworkFilter = function BaseArtworkFilter(_ref2) {
  var relay = _ref2.relay,
      viewer = _ref2.viewer,
      _ref2$relayVariables = _ref2.relayVariables,
      relayVariables = _ref2$relayVariables === void 0 ? {} : _ref2$relayVariables,
      props = _objectWithoutProperties(_ref2, ["relay", "viewer", "relayVariables"]);

  var filtered_artworks = viewer.filtered_artworks;
  var hasFilter = filtered_artworks && filtered_artworks.__id; // If there was an error fetching the filter,
  // we still want to render the rest of the page.

  if (!hasFilter) return null;
  var tracking = (0, _useTracking.useTracking)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      toggleFetching = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showMobileActionSheet = _useState4[0],
      toggleMobileActionSheet = _useState4[1];

  var filterContext = (0, _ArtworkFilterContext.useArtworkFilterContext)();
  var previousFilters = (0, _usePrevious.usePrevious)(filterContext.filters);
  /**
   * Check to see if the mobile action sheet is present and prevent scrolling
   */

  (0, _react.useEffect)(function () {
    var setScrollable = function setScrollable(doScroll) {
      document.body.style.overflowY = doScroll ? "visible" : "hidden";
    };

    if (showMobileActionSheet) {
      setScrollable(false);
    }

    return function () {
      setScrollable(true);
    };
  }, [showMobileActionSheet]);
  /**
   * Check to see if the current filter is different from the previous filter
   * and trigger a reload.
   */

  (0, _useDeepCompareEffect.default)(function () {
    Object.entries(filterContext.filters).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          filterKey = _ref4[0],
          currentFilter = _ref4[1];

      var previousFilter = previousFilters[filterKey];
      var filtersHaveUpdated = !(0, _isEqual2.default)(currentFilter, previousFilter);

      if (filtersHaveUpdated) {
        fetchResults();
        tracking.trackEvent({
          action_type: _Artsy.AnalyticsSchema.ActionType.CommercialFilterParamsChanged,
          current: filterContext.filters,
          changed: _defineProperty({}, filterKey, filterContext.filters[filterKey])
        });
      }
    });
  }, [filterContext.filters]);

  function fetchResults() {
    toggleFetching(true);

    var relayRefetchVariables = _objectSpread({}, filterContext.filters, relayVariables);

    relay.refetch(relayRefetchVariables, null, function (error) {
      if (error) {
        console.error(error);
      }

      toggleFetching(false);
    });
  }

  var ArtworkGrid = function ArtworkGrid() {
    return _react.default.createElement(_ArtworkFilterArtworkGrid.ArtworkFilterArtworkGridRefetchContainer, {
      filtered_artworks: viewer.filtered_artworks,
      isLoading: isFetching,
      columnCount: [2, 2, 2, 3]
    });
  };

  return _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Box, {
    id: "jump--artworkFilter"
  }), _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, _react.default.createElement(_palette.Box, {
    mb: 1
  }, showMobileActionSheet && _react.default.createElement(_ArtworkFilterMobileActionSheet.ArtworkFilterMobileActionSheet, {
    onClose: function onClose() {
      return toggleMobileActionSheet(false);
    }
  }, _react.default.createElement(_ArtworkFilters.ArtworkFilters, null)), _react.default.createElement(_palette.Flex, {
    justifyContent: "space-between",
    alignItems: "center",
    py: 1
  }, _react.default.createElement(_palette.Button, {
    size: "small",
    onClick: function onClick() {
      return toggleMobileActionSheet(true);
    }
  }, _react.default.createElement(_palette.Flex, {
    justifyContent: "space-between",
    alignItems: "center"
  }, _react.default.createElement(_palette.FilterIcon, {
    fill: "white100"
  }), _react.default.createElement(_palette.Spacer, {
    mr: 0.5
  }), "Filter")), _react.default.createElement(_SortFilter.SortFilter, null)), _react.default.createElement(_palette.Spacer, {
    mb: 2
  }), _react.default.createElement(ArtworkGrid, null))), _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, _react.default.createElement(_palette.Flex, null, _react.default.createElement(_palette.Box, {
    width: "25%",
    mr: 2,
    mt: 0.5
  }, _react.default.createElement(_ArtworkFilters.ArtworkFilters, null)), _react.default.createElement(_palette.Box, {
    width: "75%"
  }, _react.default.createElement(_palette.Box, {
    mb: 2
  }, _react.default.createElement(_palette.Box, {
    pb: 2,
    mt: 0.5
  }, _react.default.createElement(_palette.Separator, null)), _react.default.createElement(_SortFilter.SortFilter, null)), props.children || _react.default.createElement(ArtworkGrid, null)))));
};

exports.BaseArtworkFilter = BaseArtworkFilter;

var ArtworkQueryFilter = function ArtworkQueryFilter() {
  var node = require("../../../__generated__/ArtworkFilterQuery.graphql");

  if (node.hash && node.hash !== "a06aa27bf817129fa27fb93d0b8d9ffa") {
    console.error("The definition of 'ArtworkFilterQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("../../../__generated__/ArtworkFilterQuery.graphql");
};

exports.ArtworkQueryFilter = ArtworkQueryFilter;
var ArtworkFilterRefetchContainer = (0, _reactRelay.createRefetchContainer)(BaseArtworkFilter, {
  viewer: function viewer() {
    var node = require("../../../__generated__/ArtworkFilter_viewer.graphql");

    if (node.hash && node.hash !== "b03297e790c78632c4fe24bd5d7de6e3") {
      console.error("The definition of 'ArtworkFilter_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/ArtworkFilter_viewer.graphql");
  }
}, ArtworkQueryFilter);
/**
 * This QueryRenderer can be used to instantiate stand-alone embedded ArtworkFilters
 * that are not dependent on URLBar state.
 */

exports.ArtworkFilterRefetchContainer = ArtworkFilterRefetchContainer;

var ArtworkFilterQueryRenderer = function ArtworkFilterQueryRenderer(_ref5) {
  var _ref5$keyword = _ref5.keyword,
      keyword = _ref5$keyword === void 0 ? "andy warhol" : _ref5$keyword;

  var _useSystemContext = (0, _Artsy.useSystemContext)(),
      relayEnvironment = _useSystemContext.relayEnvironment;

  return _react.default.createElement(_ArtworkFilterContext.ArtworkFilterContextProvider, {
    filters: _objectSpread({}, _ArtworkFilterContext.initialArtworkFilterState, {
      keyword: keyword
    })
  }, _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment // FIXME: Passing a variable to `query` shouldn't error out in linter

    /* tslint:disable:relay-operation-generics */
    ,
    query: ArtworkQueryFilter,
    variables: {
      keyword: keyword
    },
    render: (0, _renderWithLoadProgress.renderWithLoadProgress)(ArtworkFilterRefetchContainer) // FIXME: Find way to support union types here

  }));
};

exports.ArtworkFilterQueryRenderer = ArtworkFilterQueryRenderer;
//# sourceMappingURL=index.js.map