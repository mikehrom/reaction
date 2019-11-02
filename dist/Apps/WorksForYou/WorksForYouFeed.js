"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorksForYouFeedPaginationContainer = exports.WorksForYouFeed = void 0;

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

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _ArtworkGrid = _interopRequireDefault(require("../../Components/ArtworkGrid"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

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
var RefreshInterval = 150; // ms

var WorksForYouFeed =
/*#__PURE__*/
function (_Component) {
  _inherits(WorksForYouFeed, _Component);

  function WorksForYouFeed() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, WorksForYouFeed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WorksForYouFeed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      interval: null
    });

    return _this;
  }

  _createClass(WorksForYouFeed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var interval = setInterval(function () {
        _this2.maybeLoadMore();
      }, RefreshInterval);
      this.setState({
        interval: interval
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.interval) {
        clearInterval(this.state.interval);
      }
    }
  }, {
    key: "maybeLoadMore",
    value: function maybeLoadMore() {
      var threshold = window.innerHeight + window.scrollY;

      var el = _reactDom.default.findDOMNode(this).parentElement;

      if (threshold >= el.clientHeight + el.scrollTop) {
        this.loadMoreArtworks();
      }
    }
  }, {
    key: "loadMoreArtworks",
    value: function loadMoreArtworks() {
      var _this3 = this;

      var hasMore = this.props.viewer.me.followsAndSaves.notifications.pageInfo.hasNextPage;

      if (!hasMore && this.state.interval) {
        clearInterval(this.state.interval);
      }

      if (hasMore && !this.state.loading) {
        this.setState({
          loading: true
        }, function () {
          _this3.props.relay.loadMore(PageSize, function (error) {
            if (error) {
              console.error(error);
            }

            _this3.setState({
              loading: false
            });
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react.default.createElement(_react.default.Fragment, null, this.props.viewer.me.followsAndSaves.notifications.edges.map(function (_ref, index) {
        var node = _ref.node;
        var avatarImageUrl = (0, _get.get)(node, function (p) {
          return p.image.resized.url;
        });
        var meta = "".concat(node.summary, ", ").concat(node.published_at);
        return _react.default.createElement(_palette.Box, {
          key: index
        }, _react.default.createElement(_palette.EntityHeader, {
          name: node.artists,
          meta: meta,
          imageUrl: avatarImageUrl,
          href: node.href
        }), _react.default.createElement(_palette.Spacer, {
          mb: 3
        }), _react.default.createElement(_ArtworkGrid.default, {
          artworks: node.artworksConnection,
          columnCount: 3,
          preloadImageCount: 9,
          itemMargin: 40,
          user: _this4.props.user
        }), _react.default.createElement(_palette.Box, {
          mt: 4,
          mb: 3
        }, _react.default.createElement(_palette.Separator, null)));
      }), _react.default.createElement(SpinnerContainer, null, this.state.loading ? _react.default.createElement(_palette.Spinner, null) : ""));
    }
  }]);

  return WorksForYouFeed;
}(_react.Component);

exports.WorksForYouFeed = WorksForYouFeed;
var WorksForYouFeedPaginationContainer = (0, _reactRelay.createPaginationContainer)(WorksForYouFeed, {
  viewer: function viewer() {
    var node = require("../../__generated__/WorksForYouFeed_viewer.graphql");

    if (node.hash && node.hash !== "4a5f6fe1600a373f7271a88baf13d9cd") {
      console.error("The definition of 'WorksForYouFeed_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/WorksForYouFeed_viewer.graphql");
  }
}, {
  direction: "forward",
  getConnectionFromProps: function getConnectionFromProps(props) {
    return props.viewer.me.followsAndSaves.notifications;
  },
  getFragmentVariables: function getFragmentVariables(prevVars, totalCount) {
    return _objectSpread({}, prevVars, {
      count: totalCount
    });
  },
  getVariables: function getVariables(_props, _ref2, fragmentVariables) {
    var count = _ref2.count,
        cursor = _ref2.cursor;
    return _objectSpread({}, fragmentVariables, {
      count: count,
      cursor: cursor
    });
  },
  query: function query() {
    var node = require("../../__generated__/WorksForYouFeedPaginationQuery.graphql");

    if (node.hash && node.hash !== "149b7694e3ce81d09a3b328ae2ae1b4d") {
      console.error("The definition of 'WorksForYouFeedPaginationQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/WorksForYouFeedPaginationQuery.graphql");
  }
});
exports.WorksForYouFeedPaginationContainer = WorksForYouFeedPaginationContainer;

var SpinnerContainer = _styledComponents.default.div.withConfig({
  displayName: "WorksForYouFeed__SpinnerContainer",
  componentId: "sc-6255px-0"
})(["width:100%;height:100px;position:relative;"]);
//# sourceMappingURL=WorksForYouFeed.js.map