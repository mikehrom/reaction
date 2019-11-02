"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Headline = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

var _find2 = _interopRequireDefault(require("lodash/find"));

var _compact2 = _interopRequireDefault(require("lodash/compact"));

var _Fonts = require("../../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Headline =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Headline, _React$Component);

  function Headline() {
    _classCallCheck(this, Headline);

    return _possibleConstructorReturn(this, _getPrototypeOf(Headline).apply(this, arguments));
  }

  _createClass(Headline, [{
    key: "getCountName",
    value: function getCountName(aggregation, id) {
      var selectedAggregation = (0, _find2.default)(this.props.aggregations, function (agg) {
        return agg.slice === aggregation.toUpperCase();
      });
      var selectedCount = (0, _find2.default)(selectedAggregation.counts, function (count) {
        return count.id === id;
      });
      return selectedCount ? selectedCount.name : null;
    }
  }, {
    key: "size",
    value: function size() {
      var dimension_range = this.props.dimension_range;

      if (dimension_range && dimension_range !== "*") {
        return this.getCountName("dimension_range", dimension_range);
      }

      return false;
    }
  }, {
    key: "medium",
    value: function medium() {
      var _this$props = this.props,
          medium = _this$props.medium,
          facet = _this$props.facet;

      if (medium && medium !== "*") {
        return this.getCountName("medium", medium);
      }

      if (facet && facet.name) {
        return facet.name;
      }

      return "Works";
    }
  }, {
    key: "priceRange",
    value: function priceRange() {
      var price_range = this.props.price_range;

      if (price_range && price_range !== "*") {
        return this.getCountName("price_range", price_range);
      }

      return false;
    }
  }, {
    key: "forSale",
    value: function forSale() {
      if (this.props.for_sale) {
        return "For Sale";
      }

      return false;
    }
  }, {
    key: "renderHeadline",
    value: function renderHeadline() {
      var headline = (0, _compact2.default)([this.size(), this.medium(), this.priceRange(), this.forSale()]).join(" ");

      if (headline === "works") {
        return "Artworks";
      }

      return headline.charAt(0).toUpperCase() + headline.substr(1);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("h1", {
        className: this.props.className
      }, this.renderHeadline());
    }
  }]);

  return Headline;
}(_react.default.Component);

exports.Headline = Headline;
var StyledHeadline = (0, _styledComponents.default)(Headline).withConfig({
  displayName: "Headline__StyledHeadline",
  componentId: "sc-1yjjkky-0"
})(["", ";font-weight:normal;margin:0;font-size:2em;"], (0, _Fonts.garamond)("s11"));

var _default = (0, _reactRelay.createFragmentContainer)(StyledHeadline, {
  facet: function facet() {
    var node = require("../../__generated__/Headline_facet.graphql");

    if (node.hash && node.hash !== "fe0e6f752ce23f2a03e177de220f2ed6") {
      console.error("The definition of 'Headline_facet' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/Headline_facet.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=Headline.js.map