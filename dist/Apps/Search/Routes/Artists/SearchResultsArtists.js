"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchResultsArtistsRouteFragmentContainer = exports.SearchResultsArtistsRoute = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.regexp.search");

var _palette = require("@artsy/palette");

var _GenericSearchResultItem = require("../../Components/GenericSearchResultItem");

var _ZeroState = require("../../Components/ZeroState");

var _v = require("../../../../Components/v2");

var _LoadingArea = require("../../../../Components/v2/LoadingArea");

var _qs = _interopRequireDefault(require("qs"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _get5 = require("../../../../Utils/get");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PAGE_SIZE = 10;

var SearchResultsArtistsRoute =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchResultsArtistsRoute, _React$Component);

  function SearchResultsArtistsRoute(props) {
    var _this;

    _classCallCheck(this, SearchResultsArtistsRoute);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchResultsArtistsRoute).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: false,
      page: null
    });

    _defineProperty(_assertThisInitialized(_this), "toggleLoading", function (isLoading) {
      _this.setState({
        isLoading: isLoading
      }, function () {
        return window.scrollTo(0, 0);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "loadNext", function () {
      var viewer = _this.props.viewer;
      var searchConnection = viewer.search;
      var _searchConnection$pag = searchConnection.pageInfo,
          hasNextPage = _searchConnection$pag.hasNextPage,
          endCursor = _searchConnection$pag.endCursor;

      if (hasNextPage) {
        _this.loadAfter(endCursor, _this.state.page + 1);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "loadAfter", function (cursor, page) {
      _this.toggleLoading(true);

      _this.props.relay.refetch({
        first: PAGE_SIZE,
        after: cursor,
        before: null,
        last: null,
        page: null
      }, null, function (error) {
        _this.toggleLoading(false);

        _this.setState({
          page: page
        });

        if (error) {
          console.error(error);
        }

        var location = _this.props.location;

        var _get = (0, _get5.get)(location, function (l) {
          return l.query;
        }),
            term = _get.term;

        var urlParams = _qs.default.stringify({
          term: term,
          page: page
        }); // TODO: Look into using router push w/ query params.
        // this.props.router.replace(`/search/artists?${urlParams}`)


        window.history.pushState({}, null, "/search/artists?".concat(urlParams));
      });
    });

    var _location = _this.props.location;

    var _get2 = (0, _get5.get)(_location, function (l) {
      return l.query;
    }),
        _page = _get2.page;

    _this.state = {
      isLoading: false,
      page: _page && parseInt(_page, 10) || 1
    };
    return _this;
  }

  _createClass(SearchResultsArtistsRoute, [{
    key: "renderArtists",
    value: function renderArtists() {
      var _this$props = this.props,
          viewer = _this$props.viewer,
          location = _this$props.location;

      var _get3 = (0, _get5.get)(location, function (l) {
        return l.query;
      }),
          term = _get3.term;

      var searchConnection = viewer.search;
      var artists = (0, _get5.get)(viewer, function (v) {
        return v.search.edges;
      }, []).map(function (e) {
        return e.node;
      });
      return _react.default.createElement(_react.default.Fragment, null, artists.map(function (artist, index) {
        return _react.default.createElement(_palette.Box, {
          key: index
        }, _react.default.createElement(_GenericSearchResultItem.GenericSearchResultItem, {
          name: artist.name,
          description: artist.bio,
          imageUrl: artist.imageUrl,
          entityType: "Artist",
          href: artist.href,
          index: index,
          term: term,
          id: artist._id
        }), index < artists.length - 1 && _react.default.createElement(_palette.Separator, null));
      }), _react.default.createElement(_v.PaginationFragmentContainer, {
        pageCursors: searchConnection.pageCursors,
        onClick: this.loadAfter,
        onNext: this.loadNext,
        scrollTo: "#jumpto--searchResultTabs",
        hasNextPage: searchConnection.pageInfo.hasNextPage
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          viewer = _this$props2.viewer,
          location = _this$props2.location;

      var _get4 = (0, _get5.get)(location, function (l) {
        return l.query;
      }),
          term = _get4.term;

      var artists = (0, _get5.get)(viewer, function (v) {
        return v.search.edges;
      }, []).map(function (e) {
        return e.node;
      });
      return _react.default.createElement(_LoadingArea.LoadingArea, {
        isLoading: this.state.isLoading
      }, artists.length === 0 ? _react.default.createElement(_palette.Box, {
        mt: 3
      }, _react.default.createElement(_ZeroState.ZeroState, {
        term: term
      })) : this.renderArtists());
    }
  }]);

  return SearchResultsArtistsRoute;
}(_react.default.Component);

exports.SearchResultsArtistsRoute = SearchResultsArtistsRoute;
var SearchResultsArtistsRouteFragmentContainer = (0, _reactRelay.createRefetchContainer)(SearchResultsArtistsRoute, {
  viewer: function viewer() {
    var node = require("../../../../__generated__/SearchResultsArtists_viewer.graphql");

    if (node.hash && node.hash !== "93e61616ae311ee14a7c08447f3189f1") {
      console.error("The definition of 'SearchResultsArtists_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/SearchResultsArtists_viewer.graphql");
  }
}, function () {
  var node = require("../../../../__generated__/SearchResultsArtistsQuery.graphql");

  if (node.hash && node.hash !== "02345ec0391a8b94f74dde5fb12c4441") {
    console.error("The definition of 'SearchResultsArtistsQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("../../../../__generated__/SearchResultsArtistsQuery.graphql");
});
exports.SearchResultsArtistsRouteFragmentContainer = SearchResultsArtistsRouteFragmentContainer;
//# sourceMappingURL=SearchResultsArtists.js.map