"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkRelatedArtistsPaginationContainer = exports.ArtworkRelatedArtists = void 0;

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

var _palette = require("@artsy/palette");

var _OtherWorks = require("./OtherWorks");

var _Artsy = require("../../../Artsy");

var _Analytics = require("../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../Artsy/Analytics/Schema"));

var _v = require("../../../Components/v2");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _logger = _interopRequireDefault(require("../../../Utils/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var logger = (0, _logger.default)("ArtworkRelatedArtists.tsx");
var PAGE_SIZE = 4;
var ArtworkRelatedArtists = (0, _Analytics.track)()(function (props) {
  var _useTracking = (0, _Analytics.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  var _useSystemContext = (0, _Artsy.useSystemContext)(),
      mediator = _useSystemContext.mediator,
      user = _useSystemContext.user;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      fetchingNextPage = _useState2[0],
      setFetchingNextPage = _useState2[1];

  var artist = props.artwork.artist,
      relay = props.relay;

  if ((0, _OtherWorks.hideGrid)(artist.related.artists)) {
    return null;
  }

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

  return _react.default.createElement(_palette.Box, {
    mt: 6
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    alignItems: "center"
  }, _react.default.createElement(_palette.Serif, {
    size: ["5t", "8"],
    color: "black100",
    mb: 2,
    textAlign: "center"
  }, "Related artists")), _react.default.createElement(_palette.Flex, {
    flexWrap: "wrap",
    mr: -2,
    width: "100%"
  }, artist.related.artists.edges.map(function (_ref, index) {
    var node = _ref.node;
    return _react.default.createElement(_palette.Box, {
      pr: 2,
      mb: [1, 4],
      width: ["100%", "25%"],
      key: index
    }, _react.default.createElement(_v.ArtistCardFragmentContainer, {
      lazyLoad: true,
      artist: node,
      mediator: mediator,
      user: user,
      onClick: function onClick() {
        trackEvent({
          context_module: Schema.ContextModule.RelatedArtists,
          type: Schema.Type.ArtistCard,
          action_type: Schema.ActionType.Click
        });
      }
    }));
  })), relay.hasMore() && _react.default.createElement(ShowMoreButton, {
    onClick: fetchData,
    loading: fetchingNextPage
  }));
});
exports.ArtworkRelatedArtists = ArtworkRelatedArtists;

var ShowMoreButton = function ShowMoreButton(_ref2) {
  var onClick = _ref2.onClick,
      loading = _ref2.loading;
  return _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    alignItems: "center"
  }, _react.default.createElement(_palette.Button, {
    variant: "secondaryOutline",
    mb: 3,
    onClick: onClick,
    loading: loading
  }, "Show more"));
};

var ArtworkRelatedArtistsPaginationContainer = (0, _reactRelay.createPaginationContainer)(ArtworkRelatedArtists, {
  artwork: function artwork() {
    var node = require("../../../__generated__/ArtworkRelatedArtists_artwork.graphql");

    if (node.hash && node.hash !== "5ec9d018d7422592fa838f8cd78ab245") {
      console.error("The definition of 'ArtworkRelatedArtists_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/ArtworkRelatedArtists_artwork.graphql");
  }
}, {
  direction: "forward",
  getConnectionFromProps: function getConnectionFromProps(props) {
    return props.artwork.artist.related.artists;
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
      artworkID: props.artwork.id
    });
  },
  query: function query() {
    var node = require("../../../__generated__/ArtworkRelatedArtistsPaginationQuery.graphql");

    if (node.hash && node.hash !== "13d2fdc8bc0e1a6015918727e1fa807f") {
      console.error("The definition of 'ArtworkRelatedArtistsPaginationQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/ArtworkRelatedArtistsPaginationQuery.graphql");
  }
});
exports.ArtworkRelatedArtistsPaginationContainer = ArtworkRelatedArtistsPaginationContainer;
//# sourceMappingURL=ArtworkRelatedArtists.js.map