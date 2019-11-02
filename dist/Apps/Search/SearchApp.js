"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchAppFragmentContainer = exports.SearchApp = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.regexp.search");

var _palette = require("@artsy/palette");

var _AppContainer = require("../Components/AppContainer");

var _HorizontalPadding = require("../Components/HorizontalPadding");

var _NavigationTabs = require("./Components/NavigationTabs");

var _SearchMeta = require("./Components/SearchMeta");

var _Analytics = require("../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../Artsy/Analytics/Schema"));

var _v = require("../../Components/v2");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../Utils/get");

var _ZeroState = require("./Components/ZeroState");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SearchApp = (_dec = (0, _Analytics.track)({
  context_page: Schema.PageName.SearchPage
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchApp, _React$Component);

  function SearchApp() {
    _classCallCheck(this, SearchApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(SearchApp).apply(this, arguments));
  }

  _createClass(SearchApp, [{
    key: "renderResults",
    value: function renderResults(count, artworkCount) {
      var _this$props = this.props,
          viewer = _this$props.viewer,
          location = _this$props.location;
      var search = viewer.search;
      var term = location.query.term;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
        mb: 4
      }), _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_palette.Serif, {
        size: "5"
      }, count.toLocaleString(), " Result", count > 1 ? "s" : "", " for \"", term, "\""), _react.default.createElement(_palette.Spacer, {
        mb: 4
      }), _react.default.createElement("span", {
        id: "jumpto--searchResultTabs"
      }), _react.default.createElement(_NavigationTabs.NavigationTabsFragmentContainer, {
        artworkCount: artworkCount,
        term: term,
        searchableConnection: search
      }), _react.default.createElement(_palette.Box, {
        minHeight: "30vh"
      }, this.props.children))), this.renderFooter());
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_v.RecentlyViewedQueryRenderer, null))), _react.default.createElement(_palette.Separator, {
        mt: 6,
        mb: 3
      }), _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_v.Footer, null))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          viewer = _this$props2.viewer,
          location = _this$props2.location;
      var search = viewer.search,
          filter_artworks = viewer.filter_artworks;
      var query = location.query;
      var term = query.term;
      var aggregations = search.aggregations;
      var artworkCount = (0, _get.get)(filter_artworks, function (f) {
        return f.counts.total;
      }, 0);
      var countWithoutArtworks = 0;
      var typeAggregation = aggregations.find(function (agg) {
        return agg.slice === "TYPE";
      }).counts;
      typeAggregation.forEach(function (_ref) {
        var count = _ref.count,
            name = _ref.name;

        if (name !== "artwork") {
          countWithoutArtworks += count;
        }
      });
      var hasResults = !!(countWithoutArtworks || artworkCount);
      return _react.default.createElement(_AppContainer.AppContainer, null, _react.default.createElement(_HorizontalPadding.HorizontalPadding, null, _react.default.createElement(_SearchMeta.SearchMeta, {
        term: term
      }), hasResults ? this.renderResults(countWithoutArtworks + artworkCount, artworkCount) : _react.default.createElement(_palette.Box, {
        mt: 3
      }, _react.default.createElement(_ZeroState.ZeroState, {
        term: term
      }), this.renderFooter()), _react.default.createElement(_palette.Spacer, {
        mb: 3
      })));
    }
  }]);

  return SearchApp;
}(_react.default.Component)) || _class);
exports.SearchApp = SearchApp;
var SearchAppFragmentContainer = (0, _reactRelay.createFragmentContainer)(SearchApp, {
  viewer: function viewer() {
    var node = require("../../__generated__/SearchApp_viewer.graphql");

    if (node.hash && node.hash !== "671536b76e6625d241658d8cf32d9d68") {
      console.error("The definition of 'SearchApp_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/SearchApp_viewer.graphql");
  }
});
exports.SearchAppFragmentContainer = SearchAppFragmentContainer;
//# sourceMappingURL=SearchApp.js.map