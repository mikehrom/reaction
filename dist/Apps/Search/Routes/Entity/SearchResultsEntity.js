"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchResultsEntityRouteFragmentContainer = exports.SearchResultsEntityRoute = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

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

var SearchResultsEntityRoute =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchResultsEntityRoute, _React$Component);

  function SearchResultsEntityRoute(props) {
    var _this;

    _classCallCheck(this, SearchResultsEntityRoute);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchResultsEntityRoute).call(this, props));

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

        var _this$props = _this.props,
            location = _this$props.location,
            tab = _this$props.tab;

        var _get = (0, _get5.get)(location, function (l) {
          return l.query;
        }),
            term = _get.term;

        var urlParams = _qs.default.stringify({
          term: term,
          page: page
        }); // TODO: Look into using router push w/ query params.
        // this.props.router.replace(`/search/${tab}?${urlParams}`)


        window.history.pushState({}, null, "/search/".concat(tab, "?").concat(urlParams));
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

  _createClass(SearchResultsEntityRoute, [{
    key: "renderItems",
    value: function renderItems() {
      var _this$props2 = this.props,
          viewer = _this$props2.viewer,
          location = _this$props2.location;

      var _get3 = (0, _get5.get)(location, function (l) {
        return l.query;
      }),
          term = _get3.term;

      var searchConnection = viewer.search;
      var items = (0, _get5.get)(viewer, function (v) {
        return v.search.edges;
      }, []).map(function (e) {
        return e.node;
      });
      return _react.default.createElement(_react.default.Fragment, null, items.map(function (searchableItem, index) {
        return _react.default.createElement(_palette.Box, {
          key: index
        }, _react.default.createElement(_GenericSearchResultItem.GenericSearchResultItem, {
          name: searchableItem.displayLabel,
          description: searchableItem.description,
          href: searchableItem.href,
          imageUrl: searchableItem.imageUrl,
          entityType: searchableItem.displayType,
          index: index,
          term: term,
          id: searchableItem._id
        }), index < items.length - 1 && _react.default.createElement(_palette.Separator, null));
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
      var _this$props3 = this.props,
          viewer = _this$props3.viewer,
          location = _this$props3.location;

      var _get4 = (0, _get5.get)(location, function (l) {
        return l.query;
      }),
          term = _get4.term;

      var items = (0, _get5.get)(viewer, function (v) {
        return v.search.edges;
      }, []).map(function (e) {
        return e.node;
      });
      return _react.default.createElement(_LoadingArea.LoadingArea, {
        isLoading: this.state.isLoading
      }, items.length === 0 ? _react.default.createElement(_palette.Box, {
        mt: 3
      }, _react.default.createElement(_ZeroState.ZeroState, {
        term: term
      })) : this.renderItems());
    }
  }]);

  return SearchResultsEntityRoute;
}(_react.default.Component);

exports.SearchResultsEntityRoute = SearchResultsEntityRoute;
var SearchResultsEntityRouteFragmentContainer = (0, _reactRelay.createRefetchContainer)(SearchResultsEntityRoute, {
  viewer: function viewer() {
    var node = require("../../../../__generated__/SearchResultsEntity_viewer.graphql");

    if (node.hash && node.hash !== "cccbb874f746a8593c0610c2b3debd0e") {
      console.error("The definition of 'SearchResultsEntity_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/SearchResultsEntity_viewer.graphql");
  }
}, function () {
  var node = require("../../../../__generated__/SearchResultsEntityQuery.graphql");

  if (node.hash && node.hash !== "6db171bc8aa2ccfdee6ad207f60ab6be") {
    console.error("The definition of 'SearchResultsEntityQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("../../../../__generated__/SearchResultsEntityQuery.graphql");
});
exports.SearchResultsEntityRouteFragmentContainer = SearchResultsEntityRouteFragmentContainer;
//# sourceMappingURL=SearchResultsEntity.js.map