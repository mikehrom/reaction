"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contents = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.bind");

require("core-js/modules/es6.array.sort");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _Artsy = require("../../Artsy");

var _SystemQueryRenderer = require("../../Artsy/Relay/SystemQueryRenderer");

var _TagArtworks = _interopRequireDefault(require("./TagArtworks"));

var _graphql;

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

var TagContents =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TagContents, _React$Component);

  function TagContents(props) {
    var _this;

    _classCallCheck(this, TagContents);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TagContents).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleStateChange", function () {
      var _this$state = _this.state,
          for_sale = _this$state.for_sale,
          medium = _this$state.medium,
          price_range = _this$state.price_range,
          dimension_range = _this$state.dimension_range,
          sort = _this$state.sort;
      var filters = {
        for_sale: for_sale,
        medium: medium,
        price_range: price_range,
        dimension_range: dimension_range
      };

      _this.props.onStateChange({
        filters: filters,
        sort: sort
      });
    });

    var _this$props$filters = _this.props.filters,
        _for_sale = _this$props$filters.for_sale,
        _price_range = _this$props$filters.price_range,
        _dimension_range = _this$props$filters.dimension_range,
        _medium = _this$props$filters.medium;
    _this.state = {
      for_sale: _for_sale || null,
      medium: _medium || "*",
      price_range: _price_range || "*",
      dimension_range: _dimension_range || "*",
      sort: _this.props.sort || "-partner_updated_at"
    };
    return _this;
  }

  _createClass(TagContents, [{
    key: "onDropdownSelect",
    // Because `for_sale` is a proper filter of its own, but
    // we include its aggregation as part of `price_range`, we
    // have to handle it specially.
    value: function onDropdownSelect(slice, value) {
      var filter = slice.toLowerCase();

      if (filter === "price_range" && value === "*-*") {
        filter = "for_sale";
        value = "true";
      }

      this.setState(_defineProperty({}, filter, value), this.handleStateChange);
    }
  }, {
    key: "onForSaleToggleSelect",
    value: function onForSaleToggleSelect() {
      var forSale = this.state.for_sale ? null : true;
      this.setState({
        for_sale: forSale
      }, this.handleStateChange);
    }
  }, {
    key: "onSortSelect",
    value: function onSortSelect(sortEl) {
      this.setState({
        sort: sortEl.val
      }, this.handleStateChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          tagID = _this$props.tagID,
          relayEnvironment = _this$props.relayEnvironment;
      var _this$state2 = this.state,
          for_sale = _this$state2.for_sale,
          medium = _this$state2.medium,
          price_range = _this$state2.price_range,
          dimension_range = _this$state2.dimension_range,
          sort = _this$state2.sort;
      return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
        environment: relayEnvironment,
        query: _graphql || (_graphql = function _graphql() {
          var node = require("../../__generated__/TagContentsArtworksQuery.graphql");

          if (node.hash && node.hash !== "e33a81fd24cb0cb5cabdfb7d8c812595") {
            console.error("The definition of 'TagContentsArtworksQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../__generated__/TagContentsArtworksQuery.graphql");
        }),
        variables: _objectSpread({
          tagID: tagID
        }, this.state),
        render: function render(_ref) {
          var props = _ref.props;

          if (props) {
            return _react.default.createElement(_TagArtworks.default, {
              onForSaleToggleSelected: _this2.onForSaleToggleSelect.bind(_this2),
              onSortSelected: _this2.onSortSelect.bind(_this2),
              sort: sort,
              for_sale: for_sale,
              medium: medium,
              price_range: price_range,
              dimension_range: dimension_range,
              tag: props.tag,
              onDropdownSelected: _this2.onDropdownSelect.bind(_this2)
            });
          } else {
            return null;
          }
        }
      });
    }
  }]);

  return TagContents;
}(_react.default.Component);

var Contents = (0, _Artsy.withSystemContext)(TagContents);
exports.Contents = Contents;
//# sourceMappingURL=index.js.map