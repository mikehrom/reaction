"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfferHistoryItemFragmentContainer = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.filter");

var _palette = require("@artsy/palette");

var _StepSummaryItem = require("../../../Components/v2/StepSummaryItem");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _RevealButton = require("./RevealButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var OfferHistoryItem = function OfferHistoryItem(_ref) {
  var _ref$order = _ref.order,
      totalListPrice = _ref$order.totalListPrice,
      lastOffer = _ref$order.lastOffer,
      offers = _ref$order.offers,
      others = _objectWithoutProperties(_ref, ["order"]);

  var previousOffers = offers.edges.filter(function (_ref2) {
    var id = _ref2.node.id;
    return id !== lastOffer.id;
  });
  return _react.default.createElement(_StepSummaryItem.StepSummaryItem, others, _react.default.createElement(Row, null, _react.default.createElement(_palette.Serif, {
    size: ["2", "3"],
    color: "black100",
    weight: "semibold"
  }, lastOffer.fromParticipant === "SELLER" ? "Seller's offer" : "Your offer"), _react.default.createElement(_palette.Serif, {
    size: ["2", "3"],
    color: "black100"
  }, lastOffer.amount)), _react.default.createElement(Row, null, _react.default.createElement("div", null), _react.default.createElement(_palette.Sans, {
    size: "2",
    color: "black60"
  }, "List price: ", totalListPrice)), lastOffer.note && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
    mb: 2
  }), _react.default.createElement(_palette.Serif, {
    size: ["2", "3"],
    color: "black100",
    weight: "semibold"
  }, lastOffer.fromParticipant === "SELLER" ? "Seller's note" : "Your note"), _react.default.createElement(_palette.Serif, {
    size: "2",
    color: "black60"
  }, lastOffer.note), _react.default.createElement(_palette.Spacer, {
    mb: 1
  })), previousOffers.length > 0 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
    mb: 2
  }), _react.default.createElement(_RevealButton.RevealButton, {
    buttonLabel: "Show offer history"
  }, _react.default.createElement(_palette.Flex, {
    m: 0,
    flexDirection: "column"
  }, _react.default.createElement(_palette.Serif, {
    size: ["2", "3"],
    color: "black100",
    weight: "semibold"
  }, "Offer history"), previousOffers.map(function (_ref3) {
    var offer = _ref3.node;
    return _react.default.createElement(Row, {
      key: offer.id
    }, _react.default.createElement(_palette.Serif, {
      size: ["2", "3"],
      color: "black60"
    }, offer.fromParticipant === "BUYER" ? "You" : "Seller", " (".concat(offer.createdAt, ")")), _react.default.createElement(_palette.Serif, {
      size: ["2", "3"],
      color: "black60"
    }, offer.amount));
  })))));
};

var Row = function Row(_ref4) {
  var children = _ref4.children,
      others = _objectWithoutProperties(_ref4, ["children"]);

  return _react.default.createElement(_palette.Flex, _extends({
    justifyContent: "space-between",
    alignItems: "baseline"
  }, others), children);
};

var OfferHistoryItemFragmentContainer = (0, _reactRelay.createFragmentContainer)(OfferHistoryItem, {
  order: function order() {
    var node = require("../../../__generated__/OfferHistoryItem_order.graphql");

    if (node.hash && node.hash !== "9d72783a423b991ef7aa55d4ffcfb39b") {
      console.error("The definition of 'OfferHistoryItem_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/OfferHistoryItem_order.graphql");
  }
});
exports.OfferHistoryItemFragmentContainer = OfferHistoryItemFragmentContainer;
//# sourceMappingURL=OfferHistoryItem.js.map