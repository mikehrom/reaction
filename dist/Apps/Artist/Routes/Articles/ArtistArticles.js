"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistArticlesRefetchContainer = exports.ArtistArticles = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _v = require("../../../../Components/v2");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ArtistArticle = require("./ArtistArticle");

var _LoadingArea = require("../../../../Components/v2/LoadingArea");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var PAGE_SIZE = 10;

var Container = _styledComponents.default.div.withConfig({
  displayName: "ArtistArticles__Container",
  componentId: "qlf56x-0"
})(["&:last-child{border-bottom:none;}"]);

var ArtistArticles =
/*#__PURE__*/
function (_Component) {
  _inherits(ArtistArticles, _Component);

  function ArtistArticles() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtistArticles);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtistArticles)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: false
    });

    _defineProperty(_assertThisInitialized(_this), "loadNext", function () {
      var _this$props$artist$ar = _this.props.artist.articlesConnection.pageInfo,
          hasNextPage = _this$props$artist$ar.hasNextPage,
          endCursor = _this$props$artist$ar.endCursor;

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
        last: null
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

  _createClass(ArtistArticles, [{
    key: "render",
    value: function render() {
      var articlesLength = this.props.artist.articlesConnection.edges.length;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", {
        id: "jumpto--artistArticles"
      }), _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_LoadingArea.LoadingArea, {
        isLoading: this.state.isLoading
      }, _react.default.createElement(Container, null, this.props.artist.articlesConnection.edges.map(function (_ref, index) {
        var node = _ref.node;
        return _react.default.createElement(_ArtistArticle.ArticleItem, {
          title: node.thumbnail_title,
          imageUrl: node.thumbnail_image.resized.url,
          date: node.published_at,
          author: node.author.name,
          href: node.href,
          key: index,
          lastChild: index === articlesLength - 1
        });
      }))))), _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_palette.Box, null, _react.default.createElement(_v.PaginationFragmentContainer, {
        pageCursors: this.props.artist.articlesConnection.pageCursors,
        onClick: this.loadAfter,
        onNext: this.loadNext,
        scrollTo: "#jumpto-ArtistHeader",
        hasNextPage: this.props.artist.articlesConnection.pageInfo.hasNextPage
      })))));
    }
  }]);

  return ArtistArticles;
}(_react.Component);

exports.ArtistArticles = ArtistArticles;
var ArtistArticlesRefetchContainer = (0, _reactRelay.createRefetchContainer)(ArtistArticles, {
  artist: function artist() {
    var node = require("../../../../__generated__/ArtistArticles_artist.graphql");

    if (node.hash && node.hash !== "9431572d880bde3b77ca6f9a8b570ef8") {
      console.error("The definition of 'ArtistArticles_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtistArticles_artist.graphql");
  }
}, function () {
  var node = require("../../../../__generated__/ArtistArticlesQuery.graphql");

  if (node.hash && node.hash !== "b66fa1ae885e53f04b062df9f1e60f0b") {
    console.error("The definition of 'ArtistArticlesQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("../../../../__generated__/ArtistArticlesQuery.graphql");
});
exports.ArtistArticlesRefetchContainer = ArtistArticlesRefetchContainer;
//# sourceMappingURL=ArtistArticles.js.map