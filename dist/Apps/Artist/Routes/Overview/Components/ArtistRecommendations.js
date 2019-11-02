"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistRecommendationsQueryRenderer = exports.ArtistRecommendationsPaginationContainer = exports.ArtistRecommendations = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../../../Artsy");

var _renderWithLoadProgress = require("../../../../../Artsy/Relay/renderWithLoadProgress");

var _SystemQueryRenderer = require("../../../../../Artsy/Relay/SystemQueryRenderer");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../../../../Utils/get");

var _logger = _interopRequireDefault(require("../../../../../Utils/logger"));

var _RecommendedArtist = require("./RecommendedArtist");

var _graphql;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var logger = (0, _logger.default)("ArtistRecommendations.tsx");
var PAGE_SIZE = 3;

var ArtistRecommendations = function ArtistRecommendations(_ref) {
  var artist = _ref.artist,
      relay = _ref.relay;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      fetchingNextPage = _useState2[0],
      setFetchingNextPage = _useState2[1];

  var name = artist.name;
  var relatedArtists = (0, _get.get)(artist, function (a) {
    return a.related.artists.edges;
  }, []).map(function (edge) {
    return _react.default.createElement(_RecommendedArtist.RecommendedArtistFragmentContainer, {
      artist: edge.node,
      key: edge.node.id
    });
  });

  var fetchData = function fetchData() {
    if (!relay.hasMore() || relay.isLoading()) {
      return;
    }

    setFetchingNextPage(true);
    relay.loadMore(PAGE_SIZE, function (error) {
      if (error) {
        logger.error(error);
      }

      setFetchingNextPage(false);
    });
  };

  return _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Serif, {
    size: "8",
    color: "black100"
  }, "Related to ", name), relatedArtists, relay.hasMore() && _react.default.createElement(ShowMoreButton, {
    onClick: fetchData,
    loading: fetchingNextPage
  }));
};

exports.ArtistRecommendations = ArtistRecommendations;

var ShowMoreButton = function ShowMoreButton(_ref2) {
  var onClick = _ref2.onClick,
      loading = _ref2.loading;
  return _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    alignItems: "center"
  }, _react.default.createElement(_palette.Button, {
    my: 4,
    variant: "secondaryOutline",
    onClick: onClick,
    loading: loading
  }, "Show More"));
};

var ArtistRecommendationsPaginationContainer = (0, _reactRelay.createPaginationContainer)(ArtistRecommendations, {
  artist: function artist() {
    var node = require("../../../../../__generated__/ArtistRecommendations_artist.graphql");

    if (node.hash && node.hash !== "9e7938b6ba634599de75bdc87be9c6eb") {
      console.error("The definition of 'ArtistRecommendations_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../../__generated__/ArtistRecommendations_artist.graphql");
  }
}, {
  direction: "forward",
  getConnectionFromProps: function getConnectionFromProps(props) {
    return props.artist.related.artists;
  },
  getFragmentVariables: function getFragmentVariables(prevVars, count) {
    return _objectSpread({}, prevVars, {
      count: count
    });
  },
  getVariables: function getVariables(props, _ref3, fragmentVariables) {
    var count = _ref3.count,
        cursor = _ref3.cursor;
    return _objectSpread({}, fragmentVariables, {
      count: count,
      cursor: cursor,
      artistID: props.artist.id
    });
  },
  query: function query() {
    var node = require("../../../../../__generated__/ArtistRecommendationsPaginationQuery.graphql");

    if (node.hash && node.hash !== "81b251cfdc19341bfd53bfcc653ebdc9") {
      console.error("The definition of 'ArtistRecommendationsPaginationQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../../__generated__/ArtistRecommendationsPaginationQuery.graphql");
  }
});
exports.ArtistRecommendationsPaginationContainer = ArtistRecommendationsPaginationContainer;

var ArtistRecommendationsQueryRenderer = function ArtistRecommendationsQueryRenderer(_ref4) {
  var artistID = _ref4.artistID;

  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      relayEnvironment = _useContext.relayEnvironment;

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../../../../__generated__/ArtistRecommendationsRendererQuery.graphql");

      if (node.hash && node.hash !== "f21a276f2160e81488cc25c217bd36b3") {
        console.error("The definition of 'ArtistRecommendationsRendererQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../../../../__generated__/ArtistRecommendationsRendererQuery.graphql");
    }),
    variables: {
      artistID: artistID
    },
    render: (0, _renderWithLoadProgress.renderWithLoadProgress)(ArtistRecommendationsPaginationContainer)
  });
};

exports.ArtistRecommendationsQueryRenderer = ArtistRecommendationsQueryRenderer;
//# sourceMappingURL=ArtistRecommendations.js.map