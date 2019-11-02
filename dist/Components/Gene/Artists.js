"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Artists = void 0;

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

var _Fonts = require("../../Assets/Fonts");

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Dropdown = _interopRequireDefault(require("../ArtworkFilter/Dropdown"));

var _ForSaleCheckbox = _interopRequireDefault(require("../ArtworkFilter/ForSaleCheckbox"));

var _Default = require("../Buttons/Default");

var _Ghost = _interopRequireDefault(require("../Buttons/Ghost"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _ArtistRow = _interopRequireDefault(require("./ArtistRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var ArtistRowsContainer = _styledComponents.default.div.withConfig({
  displayName: "Artists__ArtistRowsContainer",
  componentId: "sc-1cxaa3m-0"
})(["margin:40px 0 20px;"]);

var LoadMoreContainer = _styledComponents.default.div.withConfig({
  displayName: "Artists__LoadMoreContainer",
  componentId: "sc-1cxaa3m-1"
})(["display:flex;justify-content:center;align-items:center;"]);

var LoadMoreButton = _styledComponents.default.a.withConfig({
  displayName: "Artists__LoadMoreButton",
  componentId: "sc-1cxaa3m-2"
})(["font-family:", ";cursor:pointer;text-transform:uppercase;border-bottom:2px solid transparent;&:hover{border-bottom:2px solid black;}"], (0, _Fonts.avantgarde)("s13"));

var SpinnerContainer = _styledComponents.default.div.withConfig({
  displayName: "Artists__SpinnerContainer",
  componentId: "sc-1cxaa3m-3"
})(["width:100%;height:100px;position:relative;"]);

var ArtistFilterButtons = _styledComponents.default.div.withConfig({
  displayName: "Artists__ArtistFilterButtons",
  componentId: "sc-1cxaa3m-4"
})(["margin-right:10px;button{height:52px;padding:16px;}"]);

var FilterBar = _styledComponents.default.div.withConfig({
  displayName: "Artists__FilterBar",
  componentId: "sc-1cxaa3m-5"
})(["vertical-align:middle;text-align:center;> div{display:inline-block;}"]);

var Artists =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Artists, _React$Component);

  function Artists() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Artists);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Artists)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loading: false
    });

    return _this;
  }

  _createClass(Artists, [{
    key: "loadMoreArtists",
    value: function loadMoreArtists() {
      var _this2 = this;

      var hasMore = this.props.gene.artists.pageInfo.hasNextPage;

      if (!this.state.loading && hasMore) {
        this.setState({
          loading: true
        }, function () {
          _this2.props.relay.loadMore(PageSize, function (error) {
            _this2.setState({
              loading: false
            });
          });
        });
      }
    }
  }, {
    key: "renderForSaleToggle",
    value: function renderForSaleToggle() {
      return React.createElement(_ForSaleCheckbox.default, {
        checked: false,
        onChange: this.props.onForSaleToggleSelected
      });
    }
  }, {
    key: "renderArtistFilter",
    value: function renderArtistFilter() {
      return React.createElement(ArtistFilterButtons, null, React.createElement("span", null, "By Artists:"), React.createElement(_Ghost.default, {
        onClick: function onClick() {
          return null;
        },
        state: _Default.ButtonState.Success
      }, "All Artists"), React.createElement("span", null, "By Work:"));
    }
  }, {
    key: "renderArtistDropdown",
    value: function renderArtistDropdown() {
      var _this3 = this;

      return this.props.gene.filter_aggregations.aggregations.map(function (aggregation) {
        return React.createElement(_Dropdown.default, {
          aggregation: aggregation,
          key: aggregation.slice,
          selected: aggregation.slice && _this3.state[aggregation.slice.toLowerCase()],
          onSelected: _this3.props.onDropdownSelected
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var artists = this.props.gene.artists;
      var artistRows = artists.edges.map(function (edge) {
        return React.createElement(_ArtistRow.default, {
          artist: edge.node,
          key: edge.node.__id
        });
      });
      var loadMoreButton = React.createElement(LoadMoreContainer, null, React.createElement(LoadMoreButton, {
        onClick: function onClick() {
          return _this4.loadMoreArtists();
        }
      }, "Load More"));
      return React.createElement("div", null, React.createElement(FilterBar, null, this.renderArtistFilter(), this.renderForSaleToggle(), this.renderArtistDropdown()), React.createElement(ArtistRowsContainer, null, artistRows, React.createElement(SpinnerContainer, null, this.state.loading ? React.createElement(_Spinner.default, null) : ""), artists && artists.pageInfo.hasNextPage && !this.state.loading && loadMoreButton));
    }
  }]);

  return Artists;
}(React.Component);

exports.Artists = Artists;

var _default = (0, _reactRelay.createPaginationContainer)(Artists, {
  gene: function gene() {
    var node = require("../../__generated__/Artists_gene.graphql");

    if (node.hash && node.hash !== "c21a21d79040bd329707d9e8f2d6f805") {
      console.error("The definition of 'Artists_gene' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/Artists_gene.graphql");
  }
}, {
  direction: "forward",
  getConnectionFromProps: function getConnectionFromProps(props) {
    return props.gene.artists;
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
      geneNodeID: props.gene.__id
    });
  },
  query: function query() {
    var node = require("../../__generated__/ArtistsQuery.graphql");

    if (node.hash && node.hash !== "d9a3bfe133d142f393f301f23f2665cf") {
      console.error("The definition of 'ArtistsQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/ArtistsQuery.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=Artists.js.map