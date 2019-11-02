"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuctionFAQQueryRenderer = exports.AuctionFAQFragmentContainer = exports.AuctionFAQ = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var _renderWithLoadProgress = require("../../../Artsy/Relay/renderWithLoadProgress");

var _SystemQueryRenderer = require("../../../Artsy/Relay/SystemQueryRenderer");

var _react = _interopRequireDefault(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _graphql;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin: ", "px auto;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AuctionFAQ = function AuctionFAQ(_ref) {
  var viewer = _ref.viewer;
  var biddingContent = viewer.bidding && viewer.bidding.content;
  var buyersPremiumTaxesAndFeesContent = viewer.buyersPremiumTaxesAndFees && viewer.buyersPremiumTaxesAndFees.content;
  var paymentsAndShippingContent = viewer.paymentsAndShipping && viewer.paymentsAndShipping.content;
  var emailsAndAlertsContent = viewer.emailsAndAlerts && viewer.emailsAndAlerts.content;
  var conditionsOfSaleContent = viewer.conditionsOfSale && viewer.conditionsOfSale.content;
  return _react.default.createElement(_palette.Theme, null, _react.default.createElement(AuctionWrapper, null, _react.default.createElement(_palette.Serif, {
    size: "8",
    color: "black100"
  }, "Auction FAQs"), _react.default.createElement(_palette.Spacer, {
    mb: 2
  }), _react.default.createElement(_palette.Serif, {
    size: "3",
    color: "black100"
  }, "How can we help you? Below are answers to some of the most common questions from collectors.", _react.default.createElement("br", null), "Need more immediate assistance? Please", " ", _react.default.createElement("a", {
    href: "mailto:support@artsy.net"
  }, "contact us"), "."), _react.default.createElement(_palette.Spacer, {
    mb: 2
  }), biddingContent && _react.default.createElement(_palette.Toggle, {
    label: "Bidding"
  }, _react.default.createElement(StyledMarkdown, {
    source: biddingContent,
    containerTagName: "div",
    unwrapDisallowed: true
  })), buyersPremiumTaxesAndFeesContent && _react.default.createElement(_palette.Toggle, {
    label: "Buyer's Premium, Taxes & Fees"
  }, _react.default.createElement(StyledMarkdown, {
    source: buyersPremiumTaxesAndFeesContent,
    containerTagName: "div",
    unwrapDisallowed: true
  })), paymentsAndShippingContent && _react.default.createElement(_palette.Toggle, {
    label: "Payments and Shipping"
  }, _react.default.createElement(StyledMarkdown, {
    source: paymentsAndShippingContent,
    containerTagName: "div",
    unwrapDisallowed: true
  })), emailsAndAlertsContent && _react.default.createElement(_palette.Toggle, {
    label: "Emails and Alerts"
  }, _react.default.createElement(StyledMarkdown, {
    source: emailsAndAlertsContent,
    containerTagName: "div",
    unwrapDisallowed: true
  })), conditionsOfSaleContent && _react.default.createElement(_palette.Toggle, {
    label: "Conditions of Sale"
  }, _react.default.createElement(StyledMarkdown, {
    source: conditionsOfSaleContent,
    containerTagName: "div",
    unwrapDisallowed: true
  }))));
};

exports.AuctionFAQ = AuctionFAQ;
var AuctionWrapper = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "AuctionFAQ__AuctionWrapper",
  componentId: "sc-1krcvcr-0"
})(["max-width:600px;margin:", "px auto;padding:", "px;", ";"], (0, _palette.space)(4), (0, _palette.space)(2), _palette.media.xs(_templateObject(), (0, _palette.space)(1)));
var StyledMarkdown = (0, _styledComponents.default)(_reactMarkdown.default).withConfig({
  displayName: "AuctionFAQ__StyledMarkdown",
  componentId: "sc-1krcvcr-1"
})(["h2{font-family:\"Adobe Garamond W08\",\"adobe-garamond-pro\",\"AGaramondPro-Regular\",\"Times New Roman\",Times,serif;font-weight:600;font-size:16px;line-height:24px;}p{margin-bottom:20px;font-family:\"Adobe Garamond W08\",adobe-garamond-pro,AGaramondPro-Regular,\"Times New Roman\",Times,serif;font-size:16px;line-height:24px;}p:last-child{margin-bottom:0;}"]);
var AuctionFAQFragmentContainer = (0, _reactRelay.createFragmentContainer)(AuctionFAQ, {
  viewer: function viewer() {
    var node = require("../../../__generated__/AuctionFAQ_viewer.graphql");

    if (node.hash && node.hash !== "e29df207450f132c887a37fde758a3ac") {
      console.error("The definition of 'AuctionFAQ_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/AuctionFAQ_viewer.graphql");
  }
});
exports.AuctionFAQFragmentContainer = AuctionFAQFragmentContainer;

var AuctionFAQQueryRenderer = function AuctionFAQQueryRenderer() {
  var _useSystemContext = (0, _Artsy.useSystemContext)(),
      relayEnvironment = _useSystemContext.relayEnvironment;

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    variables: {},
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../../__generated__/AuctionFAQQuery.graphql");

      if (node.hash && node.hash !== "a3919be173a3a996315aa0da7c1bc1e6") {
        console.error("The definition of 'AuctionFAQQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../../__generated__/AuctionFAQQuery.graphql");
    }),
    render: (0, _renderWithLoadProgress.renderWithLoadProgress)(AuctionFAQFragmentContainer)
  });
};

exports.AuctionFAQQueryRenderer = AuctionFAQQueryRenderer;
//# sourceMappingURL=AuctionFAQ.js.map