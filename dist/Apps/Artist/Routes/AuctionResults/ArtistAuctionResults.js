"use strict";

require("core-js/modules/es6.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistAuctionResultsRefetchContainer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.sort");

var _palette = require("@artsy/palette");

var _v = require("../../../../Components/v2");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _unstated = require("unstated");

var _ArtistAuctionDetailsModal = require("./ArtistAuctionDetailsModal");

var _ArtistAuctionResultItem = require("./ArtistAuctionResultItem");

var _state = require("./state");

var _TableColumns = require("./TableColumns");

var _TableSidebar = require("./TableSidebar");

var _LoadingArea = require("../../../../Components/v2/LoadingArea");

var _logger = _interopRequireDefault(require("../../../../Utils/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var logger = (0, _logger.default)("ArtistAuctionResults.tsx");
var PAGE_SIZE = 10;

var AuctionResultsContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(AuctionResultsContainer, _Component);

  function AuctionResultsContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AuctionResultsContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AuctionResultsContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: false
    });

    _defineProperty(_assertThisInitialized(_this), "loadNext", function () {
      var _this$props$artist$au = _this.props.artist.auctionResults.pageInfo,
          hasNextPage = _this$props$artist$au.hasNextPage,
          endCursor = _this$props$artist$au.endCursor;

      if (hasNextPage) {
        _this.loadAfter(endCursor);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resort", function () {
      _this.props.relay.refetch({
        first: PAGE_SIZE,
        after: null,
        artistID: _this.props.artist.id,
        before: null,
        last: null,
        sort: _this.props.sort
      }, null, function (error) {
        if (error) {
          logger.error(error);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "loadAfter", function (cursor) {
      _this.toggleLoading(true);

      _this.props.relay.refetch({
        first: PAGE_SIZE,
        after: cursor,
        artistID: _this.props.artist.id,
        before: null,
        last: null,
        sort: _this.props.sort
      }, null, function (error) {
        _this.toggleLoading(false);

        if (error) {
          console.error(error);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleLoading", function (isLoading) {
      _this.setState({
        isLoading: isLoading
      });
    });

    return _this;
  }

  _createClass(AuctionResultsContainer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.sort !== this.props.sort) {
        this.resort();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var auctionResultsLength = this.props.artist.auctionResults.edges.length;
      var totalCount = this.props.artist.auctionResults.totalCount;
      return _react.default.createElement(_unstated.Subscribe, {
        to: [_state.AuctionResultsState]
      }, function (_ref) {
        var state = _ref.state;
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, {
          sm: 2,
          pr: [0, 2]
        }, _react.default.createElement(_TableSidebar.TableSidebar, {
          count: totalCount
        })), _react.default.createElement(_palette.Col, {
          sm: 10
        }, _react.default.createElement(_TableColumns.TableColumns, null), _react.default.createElement(_palette.Box, {
          pt: 0.5
        }, _react.default.createElement(_palette.Separator, null)), _react.default.createElement(_ArtistAuctionDetailsModal.ArtistAuctionDetailsModal, {
          auctionResult: state.selectedAuction
        }), _react.default.createElement(_palette.Spacer, {
          mt: 3
        }), _react.default.createElement(_LoadingArea.LoadingArea, {
          isLoading: _this2.state.isLoading
        }, _this2.props.artist.auctionResults.edges.map(function (_ref2, index) {
          var node = _ref2.node;
          return _react.default.createElement(_react.default.Fragment, {
            key: index
          }, _react.default.createElement(_ArtistAuctionResultItem.AuctionResultItemFragmentContainer, {
            auctionResult: node,
            lastChild: index === auctionResultsLength - 1
          }));
        })))), _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_palette.Box, null, _react.default.createElement(_v.PaginationFragmentContainer, {
          hasNextPage: _this2.props.artist.auctionResults.pageInfo.hasNextPage,
          pageCursors: _this2.props.artist.auctionResults.pageCursors,
          onClick: _this2.loadAfter,
          onNext: _this2.loadNext,
          scrollTo: "#jumpto-ArtistHeader"
        })))));
      });
    }
  }]);

  return AuctionResultsContainer;
}(_react.Component);

var ArtistAuctionResultsRefetchContainer = (0, _reactRelay.createRefetchContainer)(function (props) {
  return _react.default.createElement(_unstated.Subscribe, {
    to: [_state.AuctionResultsState]
  }, function (_ref3) {
    var state = _ref3.state;
    return _react.default.createElement(AuctionResultsContainer, _extends({}, props, {
      sort: state.sort
    }));
  });
}, {
  artist: function artist() {
    var node = require("../../../../__generated__/ArtistAuctionResults_artist.graphql");

    if (node.hash && node.hash !== "65960d8121e20d8f76659179177c9be8") {
      console.error("The definition of 'ArtistAuctionResults_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtistAuctionResults_artist.graphql");
  }
}, function () {
  var node = require("../../../../__generated__/ArtistAuctionResultsQuery.graphql");

  if (node.hash && node.hash !== "f1c0dd3d85755c0a3c1e31abe5a5b4ec") {
    console.error("The definition of 'ArtistAuctionResultsQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("../../../../__generated__/ArtistAuctionResultsQuery.graphql");
});
exports.ArtistAuctionResultsRefetchContainer = ArtistAuctionResultsRefetchContainer;
//# sourceMappingURL=ArtistAuctionResults.js.map