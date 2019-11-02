"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MarketDataSummary = exports.MarketDataSummaryContainer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

var _groupBy2 = _interopRequireDefault(require("lodash/groupBy"));

var _Fonts = require("../../../../Assets/Fonts");

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var MarketDataSummaryContainer = _styledComponents.default.div.withConfig({
  displayName: "MarketDataSummary__MarketDataSummaryContainer",
  componentId: "sc-1hhu678-0"
})(["", ";"], (0, _Fonts.unica)("s14"));

exports.MarketDataSummaryContainer = MarketDataSummaryContainer;
var Categories = {
  "blue-chip": "Blue Chip",
  "top-established": "Top Established",
  "top-emerging": "Top Emerging"
};
var orderedCategories = ["blue-chip", "top-established", "top-emerging"];

var MarketDataSummary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MarketDataSummary, _React$Component);

  function MarketDataSummary() {
    _classCallCheck(this, MarketDataSummary);

    return _possibleConstructorReturn(this, _getPrototypeOf(MarketDataSummary).apply(this, arguments));
  }

  _createClass(MarketDataSummary, [{
    key: "renderGalleryCategory",
    value: function renderGalleryCategory(categorySlug, partnerCount) {
      var introSentence;
      var category = Categories[categorySlug];

      if (partnerCount > 1) {
        introSentence = "Represented by " + category.toLowerCase() + " galleries";
      } else {
        introSentence = "Represented by a " + category.toLowerCase() + " gallery";
      }

      return React.createElement("div", null, introSentence);
    }
  }, {
    key: "hasSections",
    value: function hasSections() {
      var _this$props$artist = this.props.artist,
          highlights = _this$props$artist.highlights,
          auctionResults = _this$props$artist.auctionResults,
          collections = _this$props$artist.collections;
      var partners = highlights.partners; // Is there a gallery representation section?

      if (partners && partners.edges && partners.edges.length > 0) {
        return true;
      } // Is there an auction highlights section?


      if (auctionResults && auctionResults.edges && auctionResults.edges.length > 0) {
        return true;
      } // Is there a permanent collections section?


      if (collections && collections.length > 0) {
        return true;
      }

      return false;
    } // We group all partners that represent an artist by their relevant category, from the list above.
    // Display the highest category string for all the partners that represent the artist

  }, {
    key: "renderGalleryRepresentation",
    value: function renderGalleryRepresentation() {
      var highlights = this.props.artist.highlights;
      var partners = highlights.partners;

      if (partners && partners.edges && partners.edges.length > 0) {
        var groupedByCategory = (0, _groupBy2.default)(partners.edges, function (_ref) {
          var partner = _ref.node;
          var category;
          Object.keys(Categories).forEach(function (key) {
            partner.categories.forEach(function (partnerCategory) {
              if (partnerCategory.id === key) {
                category = key;
              }
            });
          });
          return category;
        });
        var highestCategory = orderedCategories.filter(function (category) {
          return groupedByCategory[category] && groupedByCategory[category].length > 0;
        })[0];
        return React.createElement("div", null, this.renderGalleryCategory(highestCategory, groupedByCategory[highestCategory].length));
      }
    }
  }, {
    key: "renderAuctionHighlight",
    value: function renderAuctionHighlight() {
      if (!this.props.artist.auctionResults || this.props.artist.auctionResults.edges.length < 1) {
        return null;
      }

      var topAuctionResult = this.props.artist.auctionResults.edges[0].node;
      return React.createElement("div", null, topAuctionResult.price_realized.display, " auction record");
    }
  }, {
    key: "renderPermanentCollection",
    value: function renderPermanentCollection() {
      var collections = this.props.artist.collections;

      if (!collections || collections.length === 0) {
        return null;
      }

      if (collections.length === 1) {
        return React.createElement("div", null, "Collected by a major museum");
      }

      return React.createElement("div", null, "Collected by major museums");
    }
  }, {
    key: "render",
    value: function render() {
      var onEmptyText = this.props.onEmptyText;

      if (this.hasSections()) {
        return React.createElement(MarketDataSummaryContainer, null, this.renderAuctionHighlight(), this.renderGalleryRepresentation(), this.renderPermanentCollection());
      } else if (onEmptyText) {
        return React.createElement(MarketDataSummaryContainer, null, onEmptyText);
      }

      return null;
    }
  }]);

  return MarketDataSummary;
}(React.Component);

exports.MarketDataSummary = MarketDataSummary;

var _default = (0, _reactRelay.createFragmentContainer)(MarketDataSummary, {
  artist: function artist() {
    var node = require("../../../../__generated__/MarketDataSummary_artist.graphql");

    if (node.hash && node.hash !== "04d6d58696b4cf04d800e6706066c9f8") {
      console.error("The definition of 'MarketDataSummary_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/MarketDataSummary_artist.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=MarketDataSummary.js.map