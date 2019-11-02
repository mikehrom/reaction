"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistShowsRefetchContainer = exports.PAGE_SIZE = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.sort");

var _palette = require("@artsy/palette");

var _v = require("../../../../Components/v2");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../../../Utils/get");

var _Responsive = require("../../../../Utils/Responsive");

var _ArtistShowBlockItem = require("./ArtistShowBlockItem");

var _ArtistShowListItem = require("./ArtistShowListItem");

var _LoadingArea = require("../../../../Components/v2/LoadingArea");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var PAGE_SIZE = 4;
exports.PAGE_SIZE = PAGE_SIZE;

var ArtistShows =
/*#__PURE__*/
function (_Component) {
  _inherits(ArtistShows, _Component);

  function ArtistShows() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtistShows);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtistShows)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: false
    });

    _defineProperty(_assertThisInitialized(_this), "loadNext", function () {
      var _this$props$artist$sh = _this.props.artist.showsConnection.pageInfo,
          hasNextPage = _this$props$artist$sh.hasNextPage,
          endCursor = _this$props$artist$sh.endCursor;

      if (hasNextPage) {
        _this.loadAfter(endCursor);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "loadAfter", function (cursor) {
      _this.toggleLoading(true);

      _this.props.relay.refetch({
        first: PAGE_SIZE,
        after: cursor,
        artistID: _this.props.artist.id,
        before: null,
        last: null,
        status: _this.props.status,
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

  _createClass(ArtistShows, [{
    key: "render",
    value: function render() {
      if (!this.props.artist.showsConnection || !this.props.artist.showsConnection.edges.length) {
        return null;
      }

      return _react.default.createElement(_palette.Box, {
        my: this.props.my
      }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_palette.Sans, {
        size: "3",
        weight: "medium",
        mb: -0.5
      }, this.props.heading), _react.default.createElement(_palette.Spacer, {
        mb: 2
      }), _react.default.createElement(_LoadingArea.LoadingArea, {
        isLoading: this.state.isLoading
      }, this.props.status === "running" ? _react.default.createElement(_palette.Flex, {
        flexDirection: ["column", "row"],
        flexWrap: "wrap"
      }, this.props.artist.showsConnection.edges.map(function (_ref, index) {
        var node = _ref.node;
        var imageUrl = (0, _get.get)(node, function (n) {
          return n.cover_image.cropped.url;
        });
        return _react.default.createElement(_react.default.Fragment, {
          key: index
        }, _react.default.createElement(_ArtistShowBlockItem.ArtistShowBlockItem, {
          blockWidth: ["100%", "50%"],
          imageUrl: imageUrl,
          partner: node.partner && node.partner.name,
          name: node.name,
          exhibitionInfo: node.exhibition_period,
          pr: [0, 2],
          pb: [0, 2],
          href: node.href,
          city: node.city
        }), _react.default.createElement(_Responsive.Media, {
          at: "xs"
        }, _react.default.createElement(_palette.Spacer, {
          mb: 3
        })));
      })) : _react.default.createElement(_palette.Box, null, this.props.artist.showsConnection.edges.map(function (_ref2, index) {
        var node = _ref2.node;
        return _react.default.createElement(_react.default.Fragment, {
          key: index
        }, _react.default.createElement(_ArtistShowListItem.ArtistShowListItem, {
          key: index,
          city: node.city,
          partner: node.partner && node.partner.name,
          name: node.name,
          exhibitionInfo: node.exhibition_period,
          href: node.href
        }), _react.default.createElement(_Responsive.Media, {
          at: "xs"
        }, _react.default.createElement(_palette.Spacer, {
          mb: 3
        })));
      }))))), _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_palette.Box, null, _react.default.createElement(_v.PaginationFragmentContainer, {
        hasNextPage: this.props.artist.showsConnection.pageInfo.hasNextPage,
        pageCursors: this.props.artist.showsConnection.pageCursors,
        onClick: this.loadAfter,
        onNext: this.loadNext,
        scrollTo: this.props.scrollTo
      }))))))));
    }
  }]);

  return ArtistShows;
}(_react.Component);

_defineProperty(ArtistShows, "defaultProps", {
  my: 4
});

var ArtistShowsRefetchContainer = (0, _reactRelay.createRefetchContainer)(ArtistShows, {
  artist: function artist() {
    var node = require("../../../../__generated__/ArtistShows_artist.graphql");

    if (node.hash && node.hash !== "743ab15f22c8c693361d5035dc02e63c") {
      console.error("The definition of 'ArtistShows_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtistShows_artist.graphql");
  }
}, function () {
  var node = require("../../../../__generated__/ArtistShowsQuery.graphql");

  if (node.hash && node.hash !== "a8ad4e3edb6e4ecac82b89a3648d18f8") {
    console.error("The definition of 'ArtistShowsQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("../../../../__generated__/ArtistShowsQuery.graphql");
});
exports.ArtistShowsRefetchContainer = ArtistShowsRefetchContainer;
//# sourceMappingURL=ArtistShows.js.map