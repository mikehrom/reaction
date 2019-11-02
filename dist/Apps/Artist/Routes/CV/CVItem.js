"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CVPaginationContainer = exports.CVItem = exports.PAGE_SIZE = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.sort");

require("core-js/modules/es6.array.map");

var _groupBy2 = _interopRequireDefault(require("lodash/groupBy"));

var _palette = require("@artsy/palette");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Responsive = require("../../../../Utils/Responsive");

var _reactRelay = require("react-relay");

var _ShowEntry = require("./ShowEntry");

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PAGE_SIZE = 10;
exports.PAGE_SIZE = PAGE_SIZE;

var ShowMoreButton = function ShowMoreButton(props) {
  return _react.default.createElement(_palette.Button, _extends({
    variant: "secondaryOutline",
    size: "medium"
  }, props), "Show more");
};

var CVItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CVItem, _Component);

  function CVItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CVItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CVItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: false
    });

    _defineProperty(_assertThisInitialized(_this), "renderEntries", function (entries) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      return entries.map(function (_ref, key) {
        var node = _ref.node;
        return _react.default.createElement(_ShowEntry.ShowEntry, {
          node: node,
          key: key,
          size: size
        });
      });
    });

    return _this;
  }

  _createClass(CVItem, [{
    key: "loadMore",
    value: function loadMore() {
      var _this2 = this;

      var hasMore = this.props.artist.showsConnection.pageInfo.hasNextPage;

      if (hasMore) {
        this.setState({
          isLoading: true
        });
        this.props.relay.loadMore(PAGE_SIZE, function (error) {
          if (error) {
            console.error(error);
          }

          _this2.setState({
            isLoading: false
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.props.artist.showsConnection || !this.props.artist.showsConnection.edges.length) {
        return null;
      }

      var groupedByYear = (0, _groupBy2.default)(this.props.artist.showsConnection.edges, function (_ref2) {
        var show = _ref2.node;
        return show.start_at;
      });
      return _react.default.createElement(_Responsive.Responsive, null, function (_ref3) {
        var xs = _ref3.xs,
            sm = _ref3.sm,
            md = _ref3.md;
        // Element spacing - correction for lineheight
        var sectionSpace = (0, _palette.space)(4) - 4;
        return _react.default.createElement(CVItems, {
          className: "cvItems"
        }, (xs || sm || md) && _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(Category, {
          size: xs ? "2" : "3",
          weight: "medium"
        }, _this3.props.category), _react.default.createElement(_palette.Spacer, {
          mb: xs ? 0.5 : 1
        }))), Object.keys(groupedByYear).sort().reverse().map(function (year, index) {
          var isFirst = index === 0;
          var yearGroup = groupedByYear[year];
          return xs ? _react.default.createElement(_palette.Flex, {
            key: index
          }, _react.default.createElement(Year, {
            size: "2",
            mr: 1
          }, year), _react.default.createElement(_palette.Box, null, _this3.renderEntries(yearGroup, "2"))) : _react.default.createElement(_palette.Row, {
            key: index
          }, !sm && !md && _react.default.createElement(_palette.Col, {
            xl: 2,
            lg: 2
          }, isFirst && _react.default.createElement(Category, {
            size: "3",
            weight: "medium"
          }, _this3.props.category)), _react.default.createElement(_palette.Col, {
            lg: 1,
            md: 2,
            sm: 2
          }, _react.default.createElement(Year, {
            mr: 2,
            size: "3"
          }, year)), _react.default.createElement(_palette.Col, {
            md: 8,
            lg: 9,
            xl: 9,
            sm: 10
          }, _this3.renderEntries(yearGroup)));
        }), _this3.hasMore && _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, {
          xs: 0,
          sm: 0,
          md: 0,
          lg: 2,
          xl: 2
        }), _react.default.createElement(_palette.Col, {
          lgOffset: 2,
          xlOffset: 2,
          lg: 10,
          xl: 10
        }, _react.default.createElement(ShowMoreButton, {
          onClick: function onClick() {
            return _this3.loadMore();
          },
          loading: _this3.state.isLoading ? true : false,
          width: xs ? "100%" : "",
          mt: xs ? 1 : 2
        }), xs && _react.default.createElement(_palette.Spacer, {
          mb: 1
        }))), _react.default.createElement("div", {
          className: "cvSeparator"
        }, xs ? _react.default.createElement(_palette.Spacer, {
          mt: 1
        }) : _react.default.createElement(_palette.Separator, {
          my: sectionSpace
        })));
      });
    }
  }, {
    key: "hasMore",
    get: function get() {
      var hasMore = this.props.artist.showsConnection.pageInfo.hasNextPage;
      return hasMore;
    }
  }]);

  return CVItem;
}(_react.Component);

exports.CVItem = CVItem;
var CVPaginationContainer = (0, _reactRelay.createPaginationContainer)(CVItem, {
  artist: function artist() {
    var node = require("../../../../__generated__/CVItem_artist.graphql");

    if (node.hash && node.hash !== "f46e22691cb8b6b7adf62a37848eca89") {
      console.error("The definition of 'CVItem_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/CVItem_artist.graphql");
  }
}, {
  direction: "forward",
  getConnectionFromProps: function getConnectionFromProps(props) {
    return props.artist.showsConnection;
  },
  getFragmentVariables: function getFragmentVariables(prevVars, totalCount) {
    return _objectSpread({}, prevVars, {
      count: totalCount
    });
  },
  getVariables: function getVariables(props, _ref4, fragmentVariables) {
    var count = _ref4.count,
        cursor = _ref4.cursor;
    return _objectSpread({}, fragmentVariables, {
      count: count,
      cursor: cursor,
      artistID: props.artist.id
    });
  },
  query: function query() {
    var node = require("../../../../__generated__/CVItemQuery.graphql");

    if (node.hash && node.hash !== "0b1a3246fdd41a497dffb3b7697f5422") {
      console.error("The definition of 'CVItemQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/CVItemQuery.graphql");
  }
});
exports.CVPaginationContainer = CVPaginationContainer;
var CVItems = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "CVItem__CVItems",
  componentId: "sc-1ljh711-0"
})([""]);
var Year = _palette.Serif;
var Category = _palette.Sans;
Year.displayName = "Year";
Category.displayName = "Category";
//# sourceMappingURL=CVItem.js.map