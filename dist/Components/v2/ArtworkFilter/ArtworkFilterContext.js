"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useArtworkFilterContext = exports.ArtworkFilterContextProvider = exports.ArtworkFilterContext = exports.initialArtworkFilterState = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.number.constructor");

require("core-js/modules/es6.function.name");

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _react = _interopRequireWildcard(require("react"));

var _useDeepCompareEffect = _interopRequireDefault(require("use-deep-compare-effect"));

var _hasFilters = require("./Utils/hasFilters");

var _isDefaultFilter = require("./Utils/isDefaultFilter");

var _rangeToTuple2 = require("./Utils/rangeToTuple");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Initial filter state
 */
var initialArtworkFilterState = {
  attribution_class: [],
  major_periods: [],
  page: 1,
  sort: "-decayed_merch" // TODO: Remove these unneeded default props
  // height: "*-*",
  // price_range: "*-*",
  // width: "*-*",

  /**
   * A list of all possible artwork filters across all apps
   */

};
exports.initialArtworkFilterState = initialArtworkFilterState;

/**
 * Context behavior shared globally across the ArtworkFilter component tree
 */
var ArtworkFilterContext = _react.default.createContext({
  filters: initialArtworkFilterState,
  hasFilters: false,
  isDefaultValue: null,
  rangeToTuple: null,
  resetFilters: null,
  setFilter: null,
  sortOptions: [],
  unsetFilter: null,
  ZeroState: null
});

exports.ArtworkFilterContext = ArtworkFilterContext;

var ArtworkFilterContextProvider = function ArtworkFilterContextProvider(_ref) {
  var _ref$aggregations = _ref.aggregations,
      aggregations = _ref$aggregations === void 0 ? [] : _ref$aggregations,
      children = _ref.children,
      _ref$counts = _ref.counts,
      counts = _ref$counts === void 0 ? {} : _ref$counts,
      _ref$filters = _ref.filters,
      filters = _ref$filters === void 0 ? {} : _ref$filters,
      onArtworkBrickClick = _ref.onArtworkBrickClick,
      onChange = _ref.onChange,
      onFilterClick = _ref.onFilterClick,
      sortOptions = _ref.sortOptions,
      ZeroState = _ref.ZeroState;

  var initialFilterState = _objectSpread({}, initialArtworkFilterState, filters);

  var _useReducer = (0, _react.useReducer)(artworkFilterReducer, initialFilterState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      artworkFilterState = _useReducer2[0],
      dispatch = _useReducer2[1]; // TODO: Consolidate this into additional reducer


  var _useState = (0, _react.useState)(aggregations),
      _useState2 = _slicedToArray(_useState, 2),
      filterAggregations = _useState2[0],
      setAggregations = _useState2[1];

  var _useState3 = (0, _react.useState)(counts),
      _useState4 = _slicedToArray(_useState3, 2),
      artworkCounts = _useState4[0],
      setCounts = _useState4[1];

  (0, _useDeepCompareEffect.default)(function () {
    if (onChange) {
      onChange((0, _omit2.default)(artworkFilterState, ["reset"]));
    }
  }, [artworkFilterState]);
  var artworkFilterContext = {
    filters: artworkFilterState,
    hasFilters: (0, _hasFilters.hasFilters)(artworkFilterState),
    // Handlers
    onArtworkBrickClick: onArtworkBrickClick,
    onFilterClick: onFilterClick,
    // Sorting
    sortOptions: sortOptions,
    aggregations: filterAggregations,
    setAggregations: setAggregations,
    counts: artworkCounts,
    setCounts: setCounts,
    // Components
    ZeroState: ZeroState,
    // Filter manipulation
    isDefaultValue: function isDefaultValue(field) {
      return (0, _isDefaultFilter.isDefaultFilter)(field, artworkFilterState[field]);
    },
    rangeToTuple: function rangeToTuple(range) {
      return (0, _rangeToTuple2.rangeToTuple)(artworkFilterState, range);
    },
    setFilter: function setFilter(name, val) {
      if (onFilterClick) {
        onFilterClick(name, val, _objectSpread({}, artworkFilterState, _defineProperty({}, name, val)));
      }

      dispatch({
        type: "SET",
        payload: {
          name: name,
          value: val
        }
      });
    },
    unsetFilter: function unsetFilter(name) {
      dispatch({
        type: "UNSET",
        payload: {
          name: name
        }
      });
    },
    resetFilters: function resetFilters() {
      dispatch({
        type: "RESET",
        payload: null
      });
    }
  };
  return _react.default.createElement(ArtworkFilterContext.Provider, {
    value: artworkFilterContext
  }, children);
};

exports.ArtworkFilterContextProvider = ArtworkFilterContextProvider;

var artworkFilterReducer = function artworkFilterReducer(state, action) {
  switch (action.type) {
    /**
     * Setting  and updating filters
     */
    case "SET":
      {
        var _action$payload = action.payload,
            _name = _action$payload.name,
            _value = _action$payload.value;
        var _filterState = {};

        if (_name === "attribution_class") {
          _filterState = {
            attribution_class: state.filters.attribution_class.concat(_value)
          };
        }

        if (_name === "major_periods") {
          _filterState = {
            major_periods: _value ? [_value] : []
          };
        }

        if (_name === "page") {
          _filterState[_name] = Number(_value);
        } // String filter types


        ;
        ["color", "height", "medium", "partner_id", "price_range", "sort", "width"].forEach(function (filter) {
          if (_name === filter) {
            _filterState[_name] = _value;
          }
        }) // Boolean filter types
        ;
        ["acquireable", "at_auction", "for_sale", "inquireable_only", "offerable"].forEach(function (filter) {
          if (_name === filter) {
            _filterState[_name] = Boolean(_value);
          }
        });
        delete state.reset;
        return _objectSpread({}, state, _filterState);
      }

    /**
     * Unsetting a filter
     */

    case "UNSET":
      {
        var _name2 = action.payload.name;
        var _filterState2 = {};

        if (_name2 === "attribution_class") {
          _filterState2 = {
            attribution_class: []
          };
        }

        if (_name2 === "major_periods") {
          _filterState2 = {
            major_periods: []
          };
        }

        if (_name2 === "medium") {
          _filterState2 = {
            medium: "*"
          };
        }

        if (_name2 === "page") {
          _filterState2 = {
            page: 1
          };
        }

        ;
        ["acquireable", "at_auction", "color", "for_sale", "inquireable_only", "offerable", "partner_id"].forEach(function (filter) {
          if (_name2 === filter) {
            _filterState2[_name2] = null;
          }
        });
        return _objectSpread({}, state, _filterState2);
      }

    /**
     * Resetting filters back to their initial state
     */

    case "RESET":
      {
        return _objectSpread({}, initialArtworkFilterState, {
          reset: true
        });
      }

    default:
      return state;
  }
};
/**
 * Hook to conveniently access fiter state context
 */


var useArtworkFilterContext = function useArtworkFilterContext() {
  var artworkFilterContext = (0, _react.useContext)(ArtworkFilterContext);
  return artworkFilterContext;
};

exports.useArtworkFilterContext = useArtworkFilterContext;
//# sourceMappingURL=ArtworkFilterContext.js.map