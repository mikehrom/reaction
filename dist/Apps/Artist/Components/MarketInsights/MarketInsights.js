"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MarketInsights = exports.hasSections = exports.highestCategory = void 0;

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

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../../Assets/Colors"));

var _Fonts = require("../../../../Assets/Fonts");

var _TextLink = _interopRequireDefault(require("../../../../Components/TextLink"));

var _Tooltip = require("../../../../Components/Tooltip");

var _palette = require("@artsy/palette");

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

var MarketInsightsContainer = _styledComponents.default.div.withConfig({
  displayName: "MarketInsights__MarketInsightsContainer",
  componentId: "sc-1j5arz1-0"
})(["", ";"], (0, _Fonts.unica)("s14", "medium"));

var MarketInsightsDataContainer = _styledComponents.default.div.withConfig({
  displayName: "MarketInsights__MarketInsightsDataContainer",
  componentId: "sc-1j5arz1-1"
})(["> div{display:inline-block;padding:10px 30px;}border-bottom:1px solid ", ";border-top:1px solid ", ";padding:20px;text-align:center;"], _Colors.default.grayRegular, _Colors.default.grayRegular);

var FeedbackContainer = _styledComponents.default.div.withConfig({
  displayName: "MarketInsights__FeedbackContainer",
  componentId: "sc-1j5arz1-2"
})(["color:", ";padding:8px 0;", ";a{", ";}"], _Colors.default.graySemibold, (0, _Fonts.unica)("s10"), (0, _Fonts.unica)("s10"));

var TooltipContainer = _styledComponents.default.div.withConfig({
  displayName: "MarketInsights__TooltipContainer",
  componentId: "sc-1j5arz1-3"
})(["display:inline-block;"]);

var Categories = {
  "blue-chip": "Blue Chip",
  "top-established": "Top Established",
  "top-emerging": "Top Emerging"
};
var orderedCategories = ["blue-chip", "top-established", "top-emerging"];
var CategoryTooltipContent = {
  "blue-chip": "Blue chip galleries have multiple locations internationally and participate in major art fairs.",
  "top-established": "Top established galleries have been industry leaders in their region or specialty for decades.",
  "top-emerging": "Top emerging dealers participate in curated, up-and-coming art fairs."
};

var groupedByCategories = function groupedByCategories(edges) {
  return (0, _groupBy2.default)(edges, function (_ref) {
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
};

var highestCategory = function highestCategory(edges) {
  var groups = groupedByCategories(edges);
  return orderedCategories.filter(function (category) {
    return groups[category] && groups[category].length > 0;
  })[0];
};

exports.highestCategory = highestCategory;

var hasSections = function hasSections(_ref2) {
  var highlights = _ref2.highlights,
      auctionResults = _ref2.auctionResults,
      collections = _ref2.collections;
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
};

exports.hasSections = hasSections;

var MarketInsights =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MarketInsights, _React$Component);

  function MarketInsights() {
    _classCallCheck(this, MarketInsights);

    return _possibleConstructorReturn(this, _getPrototypeOf(MarketInsights).apply(this, arguments));
  }

  _createClass(MarketInsights, [{
    key: "renderGalleryCategory",
    value: function renderGalleryCategory(categorySlug, partnerCount) {
      var introSentence;
      var category = Categories[categorySlug];
      var categoryTooltipContent = CategoryTooltipContent[categorySlug];

      if (partnerCount > 1) {
        introSentence = "Represented by " + category.toLowerCase() + " galleries";
      } else {
        introSentence = "Represented by a " + category.toLowerCase() + " gallery";
      }

      return React.createElement("div", null, introSentence, "\xA0", React.createElement(TooltipContainer, null, React.createElement(_Tooltip.Tooltip, {
        message: categoryTooltipContent
      }, React.createElement("span", {
        style: {
          verticalAlign: "text-top"
        }
      }, React.createElement(_palette.HelpIcon, null)))));
    } // We group all partners that represent an artist by their relevant category, from the list above.
    // Assumption: these are mutually exclusive categories among a partner.

  }, {
    key: "renderGalleryRepresentation",
    value: function renderGalleryRepresentation() {
      var highlights = this.props.artist.highlights;
      var partners = highlights.partners;

      if (partners && partners.edges && partners.edges.length > 0) {
        var highCategory = highestCategory(partners.edges);
        return React.createElement("div", null, this.renderGalleryCategory(highCategory, groupedByCategories(partners.edges)[highCategory].length));
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
    key: "renderFeedbackLine",
    value: function renderFeedbackLine() {
      return React.createElement(FeedbackContainer, null, "Generated using partial data.\xA0", React.createElement(_TextLink.default, {
        color: _Colors.default.graySemibold,
        underline: true,
        href: "mailto:productfeedback@artsy.net?subject=Feedback on \"About the Artist\" information"
      }, "Tell us what you think."));
    }
  }, {
    key: "render",
    value: function render() {
      if (hasSections(this.props.artist)) {
        return React.createElement(MarketInsightsContainer, null, React.createElement(MarketInsightsDataContainer, null, this.renderAuctionHighlight(), this.renderGalleryRepresentation(), this.renderPermanentCollection()), this.renderFeedbackLine());
      }

      return null;
    }
  }]);

  return MarketInsights;
}(React.Component);

exports.MarketInsights = MarketInsights;

var _default = (0, _reactRelay.createFragmentContainer)(MarketInsights, {
  artist: function artist() {
    var node = require("../../../../__generated__/MarketInsights_artist.graphql");

    if (node.hash && node.hash !== "bc1709cbe4b0a9523e937f00dbd67ede") {
      console.error("The definition of 'MarketInsights_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/MarketInsights_artist.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=MarketInsights.js.map