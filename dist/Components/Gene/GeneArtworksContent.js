"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GeneArtworksContent = void 0;

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

var _ArtworkGrid = _interopRequireDefault(require("../ArtworkGrid"));

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

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

var SpinnerContainer = _styledComponents.default.div.withConfig({
  displayName: "GeneArtworksContent__SpinnerContainer",
  componentId: "sc-1blwcdt-0"
})(["width:100%;height:100px;position:relative;"]);

var PageSize = 10;

var GeneArtworksContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GeneArtworksContent, _React$Component);

  function GeneArtworksContent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GeneArtworksContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GeneArtworksContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "finishedPaginatingWithError", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false,
      page: 1
    });

    return _this;
  }

  _createClass(GeneArtworksContent, [{
    key: "loadMoreArtworks",
    value: function loadMoreArtworks() {
      var _this2 = this;

      var hasMore = this.props.filtered_artworks.artworks.pageInfo.hasNextPage;
      var origLength = this.props.filtered_artworks.artworks.edges.length;

      if (hasMore && !this.state.loading && !this.finishedPaginatingWithError) {
        this.setState({
          loading: true
        }, function () {
          _this2.props.relay.loadMore(PageSize, function (error) {
            if (error) {
              console.error(error);
            } // Check to see if we're at the max allowable page.


            var page = _this2.state.page;

            if (page > 100) {
              console.error("Finished paging: ".concat(_this2.props.geneID));
              _this2.finishedPaginatingWithError = true;
            } // Check to see if no new edges were received.


            var newLength = _this2.props.filtered_artworks.artworks.edges.length;
            var newHasMore = _this2.props.filtered_artworks.artworks.pageInfo.hasNextPage;

            if (newLength - origLength === 0 && newHasMore) {
              console.error("No more records returned for gene: ".concat(_this2.props.geneID));
              _this2.finishedPaginatingWithError = true;
            }

            _this2.setState({
              loading: false,
              page: page + 1
            });
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement("div", null, React.createElement(_ArtworkGrid.default, {
        artworks: this.props.filtered_artworks.artworks,
        columnCount: 4,
        itemMargin: 40,
        onLoadMore: function onLoadMore() {
          return _this3.loadMoreArtworks();
        }
      }), React.createElement(SpinnerContainer, null, this.state.loading ? React.createElement(_Spinner.default, null) : ""));
    }
  }]);

  return GeneArtworksContent;
}(React.Component);

exports.GeneArtworksContent = GeneArtworksContent;

var _default = (0, _reactRelay.createPaginationContainer)(GeneArtworksContent, {
  filtered_artworks: function filtered_artworks() {
    var node = require("../../__generated__/GeneArtworksContent_filtered_artworks.graphql");

    if (node.hash && node.hash !== "d30d59f658dfd8265d9991f69697e6f5") {
      console.error("The definition of 'GeneArtworksContent_filtered_artworks' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/GeneArtworksContent_filtered_artworks.graphql");
  }
}, {
  direction: "forward",
  getConnectionFromProps: function getConnectionFromProps(props) {
    return props.filtered_artworks.artworks;
  },
  getFragmentVariables: function getFragmentVariables(prevVars, totalCount) {
    return _objectSpread({}, prevVars, {
      count: totalCount
    });
  },
  getVariables: function getVariables(props, _ref, fragmentVariables) {
    var count = _ref.count,
        cursor = _ref.cursor;
    return _objectSpread({}, fragmentVariables, {
      count: count,
      cursor: cursor,
      filteredArtworksNodeID: props.filtered_artworks.__id
    });
  },
  query: function query() {
    var node = require("../../__generated__/GeneArtworksContentQuery.graphql");

    if (node.hash && node.hash !== "f4d2d86f15f82d4e5690d66b96f784c4") {
      console.error("The definition of 'GeneArtworksContentQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/GeneArtworksContentQuery.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=GeneArtworksContent.js.map