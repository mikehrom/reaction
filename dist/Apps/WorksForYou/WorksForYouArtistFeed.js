"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorksForYouArtistFeedPaginationContainer = exports.WorksForYouArtistFeed = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _ArtworkGrid = _interopRequireDefault(require("../../Components/ArtworkGrid"));

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get = require("../../Utils/get");

var _reactRelay = require("react-relay");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PageSize = 10;

var WorksForYouArtistFeed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WorksForYouArtistFeed, _React$Component);

  function WorksForYouArtistFeed() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WorksForYouArtistFeed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WorksForYouArtistFeed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false
    });

    return _this;
  }

  _createClass(WorksForYouArtistFeed, [{
    key: "loadMoreArtworks",
    value: function loadMoreArtworks() {
      var _this2 = this;

      var hasMore = this.props.viewer.artist.artworks_connection.pageInfo.hasNextPage;

      if (hasMore && !this.state.loading) {
        this.setState({
          loading: true
        }, function () {
          _this2.props.relay.loadMore(PageSize, function (error) {
            if (error) {
              console.error(error);
            }

            _this2.setState({
              loading: false
            });
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          forSale = _this$props.forSale,
          artist = _this$props.viewer.artist;
      var avatarImageUrl = (0, _get.get)(artist, function (p) {
        return p.image.resized.url;
      });
      var meta = (forSale ? (0, _get.get)(artist, function (p) {
        return p.counts.for_sale_artworks;
      }, "").toLocaleString() : (0, _get.get)(artist, function (p) {
        return p.counts.artworks;
      }, "").toLocaleString()) + " Works";
      return React.createElement(React.Fragment, null, React.createElement(_palette.EntityHeader, {
        name: artist.name,
        meta: meta,
        imageUrl: avatarImageUrl,
        href: artist.href
      }), React.createElement(_palette.Spacer, {
        mb: 3
      }), React.createElement(_ArtworkGrid.default, {
        artworks: artist.artworks_connection,
        columnCount: 3,
        itemMargin: 40,
        onLoadMore: function onLoadMore() {
          return _this3.loadMoreArtworks();
        },
        user: this.props.user
      }), this.state.loading && React.createElement(SpinnerContainer, null, React.createElement(_palette.Spinner, null)));
    }
  }]);

  return WorksForYouArtistFeed;
}(React.Component);

exports.WorksForYouArtistFeed = WorksForYouArtistFeed;
var WorksForYouArtistFeedPaginationContainer = (0, _reactRelay.createPaginationContainer)(WorksForYouArtistFeed, {
  viewer: function viewer() {
    var node = require("../../__generated__/WorksForYouArtistFeed_viewer.graphql");

    if (node.hash && node.hash !== "5cbe0566f4e5fc5e85dfa1d0b436f337") {
      console.error("The definition of 'WorksForYouArtistFeed_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/WorksForYouArtistFeed_viewer.graphql");
  }
}, {
  direction: "forward",
  getConnectionFromProps: function getConnectionFromProps(props) {
    return props.viewer.artist.artworks_connection;
  },
  getFragmentVariables: function getFragmentVariables(prevVars, totalCount) {
    return _objectSpread({}, prevVars, {
      count: totalCount
    });
  },
  getVariables: function getVariables(_props, _ref, fragmentVariables) {
    var count = _ref.count,
        cursor = _ref.cursor;
    return _objectSpread({}, fragmentVariables, {
      count: count,
      cursor: cursor
    });
  },
  query: function query() {
    var node = require("../../__generated__/WorksForYouArtistFeedPaginationQuery.graphql");

    if (node.hash && node.hash !== "87c21e6654c568c333a9929f5ce358a4") {
      console.error("The definition of 'WorksForYouArtistFeedPaginationQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/WorksForYouArtistFeedPaginationQuery.graphql");
  }
});
exports.WorksForYouArtistFeedPaginationContainer = WorksForYouArtistFeedPaginationContainer;

var SpinnerContainer = _styledComponents.default.div.withConfig({
  displayName: "WorksForYouArtistFeed__SpinnerContainer",
  componentId: "dreojw-0"
})(["width:100%;height:100px;position:relative;"]);
//# sourceMappingURL=WorksForYouArtistFeed.js.map