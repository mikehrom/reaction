"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistMarketInsightsFragmentContainer = exports.MarketInsights = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _palette = require("@artsy/palette");

var _MarketInsights = require("../../Apps/Artist/Components/MarketInsights/MarketInsights");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _Responsive = require("../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CATEGORIES = {
  "blue-chip": "Blue chip",
  "top-established": "Established",
  "top-emerging": "Emerging"
};
var CATEGORY_LABEL_MAP = {
  "blue-chip": "Represented by internationally recognized galleries.",
  "top-established": "Represented by industry leading galleries.",
  "top-emerging": "Represented by up-and-coming galleries."
};

var MarketInsights =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MarketInsights, _React$Component);

  function MarketInsights() {
    _classCallCheck(this, MarketInsights);

    return _possibleConstructorReturn(this, _getPrototypeOf(MarketInsights).apply(this, arguments));
  }

  _createClass(MarketInsights, [{
    key: "renderAuctionHighlight",
    value: function renderAuctionHighlight() {
      if (!this.props.artist.auctionResults || this.props.artist.auctionResults.edges.length < 1) {
        return null;
      }

      var topAuctionResult = this.props.artist.auctionResults.edges[0].node;
      var display = "".concat(topAuctionResult.price_realized.display, ", ").concat(topAuctionResult.organization, ", ").concat(topAuctionResult.sale_date);
      return _react.default.createElement(TextWrap, null, _react.default.createElement(_palette.Sans, {
        size: "2",
        weight: "medium",
        display: "inline",
        mr: 1
      }, "High auction record"), _react.default.createElement(_palette.Sans, {
        size: "2",
        display: "inline",
        color: "black60"
      }, display));
    }
  }, {
    key: "renderGalleryRepresentation",
    value: function renderGalleryRepresentation() {
      var highlights = this.props.artist.highlights;
      var partners = highlights.partners;

      if (partners && partners.edges && partners.edges.length > 0) {
        var highCategory = (0, _MarketInsights.highestCategory)(partners.edges);
        return _react.default.createElement(TextWrap, null, _react.default.createElement(_palette.Sans, {
          size: "2",
          weight: "medium",
          display: "inline",
          mr: 1
        }, CATEGORIES[highCategory]), _react.default.createElement(_palette.Sans, {
          size: "2",
          display: "inline",
          color: "black60"
        }, CATEGORY_LABEL_MAP[highCategory]));
      }
    }
  }, {
    key: "renderPermanentCollection",
    value: function renderPermanentCollection() {
      var collections = this.props.artist.collections;

      if (!collections || collections.length === 0) {
        return null;
      }

      var label = collections.length === 1 ? "Collected by a major museum" : "Collected by major museums";
      return _react.default.createElement(TextWrap, null, _react.default.createElement(_palette.Sans, {
        size: "2",
        weight: "medium",
        display: "inline",
        mr: 1
      }, label), _react.default.createElement(_palette.Sans, {
        size: "2",
        display: "inline",
        color: "black60"
      }, collections.join(", ")));
    }
  }, {
    key: "render",
    value: function render() {
      if (!(0, _MarketInsights.hasSections)(this.props.artist)) {
        return null;
      }

      var Container;

      if (this.props.Container) {
        Container = this.props.Container;
      } else if (this.props.border) {
        Container = _palette.BorderBox;
      } else {
        Container = _palette.Box;
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Container, {
        flexDirection: "column"
      }, _react.default.createElement("div", null, this.renderAuctionHighlight(), this.renderGalleryRepresentation(), this.renderPermanentCollection())), this.props.children);
    }
  }]);

  return MarketInsights;
}(_react.default.Component);

exports.MarketInsights = MarketInsights;

_defineProperty(MarketInsights, "defaultProps", {
  border: true
});

var ArtistMarketInsightsFragmentContainer = (0, _reactRelay.createFragmentContainer)(MarketInsights, {
  artist: function artist() {
    var node = require("../../__generated__/ArtistMarketInsights_artist.graphql");

    if (node.hash && node.hash !== "b1b021d4faa420e5532466667bd2078d") {
      console.error("The definition of 'ArtistMarketInsights_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/ArtistMarketInsights_artist.graphql");
  }
});
exports.ArtistMarketInsightsFragmentContainer = ArtistMarketInsightsFragmentContainer;

var TextWrap = function TextWrap(props) {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Responsive.Media, {
    at: "xs"
  }, _react.default.createElement(_palette.Flex, _extends({
    flexDirection: "column",
    mb: 1
  }, props))), _react.default.createElement(_Responsive.Media, {
    greaterThan: "xs"
  }, _react.default.createElement(_palette.Box, props)));
};
//# sourceMappingURL=ArtistMarketInsights.js.map